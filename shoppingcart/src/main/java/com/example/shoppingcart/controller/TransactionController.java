package com.example.shoppingcart.controller;

import org.springframework.http.HttpStatus;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import com.example.shoppingcart.model.TransactionData;

public interface TransactionController {

  // 7. POST /transaction/prepare: Create a new transaction (Preparing state)
  @PostMapping("/prepare")
  @ResponseStatus(HttpStatus.CREATED)
  public TransactionData createTransaction(JwtAuthenticationToken jwt);
}
