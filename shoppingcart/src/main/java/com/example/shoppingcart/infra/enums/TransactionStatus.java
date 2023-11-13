package com.example.shoppingcart.infra.enums;

public enum TransactionStatus {
  ORDERED(0), //
  PREPARE(1), //
  PROCESSING(2), //
  SUCCESS(3), //
  CLOSE(4),//
  ;//

  int code;

  private TransactionStatus(int code) {
    this.code = code;
  }

  public int getCode() {
    return this.code;
  }

  public TransactionStatus getTransactionStatus(int orderStatus) {
    for (TransactionStatus status : TransactionStatus.values()) {
      if (status.getCode() == orderStatus)
        return status;
    }
    return null;
  }

  public TransactionStatus nextStatus() {
    int nextStatusCOde = this.getCode() < 5 ? this.code + 1 : this.code;
    return getTransactionStatus(nextStatusCOde);
  }

  public boolean isForwaredStatus(TransactionStatus transactionStatus) {
    return this.getCode() < transactionStatus.getCode();
  }
}
