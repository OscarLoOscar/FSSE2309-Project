package com.example.shoppingcart.services;

import com.example.shoppingcart.entity.Transaction;

public interface TransactionService {
  Transaction getTransactionByTransactionId(Long transactionId);
}
