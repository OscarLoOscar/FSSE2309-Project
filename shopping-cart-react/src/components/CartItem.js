import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCartItems } from '../redux/actions';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    // Fetch cart items from the server
    axios.get('/api/cart').then((response) => {
      dispatch(setCartItems(response.data));
    });
  }, [dispatch]);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.productId}>
            {item.productName} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItem;
