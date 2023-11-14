package com.example.shoppingcart.services.impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.example.shoppingcart.entity.CartItem;
import com.example.shoppingcart.entity.Product;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.Mapper;
import com.example.shoppingcart.model.ProductData;
import com.example.shoppingcart.model.UserData;
import com.example.shoppingcart.oauth.data.user.UserEntity;
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

  // @Override
  // public void addCartItem(Long cartItemId) {
  // User user = (User) SecurityContextHolder.getContext().getAuthentication()
  // .getPrincipal();
  // String emailId = user.getUsername();
  // UserEntity User = userService.findUserByEmail(emailId);
  // Transaction cart = User.getCart();
  // List<TransactionProduct> cartItems = cart.getCartItem();
  // Product product = productService.getProductById(Long.valueOf(cartItemId));
  // for (int i = 0; i < cartItems.size(); ++i) {
  // TransactionProduct cartItem = cartItems.get(i);
  // if (product.getProductId().equals(cartItem.getProduct().getProductId())) {
  // cartItem.setQuantity(cartItem.getQuantity() + 1);
  // cartItem.setPrice(
  // cartItem.getQuantity() * cartItem.getProduct().getProductPrice());
  // cartItemRepository.save(cartItem);
  // //addCartItem(cartItem.getCartItemId());
  // log.info("CartItemServiceImpl : " + cartItem);
  // return;
  // }
  // }

  // TransactionProduct output = TransactionProduct.builder()//
  // .quantity(1)//
  // .product(product)//
  // .price(product.getProductPrice() * 1)//
  // // .cart(cart)//
  // .build();log.info("CartItemServiceImpl2 : "+output.toString());
  //

  @Override
  public void deleteCartItemByCartItemId(Long cartItemId) {
    // CartItem cartItem =
    // cartItemRepository.findById(cartItemId).get();
    // cartItemRepository.delete(cartItem);
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
      output.add(Mapper.map(cartItem));
    }
    return output;
  }

  public ProductData getProductById(Long productId) {
    return productService.getProductById(productId);
  }

  public UserData findUserByName(String name) {
    return userService.findUserByName(name);
  }

  @Override
  public CartItemData addItemToCart(UserData user, ProductData product,
      int quantity) {
    UserEntity userEntity = Mapper.map(user);
    Product productEntity = Mapper.map(product);
    // Use the updated repository method
    List<CartItem> existingItems =
        cartItemRepository.findByUserAndProduct(userEntity, productEntity);

    if (!existingItems.isEmpty()) {
      // Item already exists, update the quantity
      CartItem existingItem = existingItems.get(0);
      existingItem.setQuantity(existingItem.getQuantity() + quantity);
      return Mapper.map(cartItemRepository.save(existingItem));
    } else {
      // Item doesn't exist, create a new entry
      CartItem cartItem = CartItem.builder()//
          .user(userEntity)//
          .product(productEntity)//
          .quantity(quantity)//
          .build();
      return Mapper.map(cartItemRepository.save(cartItem));
    }
  }

}
