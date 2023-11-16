package com.example.shoppingcart.services.impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
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
import com.example.shoppingcart.repository.TransactionRepository;
import com.example.shoppingcart.services.TransactionService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
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
    // for Transaction DataBase
    Transaction recode = Transaction.builder()//
        .user(Mapper.map(userService.getUserById(userId)))//
        .datetime(LocalDateTime.now())//
        .status(TranStatus.PREPARE.name())//
        .totalPrice(BigDecimal.TEN)//
        .build();
    log.info("TS recode : " + recode);
    transactionRepository.save(recode);
    TransactionData output = Mapper.map(recode);

    List<CartItemData> listOfCD = new ArrayList<>();
    for (CartItemData cartItemData : cartItemService.findAllByUserUid(userId)) {
      listOfCD.add(cartItemData);
    }
    log.info("CHECKT listOfCD : " + listOfCD);
    // DONE

    // for Transaction_product DataBase
    List<TransactionProductData> listOfTPD = new ArrayList<>();
    for (CartItemData cartItemData : cartItemService.findAllByUserUid(userId)) {
      TransactionProductData transactionProductData =
          TransactionProductData.builder()//
              .cartItemData(cartItemData)//
              .quantity(cartItemData.getQuantity())//
              .totalPrice(
                  cartItemData.getQuantity().multiply(cartItemData.getPrice()))//
              .build();
      // for new TransactionProduct to DB
      TransactionProduct transactionProduct =
          Mapper.map(transactionProductData);
      // set tid to DB
      transactionProduct.setTransaction(recode);

      transactionProductServiceImpl.save(transactionProduct);
      cartItemStorage.clearCartItems();

      // after save to DB , get primary key , set back to DTO
      transactionProductData.setTpid(transactionProduct.getTpid());

      log.info("CHECKING transactionProduct : " + transactionProduct);
      transactionProductData.setCartItemData(cartItemData);
      // 添加其他必要的屬性賦值
      listOfTPD.add(transactionProductData);
    }
    output.setItems(listOfTPD);
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
