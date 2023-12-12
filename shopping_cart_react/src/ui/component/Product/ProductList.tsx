import * as React from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import * as ProductApi from "../../../../src/api/ProductApi.js";
import ProductListCard from "./ProductListCard";
import Loading from "../../component/Utility/Loading.js";
import { ProductListDto } from '../../../data/Product/ProductListDto.js';


export default function ProductList() {
    const [productList, setProductList] = React.useState<ProductListDto[] | undefined>(undefined);
    const navigate = useNavigate()

    const fetchProductData = async () => {
        try {
            setProductList(await ProductApi.getProductListApi())
        } catch (e) {
            navigate("/error")
        }
    }

    const renderProductList = () => {
        if (productList) {
            return productList.map((value) => (
                <ProductListCard
                    key={value.pid}
                    productData={value}
                    onAddToCart={fetchProductData}
                />
            ))
        } else {
            return <Loading />
        }
    }

    useEffect(() => {
        void fetchProductData()
    }, []);

    return <>
        <Box height="70px"></Box>
        <Grid container maxWidth={900} margin="auto" key="itemGrid">
            {renderProductList()}
        </Grid>
    </>
}