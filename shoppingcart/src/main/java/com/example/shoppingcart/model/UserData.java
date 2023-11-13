package com.example.shoppingcart.model;

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

  String firstName;

  String lastName;

  String phone;

  String fireBaseUid;

  String email;

}
