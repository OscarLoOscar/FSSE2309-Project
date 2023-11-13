package com.example.shoppingcart.services;

import java.util.List;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.ProductData;
import com.example.shoppingcart.model.UserData;

public interface CartItemService {

  // void addCartItem(Long cartItemId);
  List<CartItemData> getUserCartItems(String userName);

  CartItemData addItemToCart(UserData user, ProductData product, int quantity);

  void deleteCartItemByCartItemId(Long cartItemId);

  void deleteAllCartItem();

}
