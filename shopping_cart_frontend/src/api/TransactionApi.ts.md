import axios from "axios";
import getEnvConfig from "../Config/EnvConfig";
import { PrepTransDto } from "../data/Trans/PrepTransDto";
import { PayTransDto } from "../data/Trans/PayTransDto";
import { GetTransDto } from "../data/Trans/GetTransDto";
import { FinishTransDto } from "../data/Trans/FinishTransDto";
import * as FirebaseAuthService from "../authService/FirebaseAuthService"

const baseUrl = getEnvConfig().baseUrl;
export const prepTransApi = async () => {
  const accessToken = await FirebaseAuthService.getAccessToken();
  try {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
    };
    const apiUrl = `${baseUrl}/transaction/prepare`;
    const response = await axios.post<PrepTransDto>(apiUrl, '', config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const payTransApi = async (tid: string) => {
  const accessToken = await FirebaseAuthService.getAccessToken();
  try {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
    };
    const apiUrl = `${baseUrl}/transaction/${tid}/pay`;
    const response = await axios.patch<PayTransDto>(apiUrl, '', config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTransApi = async (tid: string) => {
  const accessToken = await FirebaseAuthService.getAccessToken();
  try {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
    };
    const apiUrl = `${baseUrl}/transaction/${tid}`;
    const response = await axios.get<GetTransDto>(apiUrl, config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const finishTransApi = async (tid: string) => {
  const accessToken = await FirebaseAuthService.getAccessToken();
  try {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
    };
    const apiUrl = `${baseUrl}/transaction/${tid}/finish`;
    const response = await axios.patch<FinishTransDto>(apiUrl, '', config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
