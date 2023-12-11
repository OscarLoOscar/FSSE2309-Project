import { Container } from "react-bootstrap";
import BottomWrapper from "../../component/BottomWrapper/BottomWrapper";
import ItemTab from "../../component/ItemTab/ItemTab";
import NavBar from "../../component/NavBar/NavBar";
import TopContainer from "../../component/TopContainer/TopContainer";
import { Grid } from "@mui/material";
import ShoppingCartItem from "../../component/ShoppingCartItem/ShoppingCartItem";
import { SetStateAction, useEffect, useState } from "react";
import { GetCartItemData } from "../../../data/dto/GetCartItemData";
import Footer from "../../component/Footer/Footer";
import { ProductListData } from "../../../data/dto/ProductListData";
import { ImgData } from "../../../data/ImgData";
import ImgDataJson from '../../../data/ImgData.json';

const pData: ProductListData[] =
  [{
    "pid": 1,
    "name": "anguirus",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 2,
    "name": "baragon",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 3,
    "name": "destoroyah",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 4,
    "name": "godzilla2016",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 5,
    "name": "godzilla1",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 6,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 7,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 8,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 9,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 10,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 11,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 12,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 13,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 14,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 15,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  },
  {
    "pid": 16,
    "name": "godzilla2",
    "price": 123,
    "has_stock": true,
  }
  ]
  ;


type Props = {

}

export default function CartPage() {
  const [data, setData] = useState<ImgData | undefined>(undefined);

  const fetchImgData = async () => {
    const imgDataArray: { position: number; data: { href: string; src: string; alt: string; }; }[] | undefined = await ImgDataJson;

    // Assuming you want the first item in the array
    const imgData: ImgData | undefined = imgDataArray && imgDataArray.length > 0
      ? { position: imgDataArray[0].position, data: [imgDataArray[0].data] }
      : undefined;

    setData(imgData);
  }
  useEffect(() => {
    fetchImgData();
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
          {/* {pData.map((data, index) => (
            <ShoppingCartItem
              key={index}
              cartItem={data}
              cartItemList={[]}
              setCartItemList={ }
            />
          ))}; */}
        </Grid>
      </Container>
      <Footer />

    </>
  );
}