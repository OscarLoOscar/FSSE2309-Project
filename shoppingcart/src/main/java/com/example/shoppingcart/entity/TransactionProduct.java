package com.example.shoppingcart.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
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
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "tpid")
  Long tpid;

  @ManyToOne
  @JoinColumn(name = "tid")
  @JsonProperty(value = "tid")
  Transaction transaction;

  // @ManyToOne
  // @JoinColumn(name = "pid", nullable = false)
  Product pid;

  String name;

  String description;

  @JsonProperty(value = "image_url")
  String imageUrl;

  BigDecimal price;

  Integer stock;

  Integer quantity;


}
