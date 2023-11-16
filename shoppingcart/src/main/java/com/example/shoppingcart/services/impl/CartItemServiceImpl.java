package com.example.shoppingcart.services.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.example.shoppingcart.entity.CartItem;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.Mapper;
import com.example.shoppingcart.model.ProductData;
import com.example.shoppingcart.model.UserData;
import com.example.shoppingcart.repository.CartItemRepository;
import com.example.shoppingcart.services.CartItemService;
import com.example.shoppingcart.services.UserService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import com.example.shoppingcart.services.ProductService;

@Slf4j
@Service
public class CartItemServiceImpl implements CartItemService {

  @PersistenceContext
  private EntityManager entityManager;

  @Autowired
  CartItemRepository cartItemRepository;

  @Autowired
  UserService userService;

  @Autowired
  ProductService productService;


  @Override
  public void deleteCartItemByCartItemId(Long cartItemId) {
    cartItemRepository.deleteById(cartItemId);
  }

  @Override
  public void deleteAllCartItem() {
    cartItemRepository.deleteAll();
  }

  @Override
  public List<CartItemData> getUserCartItemsByUserName(String userName) {
    List<CartItemData> output = new ArrayList<>();
    for (CartItem cartItem : cartItemRepository.findAll()) {
      CartItemData convent = Mapper.map(cartItem);
      convent.setStock(cartItem.getProduct().getUnitStock());
      output.add(convent);
    }
    return output;
  }

  @Override
  public Optional<List<CartItemData>> findAllByUserUid(Long uid) {
    // return cartItemRepository.findAllByUserUid(uid)//
    // .stream()//
    // .map(cartItem -> {
    // CartItemData cartItemData = Mapper.map(cartItem);
    // cartItemData.setStock(cartItem.getProduct().getUnitStock());
    // return cartItemData;
    // })//
    // .collect(Collectors.toList());
    List<CartItem> cartItems = cartItemRepository.findAllByUserUid(uid).get();

    // Check if the list is empty
    if (cartItems.isEmpty()) {
      return Optional.empty();
    } else {
      return Optional.of(cartItems.stream()//
          .map(Mapper::map)//
          .collect(Collectors.toList()));
    }
    // List<CartItemData> output = new ArrayList<>();
    // for (CartItem cartItem : cartItemRepository.findAllByUserUid(uid)) {
    // CartItemData convent = Mapper.map(cartItem);
    // convent.setStock(cartItem.getProduct().getUnitStock());
    // output.add(convent);
    // }
    // return output;
  }


  @Override
  public Optional<List<CartItemData>> getUserCartItemsByProductId(Long pid) {
    List<CartItem> cartItemDatas =
        cartItemRepository.findAllByUserUid(pid).get();
    if (cartItemDatas.isEmpty()) {
      return Optional.empty();
    } else {
      return Optional.of(cartItemDatas.stream()//
          .map(Mapper::map)//
          .collect(Collectors.toList()));
    }
  }
  // List<CartItemData> output = new ArrayList<>();
  // for (CartItem cartItem : cartItemRepository.findAllByUserUid(pid)) {
  // CartItemData convent = Mapper.map(cartItem);
  // convent.setStock(cartItem.getProduct().getUnitStock());
  // output.add(convent);
  // }
  // return output;
  // }

  public ProductData getProductById(Long productId) {
    return productService.getProductById(productId);
  }

  // public UserData findUserByName(String name) {
  // return userService.findUserByUserName(name);
  // }

  @Override
  @Transactional
  /*
   * 在使用 merge 時，確保它發生在一個事務中。這通常需要使用 @Transactional 注解。在你的服務方法上添加 @Transactional 注解，這樣 Spring 會在方法執行時啟動一個事務。
   */
  public void addCartItem(long userId, long pid, int quantity) {
    UserData userData = userService.getUserById(userId);
    ProductData productEntity = productService.getProductById(pid);
    // productEntity = entityManager.merge(productEntity);
    CartItem cartItem = CartItem.builder()//
        .user(Mapper.map(userData))// Mapper.map missing fireBase ip -> 中nullpointer，入唔到DBDB
        .product(Mapper.map(productEntity))//
        .quantity(BigDecimal.valueOf(quantity))//
        .build();
    cartItem = entityManager.merge(cartItem);
    log.info("Service check cartItem: {}", cartItem);
    
    cartItemRepository.save(cartItem);
  }
}
