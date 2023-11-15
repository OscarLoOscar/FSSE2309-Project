package com.example.shoppingcart.services;

import java.util.List;
import com.example.shoppingcart.entity.Transaction;
import com.example.shoppingcart.model.TransactionData;

public interface TransactionService {
  TransactionData createTransaction(Long userId);

  Transaction getTransactionByTransactionId(Long transactionId);

  List<Transaction> getTransactionByuserId(Long uid);

}
