package com.example.shoppingcart.services.impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.shoppingcart.entity.CartItem;
import com.example.shoppingcart.entity.Transaction;
import com.example.shoppingcart.entity.TransactionProduct;
import com.example.shoppingcart.infra.enums.TranStatus;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.Mapper;
import com.example.shoppingcart.model.TransactionData;
import com.example.shoppingcart.model.TransactionProductData;
import com.example.shoppingcart.repository.TransactionRepository;
import com.example.shoppingcart.services.TransactionService;
import com.example.shoppingcart.services.UserService;
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
    for (CartItemData cartItemData : cartItemService
        .getUserCartItemsByUserId(userId)) {
      listOfCD.add(cartItemData);
    }
    log.info("CHECKT listOfCD : " + listOfCD);
    // DONE

    // for Transaction_product DataBase
    List<TransactionProductData> listOfTPD = new ArrayList<>();
    for (CartItemData cartItemData : cartItemService
        .getUserCartItemsByUserId(userId)) {
      TransactionProductData transactionProductData =
          TransactionProductData.builder()//
              .cartItemData(cartItemData)//
              .quantity(cartItemData.getQuantity())//
              .totalPrice(BigDecimal.valueOf(cartItemData.getStock())
                  .multiply(cartItemData.getPrice()))//
              .build();
      // for new TransactionProduct to DB
      TransactionProduct transactionProduct =
          Mapper.map(transactionProductData);
      transactionProductServiceImpl.save(transactionProduct);
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
  public List<Transaction> getTransactionByuserId(Long uid) {
    return transactionRepository.findAlltransactionByBuyerUid(uid);
  }
}


// List<TransactionProduct> listOfTP = transactionProductService
// .findAllTransactionProductByTransactionId(recode.getTid());
// log.info("TS listOfTP : " + listOfTP);
// List<TransactionProductData> listOfTPD = new ArrayList<>();
// for (TransactionProduct tp : listOfTP) {
// listOfTPD.add(Mapper.map(tp));
// }
// log.info("TS listOfTPD : " + listOfTPD);
// output.setItems(listOfTPD);
// log.info("Final output : " + output);
