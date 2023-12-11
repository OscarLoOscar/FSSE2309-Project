import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './App.css';
import ShoppingSite from './ui/page/ShoppingSite';
import LoginPage from './ui/page/LoginPage/LoginPage';
import { createContext, useEffect, useState } from "react";
import { UserData } from './data/UserData';
import ThankyouPage from './ui/page/ThankyouPage/ThankyouPage';
import ErrorPage from './ui/page/ErrorPage/ErrorPage';
import CartPage from './ui/page/ShoppingCartPage/CartPage';

const router = createHashRouter([
  {
    path: "/",
    element: <ShoppingSite />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/thankyoupage",
    // element: <ShoppingCartPage />
    element: <ThankyouPage />
  },
  {
    path: "/shoppingcart",
    element: <CartPage />
    // element: <ErrorPage />
  },

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
