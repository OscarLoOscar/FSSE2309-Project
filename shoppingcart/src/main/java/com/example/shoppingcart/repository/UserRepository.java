package com.example.shoppingcart.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.shoppingcart.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
  Optional<UserEntity> findUserByPhone(String phone);

  Optional<UserEntity> findUserByEmail(String email);

  Optional<UserEntity> findUserByUserName(String userName);

  Optional<UserEntity> findByFireBaseUid(String fireBaseUid);
}
