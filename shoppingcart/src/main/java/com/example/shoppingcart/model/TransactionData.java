package com.example.shoppingcart.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import com.example.shoppingcart.infra.enums.TranStatus;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class TransactionData {
  @JsonProperty("tid")
  Long transactionId;

  @JsonProperty("buyer_uid")
  Long buyerUid;

  LocalDateTime datetime;

  TranStatus status;

  BigDecimal total;

  @JsonProperty("items")
  List<TransactionProductData> items;
}
