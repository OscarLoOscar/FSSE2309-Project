import { createHashRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import ShoppingSite from './ui/page/ProductPage/ShoppingSite';
import LoginPage from './ui/page/LoginPage/LoginPage';
import { createContext, useEffect, useState } from "react";
import ThankyouPage from './ui/page/ThankyouPage/ThankyouPage';
import ErrorPage from './ui/page/ErrorPage/ErrorPage';
// import CartPage from './ui/page/ShoppingCartPage/CartPage';
import { UserData } from './data/User/UserData';
import Checkout from './ui/page/CheckoutPage/CheckoutPage';
import ProductDetailsPage from './ui/page/ProductPage/ProductDetailsPage';
import MainPage from './ui/page/MainPage/MainPage';
import LoginSuccessPage from "./ui/page/LoginSuccessPage/LoginSuccessPage";
import * as FirebaseAuthService from "./authService/FirebaseAuthService"

//useContext - is a way to manage state globally

// 括號入面放inittial state
export const LoginUserContext = createContext<UserData | undefined | null>(undefined);
function App() {
  // 3 situtation : 
  // 1.有UserData=> logined ,
  // 2.null => 無login ,
  // 3.undefined => 未check＝> firebase async => useEffect
  const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

  useEffect(() => {
    FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />
    },
    {
      path: "/product",
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
    },
    {
      path: "/success",
      element: <LoginSuccessPage />
    }

  ])

  return (
    <>
      <LoginUserContext.Provider value={loginUser}>
        <RouterProvider router={router} />
      </LoginUserContext.Provider>
    </>
  )
}

export default App
