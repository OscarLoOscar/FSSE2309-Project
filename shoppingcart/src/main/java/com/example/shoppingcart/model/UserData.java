package com.example.shoppingcart.model;

import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import com.example.shoppingcart.infra.JwtUntil;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class UserData {
  Long userId;

  // String userName;

  // String phone;

  String fireBaseUid;

  String email;

}
