package com.example.shoppingcart.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.shoppingcart.entity.Transaction;
import com.example.shoppingcart.repository.TransactionRepository;
import com.example.shoppingcart.services.TransactionService;

@Service
public class TransactionServiceImpl implements TransactionService {

  @Autowired
  TransactionRepository transactionRepository;


  @Override
  public Transaction getTransactionByTransactionId(Long transactionId) {
    return transactionRepository.findById(transactionId).get();
  }

}
