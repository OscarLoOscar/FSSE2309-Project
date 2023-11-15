package com.example.shoppingcart.model;

import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@ToString
@Getter
@Setter
@Builder
public class TransactionProductData {

  String tpid;

  CartItemData cartItemData;

  Integer quantity;

  @JsonProperty("subtotal")
  BigDecimal totalPrice;

}
