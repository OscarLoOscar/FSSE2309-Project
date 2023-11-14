package com.example.shoppingcart.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.shoppingcart.entity.CartItem;
import com.example.shoppingcart.entity.Product;
import com.example.shoppingcart.entity.UserEntity;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    // @Query("INSERT INTO CartItem (user, product, quantity) VALUES (:user, :product, :quantity)")
    // CartItem addItemToCart(UserEntity user, Product product, int quantity);

    List<CartItem> findByUserAndProduct(UserEntity user, Product product);
}
