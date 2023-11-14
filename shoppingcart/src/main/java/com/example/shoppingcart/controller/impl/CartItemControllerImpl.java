package com.example.shoppingcart.controller.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.shoppingcart.controller.CartItemController;
import com.example.shoppingcart.entity.TransactionProduct;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.ProductData;
import com.example.shoppingcart.model.UserData;
import com.example.shoppingcart.oauth.data.user.UserEntity;
import com.example.shoppingcart.services.CartItemService;
import com.example.shoppingcart.services.impl.CartItemServiceImpl;

@RestController
@RequestMapping("/cart")
public class CartItemControllerImpl implements CartItemController {

  CartItemServiceImpl cartItemService;

  @Autowired
  public CartItemControllerImpl(CartItemServiceImpl cartItemService) {
    this.cartItemService = cartItemService;
  }

  @Override
  public ResponseEntity<List<CartItemData>> getUserCartItems(
      Authentication authentication) {
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

  @Override
  public ResponseEntity<String> addItemToCart(String pid, String quantity,
      Authentication authentication) {
    if (!authentication.isAuthenticated() || authentication == null) {
      return new ResponseEntity<>("Authentication required",
          HttpStatus.UNAUTHORIZED);
    }
    if (!this.checkValidNumber(quantity))
      return new ResponseEntity<>("not a valid number", HttpStatus.BAD_REQUEST);

    // 1. Authenticate the user
    String username = authentication.getName();
    UserData user = cartItemService.findUserByName(username);

    // 2. Retrieve the product based on pid
    ProductData product = cartItemService.getProductById(Long.valueOf(pid));

    // 3. Check if the product and user exist
    if (product == null || user == null) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND)
          .body("Product or user not found");
    }
    
    int number = 0;
    if (this.checkValidNumber(quantity))
      number = Integer.parseInt(quantity, 100);

    CartItemData cartItemData =
        cartItemService.addItemToCart(user, product, number);

    if (cartItemData == null)
      return new ResponseEntity<>("Unable to add item to cart",
          HttpStatus.BAD_REQUEST);

    return ResponseEntity.status(HttpStatus.CREATED)//
        .body("SUCCESS");
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
