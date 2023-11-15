package com.example.shoppingcart.controller.impl;

import java.math.BigDecimal;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.infra.JwtUntil;
import com.example.shoppingcart.infra.enums.TranStatus;
import com.example.shoppingcart.controller.CartItemController;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.CartItemStorage;
import com.example.shoppingcart.model.FireBaseUserData;
import com.example.shoppingcart.model.ProductData;
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

  @Autowired
  CartItemStorage cartItemStorage;


  @Override
  public List<CartItemData> getUserCartItems(JwtAuthenticationToken jwt) {
    FireBaseUserData user = JwtUntil.getFireBaseUser(jwt);
    UserEntity userEntity = userService.getEntityByFireBaseUserData(user);
    Long userId = userEntity.getUserId();

    // if (authentication == null || !authentication.isAuthenticated()) {
    // }
    // Retrieve the usename from authentication object

    // Call service to get user cart items
    List<CartItemData> userCartItems =
        cartItemService.getUserCartItems(userId);

    // if (userCartItems == null || userCartItems.isEmpty()) {

    // }
    return userCartItems;
  }

  // postman : development environment
  @Override
  public ResponseEntity<String> addCartItem(JwtAuthenticationToken jwt, //
      String inputPid, //
      String inputQuantity) {
    // check user
    FireBaseUserData user = JwtUntil.getFireBaseUser(jwt);
    UserEntity userEntity = userService.getEntityByFireBaseUserData(user);
    Long userId = userEntity.getUserId();
    // convent pid and quantoty
    Long pid = Long.parseLong(inputPid);
    Integer quantity = Integer.parseInt(inputQuantity);
    // add item
    if (cartItemStorage.getCartItems().containsKey(pid)) {
      cartItemStorage.addCartItem(pid, quantity);
    } else {
      log.info("Adding new cart item for product {} with quantity {}", pid,
          quantity);
      // Add the item to the in-memory storage
      cartItemStorage.addCartItem(pid, quantity);
    }
    log.info(
        "add item : " + cartItemStorage.getCartItems().keySet().toString());
    for (Long i : cartItemStorage.getCartItems().keySet()) {
      log.info(
          "check item : " + i + " : " + cartItemStorage.getCartItems().get(i));
    }
    //
    // save
    cartItemService.addCartItem(userId, // dead code
        pid, //
        quantity);
    return new ResponseEntity<>(
        "\"result\":\"" + "\"" + TranStatus.SUCCESS.name() + "\n",
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



  @Override
  public CartItemData updateCartQuantity(String inputPid, String inputQuantity,
      JwtAuthenticationToken jwt) {
    // check user
    FireBaseUserData user = JwtUntil.getFireBaseUser(jwt);
    UserEntity userEntity = userService.getEntityByFireBaseUserData(user);
    // convent pid and quantoty
    Long pid = Long.valueOf(inputPid);
    Integer quantity = Integer.valueOf(inputQuantity);
    // Update cart quantity
    if (cartItemStorage.getCartItems().containsKey(pid)) {
      cartItemStorage.changeCartItemQuantity(pid, quantity);
    } else {
      // Add the item to the in-memory storage
      cartItemStorage.addCartItem(pid, quantity);
    }
    log.info("before update item : "
        + cartItemStorage.getCartItems().keySet().toString());
    for (Long i : cartItemStorage.getCartItems().keySet()) {
      log.info("updated item : " + i + " : "
          + cartItemStorage.getCartItems().get(i));
    }
    //
    // save
    cartItemService.addCartItem(userEntity.getUserId(), //
        pid, //
        quantity);
    //
    ProductData productData = cartItemService.getProductById(pid);
    return CartItemData.builder()//
        .pid(productData.getProductId())//
        .name(productData.getProductName())//
        .imageUrl(productData.getImageUrl())//
        .price(BigDecimal.valueOf(productData.getProductPrice()))//
        .quantity(quantity)//
        .stock(productData.getUnitStock())//
        .build();
  }

  @Override
  public ResponseEntity<String> removeCartItem(String inputPid,
      JwtAuthenticationToken jwt) {
    FireBaseUserData user = JwtUntil.getFireBaseUser(jwt);
    UserEntity userEntity = userService.getEntityByFireBaseUserData(user);

    cartItemService.deleteCartItemByCartItemId(Long.valueOf(inputPid));
    return new ResponseEntity<>("\"result\":\"" + TranStatus.SUCCESS.name(),
        HttpStatus.OK);
  }

}
