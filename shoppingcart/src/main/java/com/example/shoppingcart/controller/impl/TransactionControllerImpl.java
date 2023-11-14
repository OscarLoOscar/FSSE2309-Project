package com.example.shoppingcart.controller.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.shoppingcart.controller.TransactionController;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.infra.JwtUntil;
import com.example.shoppingcart.model.FireBaseUserData;
import com.example.shoppingcart.model.TransactionData;
import com.example.shoppingcart.services.CartItemService;
import com.example.shoppingcart.services.UserService;
import com.example.shoppingcart.services.impl.TransactionServiceImpl;

@RestController
@RequestMapping("/transaction")
public class TransactionControllerImpl implements TransactionController {

  UserService userService;

  CartItemService cartItemService;

  TransactionServiceImpl transactionServiceImpl;

  @Autowired
  public TransactionControllerImpl(
      TransactionServiceImpl transactionServiceImpl, //
      UserService userService, //
      CartItemService cartItemService) {
    this.transactionServiceImpl = transactionServiceImpl;
    this.userService = userService;
    this.cartItemService = cartItemService;
  }

  @Override
  public TransactionData createTransaction(JwtAuthenticationToken jwt) {
    // check user
    FireBaseUserData user = JwtUntil.getFireBaseUser(jwt);
    UserEntity userEntity = userService.getEntityByFireBaseUserData(user);
    return null;
  }

}
