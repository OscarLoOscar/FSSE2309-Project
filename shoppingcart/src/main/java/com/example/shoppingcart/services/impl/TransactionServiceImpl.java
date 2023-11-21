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
  // private final CartItemStorage cartItemStorage;

  @Autowired
  public TransactionServiceImpl(UserServiceImpl userService,
      TransactionRepository transactionRepository,
      CartItemServiceImpl cartItemService,
      TransactionProductServiceImpl transactionProductServiceImpl) {
    this.userService = userService;
    this.transactionRepository = transactionRepository;
    this.cartItemService = cartItemService;
    this.transactionProductServiceImpl = transactionProductServiceImpl;
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
        .user(Mapper.map(userData))//
        .datetime(LocalDateTime.now())
        .status(TranStatus.PREPARE)//
        .build();

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
      // cartItemStorage.clearCartItems();
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
        TransactionProductData.builder()//
            .cartItemData(cartItemData)//
            .quantity(cartItemData.getQuantity())//
            .totalPrice(
                cartItemData.getQuantity().multiply(cartItemData.getPrice()))//
            .build();

    TransactionProduct transactionProduct = Mapper.map(transactionProductData);// desc , stock is null
    transactionProduct.setTransaction(transactionRecord);
    transactionProductServiceImpl.save(transactionProduct);
    //
    // log.info("Before clearing cart items 2: " + cartItemStorage.getCartItems());
    // cartItemStorage.clearCartItems();
    // log.info("After clearing cart items 2 : " + cartItemStorage.getCartItems());
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

  @Override
  public TransactionData getTransactionDetailByTransactionId(Long tid,
      Long uid) {
    // 2. get all transaction by userId
    TransactionData tList = this.findByTidAndUid(tid, uid);
    // 3.get transaction product by tid
    List<TransactionProduct> tpList = transactionProductServiceImpl
        .findAllTransactionProductByTransactionId(tid);

    // 4.get all cart_item by userId
    List<CartItemData> cList = cartItemService.findAllByUserUid(uid).get();

    // 5.convent from List<TransactionProduct> to List<TransactionProductData>
    List<TransactionProductData> items = new ArrayList<>();

    CartItemData matchedCartItem = null;
    for (TransactionProduct tp : tpList) {
      Transaction t = tp.getTransaction();
      matchedCartItem = findMatchingCartItem(tp, t, cList);

      // Create a new TransactionProductData instance for each iteration
      TransactionProductData transactionProductData = Mapper.map(tp);
      if (matchedCartItem != null) {
        items.add(transactionProductData);
      }
    }

    // 6.ensure correct placement of return statement
    if (!items.isEmpty()) {
      // Assuming total calculation is correct based on matchedCartItem
      BigDecimal total =
          matchedCartItem.getPrice().multiply(items.get(0).getQuantity());

      return TransactionData.builder()//
          .transactionId(tid)//
          .buyerUid(uid)//
          .datetime(tList.getDatetime())//
          .status(tList.getStatus())//
          .total(total.setScale(2))//
          .items(items)//

          .build();
    }

    return null;
  }

  // 7.Encapsulate for finding match cart item
  private CartItemData findMatchingCartItem(TransactionProduct tp,
      Transaction t, List<CartItemData> cList) {
    for (CartItemData c : cList) {
      if (c.getPid().equals(tp.getPid())
          && tp.getTransaction().getTid().equals(t.getTid())) {
        return c;
      }
    }
    return null;
  }


  @Override
  public boolean updateTransactionToProcessing(Long tid, Long uid) {
    // Fetch the transaction By ID
    Transaction transaction = this.getTransactionByTransactionId(tid);

    if (transaction != null) {
      // update the transaction status to PROCESSING
      transaction.setStatus(TranStatus.PROCESSING);
      transactionRepository.save(transaction);
      return true;
    }
    return false;
  }

  @Override
  public TransactionData finishTransaction(Long tid, Long uid) {
    // Fetch the transaction By ID
    Transaction transaction = this.getTransactionByTransactionId(tid);

    // 3.get transaction product by tid
    List<TransactionProduct> tpList = transactionProductServiceImpl
        .findAllTransactionProductByTransactionId(tid);
    // 4.get all cart_item by userId
    List<CartItemData> cList = cartItemService.findAllByUserUid(uid).get();

    if (transaction != null) {
      // update the transaction status to FINISH
      transaction.setStatus(TranStatus.FINISH);

      transactionRepository.save(transaction);

      // return a success response
      // return ResponseEntity.ok(Mapper.map(transaction));
      List<TransactionProductData> items = new ArrayList<>();

      CartItemData matchedCartItem = null;
      for (TransactionProduct tp : tpList) {
        Transaction t = tp.getTransaction();
        matchedCartItem = findMatchingCartItem(tp, t, cList);

        // Create a new TransactionProductData instance for each iteration
        TransactionProductData transactionProductData = Mapper.map(tp);
        if (matchedCartItem != null) {
          items.add(transactionProductData);
        }
      }

      return TransactionData.builder()//
          .transactionId(tid)//
          .buyerUid(uid)//
          .datetime(transaction.getDatetime())//
          .status(transaction.getStatus())//
          .total(transaction.getTotalPrice())//
          .items(items)//
          .build();

    }
    return null;
  }
}
