package com.example.shoppingcart.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.entity.CartItem;
import com.example.shoppingcart.entity.Product;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.FireBaseUserData;
import com.example.shoppingcart.model.Mapper;
import com.example.shoppingcart.model.ProductData;
import com.example.shoppingcart.model.UserData;
import com.example.shoppingcart.repository.CartItemRepository;
import com.example.shoppingcart.services.CartItemService;
import com.example.shoppingcart.services.UserService;
import com.example.shoppingcart.services.ProductService;
import com.example.shoppingcart.services.TransactionService;

@Service
public class CartItemServiceImpl implements CartItemService {

  @Autowired
  CartItemRepository cartItemRepository;

  @Autowired
  TransactionService transactionService;

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
  public List<CartItemData> getUserCartItems(String userName) {
    List<CartItemData> output = new ArrayList<>();
    for (CartItem cartItem : cartItemRepository.findAll()) {
      CartItemData convent = Mapper.map(cartItem);
      convent.setStock(cartItem.getProduct().getUnitStock());
      output.add(convent);
    }
    return output;
  }

  public ProductData getProductById(Long productId) {
    return productService.getProductById(productId);
  }

  public UserData findUserByName(String name) {
    return userService.findUserByUserName(name);
  }

  @Override
  public void addCartItem(long userId, long pid, int quantity) {
    UserData userEntity = userService.getUserById(userId);
    ProductData productEntity = productService.getProductById(pid);
    cartItemRepository.save(CartItem.builder()//
        .user(Mapper.map(userEntity))//
        .product(Mapper.map(productEntity))//
        .quantity(quantity)//
        .build());
  }
}
