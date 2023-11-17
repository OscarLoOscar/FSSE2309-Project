package com.example.shoppingcart.controller.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.exception.ProductNotExistException;
import com.example.shoppingcart.exception.UserNotExistException;
import com.example.shoppingcart.infra.JwtUntil;
import com.example.shoppingcart.infra.enums.TranStatus;
import com.example.shoppingcart.controller.CartItemController;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.FireBaseUserData;
import com.example.shoppingcart.model.TransactionUpdateResponse;
import com.example.shoppingcart.services.UserService;
import com.example.shoppingcart.services.impl.CartItemServiceImpl;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/cart")
public class CartItemControllerImpl implements CartItemController {

  private final CartItemServiceImpl cartItemService;

  private final UserService userService;

  @Autowired
  public CartItemControllerImpl(CartItemServiceImpl cartItemService, //
      UserService userService) {
    this.cartItemService = cartItemService;
    this.userService = userService;
  }

  // @Autowired
  // CartItemStorage cartItemStorage;


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
        cartItemService.findAllByUserUid(userId).get();

    // if (userCartItems == null || userCartItems.isEmpty()) {

    // }
    return userCartItems;
  }

  // postman : development environment
  @Override
  public TransactionUpdateResponse addCartItem(JwtAuthenticationToken jwt, //
      String inputPid, //
      String inputQuantity) throws ProductNotExistException , UserNotExistException {
    // check user
    FireBaseUserData user = JwtUntil.getFireBaseUser(jwt);
    UserEntity userEntity = userService.getEntityByFireBaseUserData(user);
    Long userId = userEntity.getUserId();
    log.info("userId : " + userId);
    // convent pid and quantoty
    Long pid = Long.parseLong(inputPid);
    log.info("pid : " + pid);

    Integer quantity = Integer.parseInt(inputQuantity);

    // save
    cartItemService.updateCartQuantity(userId, pid, quantity);
    return new TransactionUpdateResponse(TranStatus.PREPARE.name());
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
      JwtAuthenticationToken jwt)
      throws ProductNotExistException, UserNotExistException {
    // check user
    FireBaseUserData user = JwtUntil.getFireBaseUser(jwt);
    UserEntity userEntity = userService.getEntityByFireBaseUserData(user);
    Long uid = userEntity.getUserId();
    // convent pid and quantoty
    Long pid = Long.valueOf(inputPid);
    Integer quantity = Integer.valueOf(inputQuantity);
    // Update cart quantity
    boolean success = cartItemService.updateCartQuantity(uid, pid, quantity);

    if (success) {
      // Return the updated cart item details
      return cartItemService.getCartItemDetails(uid, pid);
    } else {
      // Handle the case where the update was not successful (e.g., item not found)
      // You can customize this part based on your business logic
      return new CartItemData(); // Return an empty object or handle accordingly
    }

  }

  @Override
  public TransactionUpdateResponse removeCartItem(String inputPid,
      JwtAuthenticationToken jwt) {
    FireBaseUserData user = JwtUntil.getFireBaseUser(jwt);
    UserEntity userEntity = userService.getEntityByFireBaseUserData(user);

    cartItemService.deleteCartItemByCartItemId(Long.valueOf(inputPid));
    return new TransactionUpdateResponse(TranStatus.SUCCESS.name());
  }

}
