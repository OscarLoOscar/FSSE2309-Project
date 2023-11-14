package com.example.shoppingcart.Security.useless.api;

import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.shoppingcart.model.UserData;

@RestController
@RequestMapping("/user")
public class UseController {
  @GetMapping("/me/details")
  public UserData getMyUserDetails(JwtAuthenticationToken jwtToken) {
    UserData loginUser = new UserData(jwtToken);
    return loginUser;

  }
}
