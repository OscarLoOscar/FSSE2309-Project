import axios, { AxiosError } from "axios";
import getEnvConfig from "../Config/EnvConfig";
import { AddCartItemDto } from "../data/CartItem/AddCartItemDto";
import { CartItemListDto } from "../data/CartItem/CartItemListDto";
import * as FirebaseAuthService from "../authService/FirebaseAuthService"
const baseUrl = getEnvConfig().baseUrl;

export const addCartItemApi = async (productId: string, productQty: string) => {
  const accessToken = await FirebaseAuthService.getAccessToken();
  if (!accessToken)
    throw new Error();
  try {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
    };
    if (productId) {
      const apiUrl = `${baseUrl}/cart/${productId}/${productQty}`
      const response = await axios.put(
        apiUrl, null, config);
      console.log(response.data);
    }
  }
  catch (error) {
    console.error(error);
    throw error;
  }
}

const handleApiError = (error: AxiosError) => {
  if (error.response) {
    console.error('Server responded with:', error.response.status, error.response.data);
  } else if (error.request) {
    console.error('No response received. Request details:', error.request);
  } else {
    console.error('Error setting up the request:', error.message);
  }
};

export const deleteCartItemApi = async (token: string, productId: string) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    if (productId) {
      const apiUrl = baseUrl + `/cart/` + productId
      const response = await axios.delete<CartItemListDto>(apiUrl, config)
      return response.data;
    }
  }
  catch (e) {
    console.error(e);
    throw e;
  }
}

export const getCartItemListApi = async (token: string) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const apiUrl = baseUrl + `/cart`
    const response = await axios.get<CartItemListDto[]>(apiUrl, config)
    return response.data;
  }
  catch (e) {
    console.error(e);
    throw e;
  }
}

export const updateCartItemApi = async (token: string, productId: string, productQty: string) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    if (productId) {
      const apiUrl = baseUrl + `/cart/` + productId + `/` + productQty
      const response = await axios.patch<CartItemListDto>(apiUrl, '', config)
      return response.data;
    }
  }
  catch (e) {
    console.error(e);
    throw e;
  }
}