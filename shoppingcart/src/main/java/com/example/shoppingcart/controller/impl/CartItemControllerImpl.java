package com.example.shoppingcart.controller.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.infra.JwtUntil;
import com.example.shoppingcart.infra.enums.TransactionStatus;
import com.example.shoppingcart.controller.CartItemController;
import com.example.shoppingcart.entity.TransactionProduct;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.FireBaseUserData;
import com.example.shoppingcart.model.ProductData;
import com.example.shoppingcart.model.UserData;
import com.example.shoppingcart.services.CartItemService;
import com.example.shoppingcart.services.UserService;
import com.example.shoppingcart.services.impl.CartItemServiceImpl;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/cart")
public class CartItemControllerImpl implements CartItemController {

  CartItemServiceImpl cartItemService;

  UserService userService;

  @Autowired
  public CartItemControllerImpl(CartItemServiceImpl cartItemService, //
      UserService userService) {
    this.cartItemService = cartItemService;
    this.userService = userService;
  }

  @Override
  public ResponseEntity<List<CartItemData>> getUserCartItems(
      JwtAuthenticationToken authentication) {
    if (authentication == null || !authentication.isAuthenticated()) {
      return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
    // Retrieve the usename from authentication object
    String userName = authentication.getName();

    // Call service to get user cart items
    List<CartItemData> userCartItems =
        cartItemService.getUserCartItems(userName);

    if (userCartItems == null || userCartItems.isEmpty())
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    return new ResponseEntity<>(userCartItems, HttpStatus.OK);
  }



  @Override
  public void deleteCartItemByCartItemId(String cartItemId) {
    cartItemService.deleteCartItemByCartItemId(Long.valueOf(cartItemId));
  }

  @Override
  public void deleteAllCartItem() {
    cartItemService.deleteAllCartItem();
  }

  // postman : development environment
  @Override
  public ResponseEntity<String> addCartItem(JwtAuthenticationToken jwt, //
      String pid, //
      String quantity) {
    FireBaseUserData user = new FireBaseUserData(jwt);
    UserEntity userEntity = userService.getEntityByFireBaseUserData(user);
    log.info(userEntity.toString());
    cartItemService.addCartItem(userEntity.getUserId(), //
        Long.valueOf(pid), //
        Integer.valueOf(quantity));
    return new ResponseEntity<>(TransactionStatus.SUCCESS.name(),
        HttpStatus.CREATED);
  }


  public boolean checkValidNumber(String str) {
    if (str == null) {
      return false;
    }
    try {
      double d = Double.parseDouble(str);
    } catch (NumberFormatException nfe) {
      return false;
    }
    return true;
  }
}
