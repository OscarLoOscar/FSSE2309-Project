package com.example.shoppingcart.exception;

public class UserNotExistException extends BusinessException {
  public UserNotExistException(Code code) {
    super(code);
  }
}
