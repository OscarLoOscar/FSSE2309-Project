package com.example.shoppingcart.services;

import java.util.List;
import java.util.Optional;
import com.example.shoppingcart.model.CartItemData;

public interface CartItemService {

  // void addCartItem(Long cartItemId);
  List<CartItemData> getUserCartItemsByUserName(String userName);

  Optional<List<CartItemData> >findAllByUserUid(Long uid);

  Optional<List<CartItemData>> getUserCartItemsByProductId(Long pid);

  void addCartItem(long userId, long pid, int quantity);

  void deleteCartItemByCartItemId(Long cartItemId);

  void deleteAllCartItem();

}
