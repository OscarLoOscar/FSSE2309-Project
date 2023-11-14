package com.example.shoppingcart.model;

import java.util.HashMap;
import java.util.Map;
import org.springframework.context.annotation.Configuration;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@Configuration
public class CartItemStorage {
  private static final Map<Long, Integer> cartItemMap = new HashMap<>();

  public void addCartItem(Long productId, int quantity) {
    cartItemMap.put(productId,
        cartItemMap.getOrDefault(productId, 0) + quantity);
  }

  public Map<Long, Integer> getCartItems() {
    return new HashMap<>(cartItemMap);
  }

  public void clearCartItems() {
    cartItemMap.clear();
  }
}
