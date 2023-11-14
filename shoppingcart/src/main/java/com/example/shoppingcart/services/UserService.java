package com.example.shoppingcart.services;

import java.util.List;
import com.example.shoppingcart.model.UserData;
import com.example.shoppingcart.oauth.data.user.UserEntity;

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
