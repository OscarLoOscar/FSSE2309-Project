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
    return TransactionProductData.builder()//
        .tpid(String.valueOf(transactionProduct.getTpid()))//
        .quantity(transactionProduct.getQuantity())//
        // .totalPrice(transactionProduct.getPrice())//
        .build();
  }

  public static TransactionProduct map(TransactionProductData tpd) {
    return TransactionProduct.builder()//
        .pid(tpd.getCartItemData().getPid())//
        .quantity(tpd.getQuantity()).build();

  }
}
