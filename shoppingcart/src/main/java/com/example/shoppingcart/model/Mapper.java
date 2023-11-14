package com.example.shoppingcart.model;

import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.entity.CartItem;
import com.example.shoppingcart.entity.Product;

// @Component
public class Mapper {

  // @Autowired
  // private ModelMapper modelMapper;

  public static UserData map(UserEntity userEntity) {
    return UserData.builder()//
        .userId(userEntity.getUserId())//
        .userName(userEntity.getUserName())//
        .phone(userEntity.getPhone())//
        .email(userEntity.getEmail())//
        .build();
  }

  public static ProductData map(Product product) {
    return ProductData.builder()//
        .productId(product.getProductId())//
        .productName(product.getProductName())//
        .productPrice(product.getProductPrice().doubleValue())//
        .productDescription(product.getProductDescription())//
        .imageUrl(product.getImageUrl())//
        .unitStock(product.getUnitStock())//
        .build();
  }

  public static CartItemData map(CartItem cartItem) {
    return CartItemData.builder()//
        // .user(modelMapper.map(cartItem.getUser(), UserData.class))//
        .product(Mapper.map(cartItem.getProduct()))//
        .quantity(cartItem.getQuantity())//
        .build();
  }

  public static UserEntity map(FireBaseUserData data) {
    return UserEntity.builder()//
        .fireBaseUid(data.getFirebaseUid())//
        .email(data.getEmail())//
        .build();
  }

  public static Product map(ProductData product) {
    return Product.builder()//
        .productId(product.getProductId())//
        .productName(product.getProductName())//
        .productPrice(BigDecimal.valueOf(product.getProductPrice()))//
        .productDescription(product.getProductDescription())//
        .imageUrl(product.getImageUrl())//
        .unitStock(product.getUnitStock())//
        .build();
  }

  public static UserEntity map(UserData userEntity) {
    return UserEntity.builder()//
        .userId(userEntity.getUserId())//
        .userName(userEntity.getUserName())//
        .phone(userEntity.getPhone())//
        .email(userEntity.getEmail())//
        .build();
  }
}
