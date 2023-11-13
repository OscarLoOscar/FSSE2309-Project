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
  public void addUserOrder(TransactionProduct UserOrder) {
    transactionProductRepository.save(UserOrder);
  }

  // @Override
  // public double getUserOrderTotal(Long cartId) {
  // double total = 0;
  // Transaction cart = cartService.getCartByCartId(cartId);
  // List<TransactionProduct> cartItems = cart.getCartItem();
  // for (TransactionProduct item : cartItems) {
  // total += item.getPrice();
  // }
  // return total;

  // }

}
