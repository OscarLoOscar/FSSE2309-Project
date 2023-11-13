package com.example.shoppingcart.services;

import java.util.List;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.model.UserData;

public interface UserService {

  void addUser(UserEntity user);

  List<UserData> getAllUsers();

  UserData getUserById(Long userId);

  UserData findUserByName(String name);

  UserData findUserByPhone(String phone);

  UserData findUserByEmail(String email);

  UserData updateUser(UserEntity user);

  void deleteUserById(Long userId);

}
