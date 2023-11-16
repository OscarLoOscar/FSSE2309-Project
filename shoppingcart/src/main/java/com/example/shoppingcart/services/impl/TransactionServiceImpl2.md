package com.example.shoppingcart.services.impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.shoppingcart.entity.Transaction;
import com.example.shoppingcart.entity.TransactionProduct;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.infra.enums.TranStatus;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.CartItemStorage;
import com.example.shoppingcart.model.Mapper;
import com.example.shoppingcart.model.TransactionData;
import com.example.shoppingcart.model.TransactionProductData;
import com.example.shoppingcart.model.UserData;
import com.example.shoppingcart.repository.TransactionRepository;
import com.example.shoppingcart.services.TransactionService;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TransactionServiceImpl implements TransactionService {

  @Autowired
  UserServiceImpl userService;

  @Autowired
  ProductServiceImpl productService;

  @Autowired
  TransactionRepository transactionRepository;

  @Autowired
  CartItemServiceImpl cartItemService;

  @Autowired
  TransactionProductServiceImpl transactionProductServiceImpl;

  @Autowired
  CartItemStorage cartItemStorage;

  @Override
  public TransactionData createTransaction(Long userId) {
    Transaction record = createTransactionRecord(userId);
    List<CartItemData> cartItemDataList = retrieveAndClearCartItems(userId);
    List<TransactionProductData> transactionProductDataList =
        saveTransactionProducts(record, cartItemDataList);

    return buildTransactionData(record, transactionProductDataList);
  }

  private Transaction createTransactionRecord(Long userId) {
    UserData userData = userService.getUserById(userId);
    Transaction record = Transaction.builder()//
        .user(Mapper.map(userData))//
        .datetime(LocalDateTime.now())//
        .status(TranStatus.PREPARE.name())//
        .totalPrice(BigDecimal.TEN)//
        .build();

    transactionRepository.save(record);
    return record;
  }

  private List<CartItemData> retrieveAndClearCartItems(Long userId) {
    List<CartItemData> cartItemDataList =
        cartItemService.findAllByUserUid(userId).get();
    log.info("Before clearing cart items 1 : " + cartItemStorage.getCartItems());
    cartItemStorage.clearCartItems();
    log.info("After clearing cart items 1 : " + cartItemStorage.getCartItems());
    return cartItemDataList;
  }

  private List<TransactionProductData> saveTransactionProducts(
      Transaction record, List<CartItemData> cartItemDataList) {
    List<TransactionProductData> transactionProductDataList = new ArrayList<>();
    for (CartItemData cartItemData : cartItemDataList) {
      TransactionProductData transactionProductData =
          saveTransactionProduct(record, cartItemData);
      transactionProductDataList.add(transactionProductData);
    }
    return transactionProductDataList;
  }

  private TransactionProductData saveTransactionProduct(Transaction record,
      CartItemData cartItemData) {
    TransactionProductData transactionProductData =
        TransactionProductData.builder().cartItemData(cartItemData)
            .quantity(cartItemData.getQuantity())
            .totalPrice(
                cartItemData.getQuantity().multiply(cartItemData.getPrice()))
            .build();

    TransactionProduct transactionProduct = Mapper.map(transactionProductData);
    transactionProduct.setTransaction(record);
    transactionProductServiceImpl.save(transactionProduct);
    transactionProductData.setTpid(transactionProduct.getTpid());

    log.info("Before clearing cart items 2 : " + cartItemStorage.getCartItems());
    cartItemStorage.clearCartItems();
    log.info("After clearing cart items 2 : " + cartItemStorage.getCartItems());

    return transactionProductData;
  }

  private TransactionData buildTransactionData(Transaction record,
      List<TransactionProductData> transactionProductDataList) {
    TransactionData output = Mapper.map(record);
    output.setItems(transactionProductDataList);
    return output;
  }


  @Override
  public Transaction getTransactionByTransactionId(Long transactionId) {
    return transactionRepository.findById(transactionId).get();
  }


  @Override
  public List<Transaction> findAllByBuyerUid(Long uid) {
    return transactionRepository.findAllByBuyerUid(uid);
  }

  @Override
  public TransactionData findByTidAndUid(Long tid, Long uid) {
    return Mapper.map(transactionRepository.findByTidAndUid(tid, uid));
  }

}
