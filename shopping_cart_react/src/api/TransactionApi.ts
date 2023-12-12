import axios from "axios";
import getEnvConfig from "../Config/EnvConfig";
import { PrepTransDto } from "../data/Trans/PrepTransDto";
import { PayTransDto } from "../data/Trans/PayTransDto";
import { GetTransDto } from "../data/Trans/GetTransDto";
import { FinishTransDto } from "../data/Trans/FinishTransDto";

const baseUrl = getEnvConfig().baseUrl;
export const prepTransApi = async (token: string) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const apiUrl = baseUrl + `/transaction/prepare`
        const response = await axios.post<PrepTransDto>(apiUrl, '', config)
        return response.data;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

export const payTransApi = async (token: string, tid: string) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const apiUrl = baseUrl + `/transaction/` + tid + `/pay`
        const response = await axios.patch<PayTransDto>(apiUrl, '', config)
        return response.data;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

export const getTransApi = async (token: string, tid: string) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const apiUrl = baseUrl + `/transaction/` + tid
        const response = await axios.get<GetTransDto>(apiUrl, config)
        return response.data;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

export const getTransApiTest = async (tid: string) => {
    try {
    
        const apiUrl = baseUrl + `/transaction/` + tid
        const response = await axios.get<GetTransDto>(apiUrl)
        return response.data;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}


export const finishTransApi = async (token: string, tid: string) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const apiUrl = baseUrl + `/transaction/` + tid + `/finish`
        const response = await axios.patch<FinishTransDto>(apiUrl, '', config)
        return response.data;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}