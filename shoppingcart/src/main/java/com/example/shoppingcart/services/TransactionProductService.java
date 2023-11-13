package com.example.shoppingcart.services;

import com.example.shoppingcart.entity.CartItem;
import com.example.shoppingcart.entity.TransactionProduct;

public interface TransactionProductService {

  void addUserOrder(TransactionProduct UserOrder);

  // double getUserOrderTotal(Long cartId);
}
