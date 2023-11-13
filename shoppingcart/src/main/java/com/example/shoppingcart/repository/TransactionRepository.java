package com.example.shoppingcart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.shoppingcart.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction,Long>{
  
}
