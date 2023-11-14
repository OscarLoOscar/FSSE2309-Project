package com.example.shoppingcart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.shoppingcart.oauth.data.user.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
  UserEntity findUserByPhone(String phone);

  UserEntity findUserByEmail(String email);

  UserEntity findUserByUserName(String userName);
}
