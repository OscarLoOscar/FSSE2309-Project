package com.example.shoppingcart.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.infra.enums.TranStatus;
import com.example.shoppingcart.entity.CartItem;
import com.example.shoppingcart.entity.Product;
import com.example.shoppingcart.entity.Transaction;
import com.example.shoppingcart.entity.TransactionProduct;

public class Mapper {

  public static UserData map(UserEntity userEntity) {
    return UserData.builder()//
        .userId(userEntity.getUserId())//
        // .userName(userEntity.getUserName())//
        // .phone(userEntity.getPhone())//
        .fireBaseUid(userEntity.getFireBaseUid())//
        .email(userEntity.getEmail())//
        .build();
  }

  public static ProductData map(Product product) {
    return ProductData.builder()//
        .pid(product.getProductId())//
        .productName(product.getProductName())//
        .productPrice(product.getProductPrice().doubleValue())//
        .productDescription(product.getProductDescription())//
        .productPrice(product.getProductPrice().doubleValue())//
        .imageUrl(product.getImageUrl())//
        .unitStock(product.getUnitStock())//
        .build();
  }

  public static CartItemData map(CartItem cartItem) {
    return CartItemData.builder()//
        // .user(modelMapper.map(cartItem.getUser(), UserData.class))//
        // .product(Mapper.map(cartItem.getProduct()))//
        .pid(cartItem.getProduct().getProductId())//
        .name(cartItem.getProduct().getProductName())//
        .imageUrl(cartItem.getProduct().getImageUrl())//
        .price(cartItem.getProduct().getProductPrice())
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
        .productId(product.getPid())//
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
        .fireBaseUid(userEntity.getFireBaseUid())//
        // .userName(userEntity.getUserName())//
        // .phone(userEntity.getPhone())//
        .email(userEntity.getEmail())//
        .build();
  }

  public static TransactionData map(Transaction transactionEntity) {
    return TransactionData.builder().transactionId(transactionEntity.getTid())
        .buyerUid(transactionEntity.getUser().getUserId()) // Assuming there's a getUserId method in UserEntity
        .datetime(transactionEntity.getDatetime())
        .status(TranStatus.valueOf(transactionEntity.getStatus())) // Adjust accordingly
        .total(transactionEntity.getTotalPrice())
        // .items(transactionEntity.getCartItem()) // Implement mapTransactionProducts method
        .build();
  }

  public static TransactionProductData map(
      TransactionProduct transactionProduct) {
    CartItemData cartItemData = getCartItemData(transactionProduct);
    return TransactionProductData.builder()//
        .tpid(transactionProduct.getTpid())//
        .quantity(transactionProduct.getQuantity())//
        .cartItemData(cartItemData).build();
  }

  // Add a method to get CartItemData from TransactionProduct
  private static CartItemData getCartItemData(
      TransactionProduct transactionProduct) {
    CartItemData cartItemData = new CartItemData();

    // Set properties from TransactionProduct to CartItemData
    cartItemData.setPid(transactionProduct.getPid());
    cartItemData.setName(transactionProduct.getName());
    cartItemData.setImageUrl(transactionProduct.getImageUrl());
    cartItemData.setPrice(transactionProduct.getPrice());
    cartItemData.setQuantity(transactionProduct.getQuantity());
    cartItemData.setStock(transactionProduct.getStock());

    return cartItemData;
  }

  public static TransactionProduct map(TransactionProductData tpd) {
    return TransactionProduct.builder()//
        .pid(tpd.getCartItemData().getPid())//
        .name(tpd.getCartItemData().getName())//
        .description(tpd.getCartItemData().getDescription())//
        .imageUrl(tpd.getCartItemData().getImageUrl())//
        .price(tpd.getCartItemData().getPrice())//
        .quantity(tpd.getQuantity())//
        .stock(tpd.getCartItemData().getStock())//
        .build();

  }
}
