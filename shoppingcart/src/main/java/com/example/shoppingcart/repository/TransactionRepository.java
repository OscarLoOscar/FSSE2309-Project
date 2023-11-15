package com.example.shoppingcart.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.shoppingcart.entity.Transaction;

public interface TransactionRepository
    extends JpaRepository<Transaction, Long> {
  @Query(value = "SELECT * FROM transaction t WHERE t.buyer_uid=:uid" , nativeQuery = true)
  List<Transaction> findAlltransactionByBuyerUid(@Param(value = "uid") Long uid);
}
