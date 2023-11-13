package com.example.shoppingcart.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CartItemData {
  ProductData product;

 // UserData user;

  Integer quantity;

}
