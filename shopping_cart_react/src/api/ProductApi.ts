import axios from "axios";
import getEnvConfig from "../Config/EnvConfig";
import { ProductDetailsDto } from "../data/Product/ProductDetailsDto";
import { ProductListDto } from "../data/Product/ProductListDto";

const baseUrl = getEnvConfig().baseUrl;
export const getProductDetailsApi = async (productId: string | undefined) =>   {
    try {
        if(productId)   {
            const apiUrl = baseUrl + `/public/product/`+ productId
            const response = await axios.get<ProductDetailsDto>(apiUrl)
            return response.data;
        }
    }
    catch(e)    {
        console.error(e);
        throw e;
    }
}

export const getProductListApi = async () =>   {
    try {
        const apiUrl = baseUrl + `/public/product`
        const response = await axios.get<ProductListDto[]>(apiUrl)
        return response.data;
    }
    catch(e)    {
        console.error(e);
        throw e;
    }
}