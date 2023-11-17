package com.example.shoppingcart.exception;

public class ProductNotExistException extends BusinessException {
  public ProductNotExistException(Code code) {
    super(code);
  }
}
