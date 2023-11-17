package com.example.shoppingcart.exception;

public class CartItemNotFoundException extends BusinessException {
  public CartItemNotFoundException(Code code) {
    super(code);
  }
}
