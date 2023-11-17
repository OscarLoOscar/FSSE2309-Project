package com.example.shoppingcart.controller.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.shoppingcart.controller.TransactionController;
import com.example.shoppingcart.entity.Transaction;
import com.example.shoppingcart.entity.TransactionProduct;
import com.example.shoppingcart.entity.UserEntity;
import com.example.shoppingcart.infra.JwtUntil;
import com.example.shoppingcart.infra.enums.TranStatus;
import com.example.shoppingcart.model.CartItemData;
import com.example.shoppingcart.model.FireBaseUserData;
import com.example.shoppingcart.model.Mapper;
import com.example.shoppingcart.model.TransactionData;
import com.example.shoppingcart.model.TransactionProductData;
import com.example.shoppingcart.model.TransactionUpdateResponse;
import com.example.shoppingcart.repository.TransactionRepository;
import com.example.shoppingcart.services.CartItemService;
import com.example.shoppingcart.services.TransactionProductService;
import com.example.shoppingcart.services.UserService;
import com.example.shoppingcart.services.impl.TransactionServiceImpl;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/transaction")
public class TransactionControllerImpl implements TransactionController {

    private final UserService userService;

    private final CartItemService cartItemService;

    private final TransactionServiceImpl transactionService;

    private final TransactionProductService transactionProductService;

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionControllerImpl(
            TransactionServiceImpl transactionServiceImpl, //
            UserService userService, //
            CartItemService cartItemService, //
            TransactionProductService transactionProductService, //
            TransactionRepository transactionRepository) {
        this.transactionService = transactionServiceImpl;
        this.userService = userService;
        this.cartItemService = cartItemService;
        this.transactionProductService = transactionProductService;
        this.transactionRepository = transactionRepository;
    }

    // Create a New Transaction
    // Transaction status -> “PREPARE”
    @Override
    public TransactionData createTransaction(JwtAuthenticationToken jwt) {
        // check user
        FireBaseUserData user = JwtUntil.getFireBaseUser(jwt);
        UserEntity userEntity = userService.getEntityByFireBaseUserData(user);
        Long userId = userEntity.getUserId();
        TransactionData output = transactionService.createTransaction(userId);
        return TransactionData.builder()//
                .transactionId(output.getTransactionId())//
                .buyerUid(userId)//
                .datetime(output.getDatetime())//
                .status(output.getStatus())//
                .total(output.getTotal().setScale(2))//
                .items(output.getItems())//
                .build();
    }

    // @Override
    // public TransactionData getTransactionDetailByTransactionId(Long tid,
    // JwtAuthenticationToken jwt) {

    // // 1.get userId from jwt->Finish , uid=1
    // FireBaseUserData fireBaseUserData = JwtUntil.getFireBaseUser(jwt);
    // UserEntity userEntity =
    // userService.getEntityByFireBaseUserData(fireBaseUserData);
    // Long uid = userEntity.getUserId();

    // // 2.get transaction_product by tpid
    // List<TransactionProduct> tpList =
    // transactionProductService.findAllTransactionProductByTransactionId(tid);

    // // 3.get All the transaction by uid
    // List<Transaction> tList = transactionService.findAllByBuyerUid(uid);

    // // 4.get All cartItemData by userId
    // List<CartItemData> cList = cartItemService.findAllByUserUid(uid);

    // // convent List<TransactionProduct> to List<TransactionProductData>
    // List<TransactionProductData> items = new ArrayList<>();

    // // c.pid==tp.pid AND tp.tid = t.tid
    // for (TransactionProduct tp : tpList) {
    // for (Transaction t : tList) {
    // if (t.getTid().equals(tp.getTransaction().getTid()))
    // items.add(Mapper.map(tp));
    // for (CartItemData c : cList) {
    // // if (t.getTid().equals(tp.getTransaction().getTid()))
    // if ((c.getPid().equals(tp.getPid()))
    // && (tp.getTransaction().getTid().equals(t.getTid()))) {

    // log.info("CHECKING : " + items.size());
    // return TransactionData.builder()//
    // .transactionId(tid)//
    // .buyerUid(uid)//
    // .datetime(t.getDatetime())//
    // .status(TranStatus.valueOf(t.getStatus()))//
    // .total(c.getPrice().multiply(tp.getQuantity()))//
    // .items(items)//
    // .build();
    // }
    // }
    // }
    // }
    // return null;
    // }

