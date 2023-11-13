package com.example.shoppingcart.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import com.example.shoppingcart.model.CartItemData;

public interface CartItemController {

  // 1. Authentication is needed
  @GetMapping("/userCartItems")
  @ResponseStatus(HttpStatus.ACCEPTED)
  public ResponseEntity<List<CartItemData>> getUserCartItems(
      Authentication authentication);

  @PutMapping("/{pid}/{quantity}")
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<String> addItemToCart(@PathVariable String pid,
      @PathVariable String quantity, Authentication authentication);

  @DeleteMapping("/removeCartIem/{cartItemId}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  void deleteCartItemByCartItemId(@PathVariable String cartItemId);

  @DeleteMapping("/removeAllCartItems")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  void deleteAllCartItem();// 清空shopping cart

}
