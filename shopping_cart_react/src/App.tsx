import React from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import './App.css';
import ShoppingSite from './ui/page/ShoppingSite';
import LoginPage from './ui/page/LoginPage/LoginPage';
import { createContext, useEffect, useState } from "react";
import { UserData } from './data/UserData';
import ShoppingCartPage from './ui/page/ShoppingCartPage/ShoppingCartPage';
import ThankyouPage from './ui/page/ThankyouPage/ThankyouPage';

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
    path: "/shoppingcart",
    // element: <ShoppingCartPage />
    element: <ThankyouPage />
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
      <loginUserContext.Provider value={loginUser}>
        <RouterProvider router={router} />
      </loginUserContext.Provider >
    </>
  );
}

export default App;
