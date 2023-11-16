package com.example.shoppingcart.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.example.shoppingcart.infra.JwtUntil;

@Configuration
public class AppConfig {
  @Bean
  public JwtUntil jwtUntil() {
    return new JwtUntil();
  }
}
