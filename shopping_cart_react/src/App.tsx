import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './App.css';
import ShoppingSite from './ui/page/ShoppingSite';
import LoginPage from './ui/page/LoginPage/LoginPage';
import { createContext, useEffect, useState } from "react";
import ThankyouPage from './ui/page/ThankyouPage/ThankyouPage';
import ErrorPage from './ui/page/ErrorPage/ErrorPage';
import CartPage from './ui/page/ShoppingCartPage/CartPage';
import { UserData } from './data/User/UserData';
import Checkout from './ui/page/CheckoutPage/CheckoutPage';
import ProductDetailsPage from './ui/page/ProductDetail';

const router = createHashRouter([
  {
    path: "/",
    element: <ShoppingSite />
  },
  {
    path: "/product/:productId",
    element: <ProductDetailsPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/thankyoupage",
    element: <ThankyouPage />
  },
  {
    path: "/shoppingcart",
    element: <Checkout />
  },
  {
    path: "/error",
    element: <ErrorPage />
  }

])
export const loginUserContext = createContext<UserData | null | undefined>(undefined);

function App() {
  const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

  useEffect(() => {
    // FirebaseAuthService.handleOnAuthStateChanged(setLoginUser)
  }, [])

  return (
    <>
      {/* <ShoppingSite /> */}
      {/* <loginUserContext.Provider value={loginUser}> */}
      <RouterProvider router={router} />
      {/* </loginUserContext.Provider > */}
    </>
  );
}

export default App;
