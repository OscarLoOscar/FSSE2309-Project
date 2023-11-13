package com.example.shoppingcart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.shoppingcart.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
  UserEntity findUserByPhone(String phone);

  UserEntity findUserByEmail(String email);

  UserEntity findUserByFirstName(String firstName);
}
