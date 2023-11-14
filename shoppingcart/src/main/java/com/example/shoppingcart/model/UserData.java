package com.example.shoppingcart.model;

import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserData {
  Long userId;

  String userName;

  String phone;

  String fireBaseUid;

  String email;

  public UserData(JwtAuthenticationToken jwt) {}
}