    @Override
    public TransactionData getTransactionDetailByTransactionId(Long tid,
            JwtAuthenticationToken jwt) {
        // 1. get userId from jwt
        FireBaseUserData fireBaseUserData = JwtUntil.getFireBaseUser(jwt);
        UserEntity userEntity =
                userService.getEntityByFireBaseUserData(fireBaseUserData);
        Long uid = userEntity.getUserId();
        // 2. get all transaction by userId
        TransactionData tList = transactionService.findByTidAndUid(tid, uid);
        // 3.get transaction product by tid
        List<TransactionProduct> tpList = transactionProductService
                .findAllTransactionProductByTransactionId(tid);

        // 4.get all cart_item by userId
        List<CartItemData> cList = cartItemService.findAllByUserUid(uid).get();

        // 5.convent from List<TransactionProduct> to List<TransactionProductData>
        List<TransactionProductData> items = new ArrayList<>();

        CartItemData matchedCartItem = null;
        for (TransactionProduct tp : tpList) {
            Transaction t = tp.getTransaction();
            matchedCartItem = findMatchingCartItem(tp, t, cList);

            // Create a new TransactionProductData instance for each iteration
            TransactionProductData transactionProductData = Mapper.map(tp);
            if (matchedCartItem != null) {
                items.add(transactionProductData);
            }
        }

        // 6.ensure correct placement of return statement
        if (!items.isEmpty()) {
            // Assuming total calculation is correct based on matchedCartItem
            BigDecimal total = matchedCartItem.getPrice()
                    .multiply(items.get(0).getQuantity());

            return TransactionData.builder()//
                    .transactionId(tid)//
                    .buyerUid(uid)//
                    .datetime(tList.getDatetime())//
                    .status(tList.getStatus())//
                    .total(total.setScale(2))//
                    .items(items)//

                    .build();
        }

        return null;
    }

    // 7.Encapsulate for finding match cart item
    private CartItemData findMatchingCartItem(TransactionProduct tp,
            Transaction t, List<CartItemData> cList) {
        for (CartItemData c : cList) {
            if (c.getPid().equals(tp.getPid())
                    && tp.getTransaction().getTid().equals(t.getTid())) {
                return c;
            }
        }
        return null;
    }

    @Override
    public ResponseEntity<TransactionUpdateResponse> updateTransactionToProcessing(
            Long tid, JwtAuthenticationToken jwt) {
        // 1. get userId from jwt
        FireBaseUserData fireBaseUserData = JwtUntil.getFireBaseUser(jwt);
        UserEntity userEntity =
                userService.getEntityByFireBaseUserData(fireBaseUserData);
        Long uid = userEntity.getUserId();
        // Fetch the transaction By ID
        Transaction transaction =
                transactionService.getTransactionByTransactionId(uid);// null Pointer <<
        if (transaction != null) {
            // update the transaction status to PROCESSING
            transaction.setStatus(TranStatus.PROCESSING.name());
            transactionRepository.save(transaction);
            log.info("TEST 3 ");

            // return a success response
            return ResponseEntity.ok().body(
                    new TransactionUpdateResponse(TranStatus.SUCCESS.name()));
        }
        return ResponseEntity.badRequest().body(
                new TransactionUpdateResponse(TranStatus.NOT_SUCCESS.name()));
    }

    @Override
    public ResponseEntity<TransactionData> finishTransaction(Long tid,
            JwtAuthenticationToken jwt) {
        // 1. get userId from jwt
        FireBaseUserData fireBaseUserData = JwtUntil.getFireBaseUser(jwt);
        UserEntity userEntity =
                userService.getEntityByFireBaseUserData(fireBaseUserData);
        Long uid = userEntity.getUserId();

        // Fetch the transaction By ID
        Transaction transaction =
                transactionService.getTransactionByTransactionId(uid);
        if (transaction != null) {
            // update the transaction status to PROCESSING

            transaction.setStatus(TranStatus.FINISH.name());

            transactionRepository.save(transaction);

            // log.info("transaction : " + transaction);
            // Fetch the updated transaction details
            TransactionData transactionData =
                    transactionService.findByTidAndUid(tid, uid);
            // return a success response
            return ResponseEntity.ok(transactionData);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
