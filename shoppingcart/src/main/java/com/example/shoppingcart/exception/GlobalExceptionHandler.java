package com.example.shoppingcart.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(value = FSSE2309Exception.class)
  @ResponseStatus(value = HttpStatus.OK)
  public ApiResp<Void> finnhubExceptionHandler(FSSE2309Exception e) {
    return ApiResp.<Void>builder() //
        .status(Code.fromCode(e.getCode())) //
        .data(null) //
        .build();
  }

  @ExceptionHandler(value = RuntimeException.class)
  @ResponseStatus(value = HttpStatus.BAD_REQUEST)
  public ApiResp<Void> runtimeExceptionHandler(RuntimeException e) {
    return ApiResp.<Void>builder() //
        .status(getRespCode(e)) //
        .concatMessageIfPresent(e.getMessage()).data(null) //
        .build();
  }

  @ExceptionHandler(value = Exception.class)
  @ResponseStatus(value = HttpStatus.BAD_REQUEST)
  public ApiResp<Void> exceptionHandler(Exception e) {
    return ApiResp.<Void>builder() //
        .status(getRespCode(e)) //
        .concatMessageIfPresent(e.getMessage()).data(null) //
        .build();
  }

  private static Code getRespCode(Exception e) {
    if (e instanceof IllegalArgumentException) {
      return Code.IAE_EXCEPTION;
    }
    // ...
    return null;
  }
}