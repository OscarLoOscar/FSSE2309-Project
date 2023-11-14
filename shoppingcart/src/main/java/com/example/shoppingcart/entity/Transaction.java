package com.example.shoppingcart.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import com.example.shoppingcart.infra.enums.TransactionStatus;
import com.example.shoppingcart.oauth.data.user.UserEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "transaction")
public class Transaction implements Serializable {
  @Id
  @Column(name = "transaction_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long transactionId;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false)
  @JsonIgnore
  private UserEntity user;

  @Column(nullable = false)
  private LocalDateTime datetime;


  @Column(nullable = false)
  private BigDecimal totalPrice;

  @Column(nullable = false)
  private TransactionStatus status;

  // @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL,
  // fetch = FetchType.EAGER) // EAGER ? LAZY?
  // private List<TransactionProduct> cartItem;

}
