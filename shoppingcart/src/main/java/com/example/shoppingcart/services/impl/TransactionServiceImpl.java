package com.example.shoppingcart.services.impl;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.shoppingcart.entity.Transaction;
import com.example.shoppingcart.infra.enums.TranStatus;
import com.example.shoppingcart.model.Mapper;
import com.example.shoppingcart.model.TransactionData;
import com.example.shoppingcart.repository.TransactionRepository;
import com.example.shoppingcart.services.TransactionService;
import com.example.shoppingcart.services.UserService;

@Service
public class TransactionServiceImpl implements TransactionService {

  @Autowired
  UserServiceImpl userService;

  @Autowired
  TransactionRepository transactionRepository;


  @Override
  public Transaction getTransactionByTransactionId(Long transactionId) {
    return transactionRepository.findById(transactionId).get();
  }


  @Override
  public List<Transaction> getTransactionByuserId(Long uid) {
    return transactionRepository.findAlltransactionByUserid(uid);
  }


  @Override
  public TransactionData createTransaction(Long userId) {
    Transaction recode = Transaction.builder()//
        .user(Mapper.map(userService.getUserById(userId)))//
        .datetime(LocalDateTime.now())//
        .status(TranStatus.PREPARE.name())//
        .totalPrice(BigDecimal.TEN)//
        .build();
    transactionRepository.save(recode);
    return Mapper.map(recode);
  }

}
