package com.example.shoppingcart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.shoppingcart.entity.TransactionProduct;

public interface TransactionProductRepository extends JpaRepository<TransactionProduct, Long> {



}
