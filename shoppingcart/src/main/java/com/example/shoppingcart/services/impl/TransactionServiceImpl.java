package com.example.shoppingcart.services.impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.shoppingcart.entity.Transaction;
import com.example.shoppingcart.entity.TransactionProduct;
import com.example.shoppingcart.infra.enums.TranStatus;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.CartItemStorage;
import com.example.shoppingcart.model.Mapper;
import com.example.shoppingcart.model.TransactionData;
import com.example.shoppingcart.model.TransactionProductData;
import com.example.shoppingcart.model.UserData;
import com.example.shoppingcart.repository.TransactionRepository;
import com.example.shoppingcart.services.TransactionService;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TransactionServiceImpl implements TransactionService {

  private final UserServiceImpl userService;
  private final TransactionRepository transactionRepository;
  private final CartItemServiceImpl cartItemService;
  private final TransactionProductServiceImpl transactionProductServiceImpl;
  private final CartItemStorage cartItemStorage;

  @Autowired
  public TransactionServiceImpl(UserServiceImpl userService,
      TransactionRepository transactionRepository,
      CartItemServiceImpl cartItemService,
      TransactionProductServiceImpl transactionProductServiceImpl,
      CartItemStorage cartItemStorage) {
    this.userService = userService;
    this.transactionRepository = transactionRepository;
    this.cartItemService = cartItemService;
    this.transactionProductServiceImpl = transactionProductServiceImpl;
    this.cartItemStorage = cartItemStorage;
  }

  @Transactional
  @Override
  public TransactionData createTransaction(Long userId) {
    // Step 1: Create Transaction Record
    Transaction transactionRecord = createTransactionRecord(userId);

    // Step 2: Retrieve and Clear Cart Items
    List<CartItemData> cartItemDataList = retrieveAndClearCartItems(userId);

    // Step 3: Save Transaction Products
    List<TransactionProductData> transactionProductDataList =
        saveTransactionProducts(transactionRecord, cartItemDataList);

    // Step 4: Update Transaction Record with Total Price
    updateTransactionTotalPrice(transactionRecord, transactionProductDataList);

    // Step 5: Build and Return Transaction Data
    return buildTransactionData(transactionRecord, transactionProductDataList);
  }

  private Transaction createTransactionRecord(Long userId) {
    UserData userData = userService.getUserById(userId);
    Transaction transactionRecord = Transaction.builder()
        .user(Mapper.map(userData)).datetime(LocalDateTime.now())
        .status(TranStatus.PREPARE.name()).build();

    // Calculate and set the total price
    BigDecimal totalPrice = calculateTotalPrice(Collections.emptyList()); // Pass an empty list or the appropriate list
    transactionRecord.setTotalPrice(totalPrice);

    // Save the transaction to generate the ID
    transactionRepository.save(transactionRecord);

    return transactionRecord;
  }

  // private List<CartItemData> retrieveAndClearCartItems(Long userId) {
  // List<CartItemData> cartItemDataList =
  // cartItemService.findAllByUserUid(userId).get();
  // cartItemStorage.clearCartItems();
  // return cartItemDataList;
  // }
  private List<CartItemData> retrieveAndClearCartItems(Long userId) {
    Optional<List<CartItemData>> optionalCartItems =
        cartItemService.findAllByUserUid(userId);

    if (optionalCartItems.isPresent()) {
      List<CartItemData> cartItemDataList = optionalCartItems.get();
      cartItemStorage.clearCartItems();
      return cartItemDataList;
    } else {
      // handle the case when cart items are not present
      return Collections.emptyList(); // or throw an exception, depending on your requirements
    }
  }

  private List<TransactionProductData> saveTransactionProducts(
      Transaction transactionRecord, List<CartItemData> cartItemDataList) {
    List<TransactionProductData> transactionProductDataList = new ArrayList<>();
    for (CartItemData cartItemData : cartItemDataList) {
      TransactionProductData transactionProductData =
          saveTransactionProduct(transactionRecord, cartItemData);
      transactionProductDataList.add(transactionProductData);
    }
    return transactionProductDataList;
  }

  private TransactionProductData saveTransactionProduct(
      Transaction transactionRecord, CartItemData cartItemData) {
    TransactionProductData transactionProductData =
        TransactionProductData.builder().cartItemData(cartItemData)
            .quantity(cartItemData.getQuantity())
            .totalPrice(
                cartItemData.getQuantity().multiply(cartItemData.getPrice()))
            .build();

    TransactionProduct transactionProduct = Mapper.map(transactionProductData);
    transactionProduct.setTransaction(transactionRecord);
    transactionProductServiceImpl.save(transactionProduct);
    //
    log.info("Before clearing cart items 2: " + cartItemStorage.getCartItems());
    cartItemStorage.clearCartItems();
    log.info("After clearing cart items 2 : " + cartItemStorage.getCartItems());
    //
    transactionProductData.setTpid(transactionProduct.getTpid());

    return transactionProductData;
  }

  private TransactionData buildTransactionData(Transaction transactionRecord,
      List<TransactionProductData> transactionProductDataList) {
    TransactionData output = Mapper.map(transactionRecord);
    output.setItems(transactionProductDataList);
    return output;
  }

  @Override
  public Transaction getTransactionByTransactionId(Long transactionId) {
    return transactionRepository.findById(transactionId).orElse(null);
  }

  @Override
  public List<Transaction> findAllByBuyerUid(Long uid) {
    return transactionRepository.findAllByBuyerUid(uid);
  }

  @Override
  public TransactionData findByTidAndUid(Long tid, Long uid) {
    return Mapper.map(transactionRepository.findByTidAndUid(tid, uid));
  }

  private void updateTransactionTotalPrice(Transaction transactionRecord,
      List<TransactionProductData> transactionProductDataList) {
    BigDecimal totalPrice = calculateTotalPrice(transactionProductDataList);
    transactionRecord.setTotalPrice(totalPrice);
    transactionRepository.save(transactionRecord);
  }

  private BigDecimal calculateTotalPrice(
      List<TransactionProductData> transactionProductDataList) {
    return transactionProductDataList.stream()
        .map(TransactionProductData::getTotalPrice)//
        .filter(Objects::nonNull)// //Add a null check here
        .reduce(BigDecimal.ZERO, BigDecimal::add);
  }
}
