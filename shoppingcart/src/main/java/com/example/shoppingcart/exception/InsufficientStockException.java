package com.example.shoppingcart.exception;

public class InsufficientStockException extends BusinessException {

  public InsufficientStockException(Code code) {
    super(code);
  }

}
