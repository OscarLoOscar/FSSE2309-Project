package com.example.shoppingcart.entity;

import java.io.Serializable;
import com.example.shoppingcart.oauth.data.user.UserEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "cart_item")
@Builder
public class CartItem implements Serializable {
  @Id
  @Column(name = "cid")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long cartId;

  @ManyToOne
  @JoinColumn(name = "productId",nullable = false)
  Product product;

  @ManyToOne
  @JoinColumn(name = "userId",nullable = false)
  UserEntity user;

  @Column(nullable = false)
  Integer quantity;

  // @OneToOne
  // @JoinColumn(name = "shippingAddressId")
  // ShippingAddress shippingAddress;

  // @OneToOne
  // @JoinColumn(name = "billingAddresId")
  // BillingAddress billingAddress;

}
