package com.example.shoppingcart.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.shoppingcart.entity.CartItem;
import com.example.shoppingcart.entity.Product;
import com.example.shoppingcart.entity.UserEntity;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    @Query(value = "SELECT * FROM cart_item c WHERE c.uid=:uid ",
            nativeQuery = true)
    Optional<List<CartItem>> findAllByUserUid(@Param("uid") Long uid);

    Optional<List<CartItem>> findByUserAndProduct(UserEntity user,
            Product product);

    // Optional<CartItem> findByUserAndProduct(UserEntity uid, Long pid);

}
