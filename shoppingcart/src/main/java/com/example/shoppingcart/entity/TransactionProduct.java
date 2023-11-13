package com.example.shoppingcart.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Table(name = "transaction_product")
@Builder
@ToString
public class TransactionProduct implements Serializable {
  @Id
  @Column(name = "tpid")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long tpid;

  @ManyToOne
  @JoinColumn(name = "transactionId")
  @JsonIgnore
  Transaction transaction;

  @JoinColumn(name = "pid", nullable = false)
  Product productId;

  private String name;

  String description;

  private String imageUrl;

  Integer quantity;

  BigDecimal price;

  Integer stock;

}
