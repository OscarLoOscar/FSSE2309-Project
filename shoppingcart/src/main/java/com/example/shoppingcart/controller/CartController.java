package com.example.shoppingcart.controller;

import com.example.shoppingcart.entity.Transaction;

public interface CartController {
  String getCartId();// useful ?

  Transaction getCart();
}
