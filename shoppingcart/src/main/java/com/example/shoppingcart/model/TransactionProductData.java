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

  private Long tpid;
  
  @JsonProperty("product")
  private CartItemData cartItemData;

  private BigDecimal quantity;

  @JsonProperty("subtotal")
  private BigDecimal totalPrice;

}