package com.example.shoppingcart.services;

import java.util.List;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.FireBaseUserData;

public interface CartItemService {

  // void addCartItem(Long cartItemId);
  List<CartItemData> getUserCartItems(String userName);

  void addCartItem(long userId, long pid, int quantity);

  void deleteCartItemByCartItemId(Long cartItemId);

  void deleteAllCartItem();

}
