package com.example.shoppingcart.model;

import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@JsonPropertyOrder({"pid", "name", "image_url", "price", "cart_quantity",
    "stock"})
public class CartItemData {
  // ProductData product;
  Long pid;

  String name;

  @JsonProperty(value = "image_url")
  String imageUrl;

  BigDecimal price;

  @JsonProperty(value = "cart_quantity")
  Integer quantity;

  Integer stock;

}
