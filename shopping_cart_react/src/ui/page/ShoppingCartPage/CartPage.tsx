import { Container } from "react-bootstrap";
import BottomWrapper from "../../component/BottomWrapper/BottomWrapper";
import ItemTab from "../../component/ItemTab/ItemTab";
import NavBar from "../../component/NavBar/NavBar";
import TopContainer from "../../component/TopContainer/TopContainer";
import { Grid, Card, CardMedia, CardActionArea } from "@mui/material";
import ShoppingCartItem from "../../component/ShoppingCartItem/ShoppingCartItem";
import { SetStateAction, useEffect, useState } from "react";
import { GetCartItemData } from "../../../data/dto/GetCartItemData";
import Footer from "../../component/Footer/Footer";
import { ProductListData } from "../../../data/dto/ProductListData";
import { ImgData } from "../../../data/ImgData";
import ImgDataJson from '../../../data/ImgData.json';
import { ProductData } from "../../../data/ProductData"
import ProductDataJson from "../../../data/ProductData.json"


// const pData: GetCartItemData[] =
//   [{
//     "pid": 1,
//     "name": "Almaviva",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 2,
//     "name": "Borgogno No Name",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 3,
//     "name": "Chateau Branine-Ducru",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 4,
//     "name": "Chateau Cantemerle",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 5,
//     "name": "Chateau D'ISSAN",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 6,
//     "name": "Borgrigne",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 7,
//     "name": "NSG",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 8,
//     "name": "Napanook",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 9,
//     "name": "Chateau Lafite",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 10,
//     "name": "Chateau Lascome",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 11,
//     "name": "Chateau Leoville Las Cast",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 12,
//     "name": "Chateau Pichon Baron Les Friffons",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 13,
//     "name": "Luce",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 14,
//     "name": "Chateau Mouton",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 15,
//     "name": "Quintessa",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   },
//   {
//     "pid": 16,
//     "name": "null",
//     "price": 123,
//     "cart_quantity": 1,
//     "stock": 10
//   }
//   ]
//   ;


type Props = {
}

export default function CartPage() {
  const [data, setData] = useState<ImgData | undefined>(undefined);
  const [pData, setPData] = useState<ProductData | undefined>(undefined);
  const [cartItemList, setCartItemList] = useState<GetCartItemData[]>([]);

  const fetchImgData = async () => {
    const imgDataArray: {
      position: number;
      data: { href: string; src: string; alt: string; };
    }[] | undefined = await ImgDataJson;

    // Assuming you want the first item in the array
    const imgData: ImgData | undefined = imgDataArray && imgDataArray.length > 0
      ? { position: imgDataArray[0].position, data: [imgDataArray[0].data] }
      : undefined;

    setData(imgData);
  }

  const fetchProductData = async () => {
    const productDataArray: {
      pid: number;
      name: string;
      price: number;
      stock: number;
    }[] | undefined = await ProductDataJson;

    // Assuming you want the first item in the array
    const proData: ProductData | undefined =
      productDataArray && productDataArray.length > 0
        ? { products: productDataArray }
        : undefined;

    setPData(proData);
  }
  useEffect(() => {
    fetchImgData();
    fetchProductData();
  }, [])

  return (
    <>
      <title>Venturenix Lab React Project</title>
      <TopContainer />
      <img
        alt="Logo"
        src="https://venturenixlab.co/wp-content/uploads/2022/05/cropped-cropped-Vlab-horizontal-logo.png"
        title="company_logo"
        width={500}
        style={{ display: 'block', margin: 'auto' }}
      />
      <ItemTab />

      <NavBar />

      <BottomWrapper />
      <Container >
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="top"
          style={{ marginTop: 10 }}
        >
          {pData?.products?.map((data2, index) => (
            <ShoppingCartItem
              key={index}
              cartItem={data2}
              cartItemList={cartItemList}
              setCartItemList={setCartItemList}
            />
          ))};
        </Grid>
      </Container>
      <Footer />

    </>
  );
}