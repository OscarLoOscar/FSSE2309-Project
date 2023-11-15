package com.example.shoppingcart.services;

import java.util.List;
import com.example.shoppingcart.entity.TransactionProduct;

public interface TransactionProductService {

  void save(TransactionProduct UserOrder);

  List<TransactionProduct> findAllTransactionProductByTransactionId(Long tid);

  TransactionProduct findProductByProductId(Long pid);

}
