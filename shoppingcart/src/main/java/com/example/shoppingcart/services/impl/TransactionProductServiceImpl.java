package com.example.shoppingcart.services.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.shoppingcart.entity.Transaction;
import com.example.shoppingcart.entity.TransactionProduct;
import com.example.shoppingcart.repository.TransactionProductRepository;
import com.example.shoppingcart.services.TransactionProductService;
import com.example.shoppingcart.entity.CartItem;

@Service
public class TransactionProductServiceImpl
    implements TransactionProductService {
  @Autowired
  TransactionProductRepository transactionProductRepository;

  @Override
  public void save(TransactionProduct UserOrder) {
    transactionProductRepository.save(UserOrder);
  }

  @Override
  public List<TransactionProduct> findAllTransactionProductByTransactionId(
      Long tid) {
    return transactionProductRepository
        .findAllTransactionProductByTid(tid);
  }

  @Override
  public TransactionProduct findProductByProductId(Long pid) {
    return transactionProductRepository.findProductByPid(pid);
  }
}