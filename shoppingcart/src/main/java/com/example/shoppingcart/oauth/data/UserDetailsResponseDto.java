package com.example.shoppingcart.oauth.data;

import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDetailsResponseDto {
  private String firebaseUid;
  private String email;
  private String issuer;

  public UserDetailsResponseDto(JwtAuthenticationToken jwtToken) {
    this.firebaseUid = (String) jwtToken.getTokenAttributes().get("user_id");
    this.email = (String) jwtToken.getTokenAttributes().get("email");
    this.issuer = (String) jwtToken.getTokenAttributes().get("iss");
  }

}
