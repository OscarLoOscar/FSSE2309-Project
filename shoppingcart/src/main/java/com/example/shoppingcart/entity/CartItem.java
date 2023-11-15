package com.example.shoppingcart.entity;

import java.io.Serializable;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Entity
@Setter
@Getter
@Table(name = "cart_item")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartItem implements Serializable {

  @Id
  @Column(name = "cid")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long cartId;

  @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinColumn(name = "pid", nullable = true)
  Product product;

  @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinColumn(name = "uid", nullable = false)
  UserEntity user;

  @Column(nullable = false)
  Integer quantity;

}
// @OneToOne
// @JoinColumn(name = "shippingAddressId")
// ShippingAddress shippingAddress;

// @OneToOne
// @JoinColumn(name = "billingAddresId")
// BillingAddress billingAddress;
