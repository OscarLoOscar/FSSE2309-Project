import React, { useState, useEffect } from 'react';
import TopContainer from '../component/TopContainer/TopContainer';
import TopContainerLeft from '../component/TopContainer/TopContainer';
import BottomWrapper from '../component/BottomWrapper/BottomWrapper';
import ItemTab from '../component/ItemTab/ItemTab';
import MainWrapper from '../component/adv/MainWrapper';
import { ImgData } from '../../data/ImgData';
import ImgDataJson from '../../data/ImgData.json';
import NavBar from '../component/NavBar/NavBar';
import MyComponent from '../component/NavBar/UserStatus/UserStatus';
import { ProductListData } from '../../data/dto/ProductListData';
import { Grid, Table, TableContainer, TableHead, TableRow } from '@mui/material';
import ProductListCard from '../component/ProductListCard/ProductListCard';
import ProductListCardLoading from '../component/ProductListCard/ProductListCardLoading';
import Footer from '../component/Footer/Footer';

const photos = [
  "//images.hktvmall.com/image_slider/bannerzh_231130040831.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231201044918.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231129045222.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_230907025912.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_220712063428.jpg",

];

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

// define一個ShoppingSite组件
const ShoppingSite = () => {

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

  // // 声明一个selectedItems变量，用于存储选中的商品
  // const [selectedItems, setSelectedItems] = useState<string[]>([]);
  // // 声明一个cart变量，用于存储购物车中的商品
  // const [cart, setCart] = useState<string[]>([]);
  // // 声明一个paymentConfirmed变量，用于存储支付确认状态
  // const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  // // 声明一个transactionComplete变量，用于存储交易完成状态
  // const [transactionComplete, setTransactionComplete] = useState(false);

  // // Mounting Phase
  // // 挂载时执行
  // useEffect(() => {
  //   console.log('Component has mounted.');
  //   // 可以在這裡加載商品數據
  //   return () => {
  //     console.log('Component will unmount.');
  //   };
  // }, []);

  // // Updating Phase (Runs whenever selectedItems, cart, paymentConfirmed changes)
  // // 更新时执行
  // useEffect(() => {
  //   console.log('Selected items:', selectedItems);
  // }, [selectedItems]);

  // useEffect(() => {
  //   console.log('Shopping cart:', cart);
  // }, [cart]);

  // useEffect(() => {
  //   console.log('Payment confirmed:', paymentConfirmed);
  // }, [paymentConfirmed]);

  // useEffect(() => {
  //   console.log('Transaction complete:', transactionComplete);
  // }, [transactionComplete]);

  // // 添加商品到购物车
  // const handleAddToCart = (item: string) => {
  //   setCart([...cart, item]);
  // };

  // // 确认支付
  // const handleConfirmPayment = () => {
  //   // 模拟异步操作，例如发送支付请求
  //   try {
  //     // 发送支付请求
  //     // await api.post('/payment');
  //     // 如果成功，更新支付状态
  //     setPaymentConfirmed(true);
  //   } catch (error) {
  //     // 处理支付失败的情况
  //     console.error('Payment failed:', error);
  //   }


  // 完成交易
  // const handleCompleteTransaction = () => {
  // 模拟异步操作，例如完成交易请求
  //   try {
  //     // 完成交易请求
  //     // await api.post('/complete-transaction');
  //     // 如果成功，更新交易完成状态
  //     setTransactionComplete(true);
  //   } catch (error) {
  //     // 处理交易失败的情况
  //     console.error('Transaction failed:', error);
  //   } setTransactionComplete(true);
  // };


  // const [productListData, setProductListData] = useState<ProductListData[]>([])

  // const renderProductCard = () => {
  //   if (productListData.length !== 0) {
  //     return productListData.map((value) => (
  //       <ProductListCard
  //         key={value.pid}
  //         productData={value} />
  //     ))
  //   }
  //   else {
  //     return Array.from({ length: 15 }).map((_, index) => (<ProductListCardLoading key={index} />))
  //   }
  // }

  // const fetchProductListData = async () => {
  //   setProductListData([]);
  //   const productDetailResponse = await GetProductApi.getAllProduct();
  //   setTimeout(() => {
  //     try {
  //       setProductListData(productDetailResponse ?? []);
  //     }
  //     catch (error) {
  //       navigate("/error")
  //     }
  //   }, 1500)
  // }

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
      <MainWrapper imgs={photos} />

      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: 30 }}>
        <Grid container spacing={5} maxWidth={1200} sx={{ margin: '0 auto' }}>
          {pData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ marginBottom: 4 }}>
              <ProductListCard productData={data} key={index} />
            </Grid>
          ))
          }
        </Grid>
      </Grid>
      {/*[if IE]>


<![endif]*/}
      < input
        className="landingCurrentPage"
        type="hidden"
        defaultValue="page-GadgetsandelectronicsLandingPage"
      />
      {/* Google Code for Remarketing Tag */}
      {/*------------------------------------------------
    Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup
    -------------------------------------------------*/}
      <noscript>
        & lt;div style="display:inline;"&gt; &lt;img alt="" height="1"
        src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/964752338/?value=0&amp;amp;guid=ON&amp;amp;script=0"
        style="border-style:none;" width="1"&gt; &lt;/img&gt; &lt;/div&gt;
      </noscript>
      <Footer />
    </>
  );
};

export default ShoppingSite;