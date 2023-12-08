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

const photos = [
  "//images.hktvmall.com/image_slider/bannerzh_231130040831.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231106074059.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231201044918.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231106074059.jpg",
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
  }
  ]
  ;

// 定义一个ShoppingSite组件
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
      <div id="countdownTimerWrapper"></div>
      <div id="navScrollingBarWrapper"></div>
      <div className="wrapper-footer gadgetsandelectronics">
        <div className="footer-content">
          <div className="wrapper-footer-top-content">
            <div className="footer-top-container">
              <div className="footer-logo">
                <i className="icFooterHktvmall"></i>
              </div>
            </div>
            <div className="footer-top-container">
              <a
                href="https://hktvmall.force.com/cs/s/article/Delivery-Fee-Arrangement?language=zh_TW"
                id="footerDeliveryUrl"
                target="_blank"
              >
                <div className="footer-logo">
                  <i className="icFooterDelivery"></i>
                </div>
                <div className="footer-text freeShip">
                  <span>
                    HKTVmall派送貨品
                    <br />
                    買滿指定金額免運費&gt;&gt;
                  </span>
                </div>
              </a>
            </div>
            <div className="footer-top-container">
              <a
                href="https://cloud.marketing.hktvmall.com/citi_HKTVmall_creditcard"
                id="footerCobrandUrl"
                target="_blank"
              >
                <div className="footer-logo">
                  <i className="icFooterCobrand"></i>
                </div>
                <div className="footer-text cobrand">
                  <span>
                    Citi HKTVmall 信用卡
                    <br />
                    逢星期四專享95折&gt;&gt;
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="wrapper-footer-divider"></div>
        </div>
      </div>
      <div className="footer">
        <div className="container-frame-margin-auto container-frame-b">
          <div className="container-frame-a">
            <ul className="footer-section color-white">
              <li className="recently-viewed hktvui-wrapper">
                <div className="recently-view-footer footer-overlay">
                  <div className="fixedWidthHeight">
                    <div className="recently-view-head h4">
                      <div className="container-frame-margin-auto container-frame-b">
                        <div className="container-frame-a">
                          <div className="center">
                            <span className="recently-view-t">最近查看商品</span>
                            <span className="recently-view-number">
                              (<span className="recentlyViewPageNumber"></span>/
                              共<span className="totalNumberOfPage"></span>頁 )
                            </span>
                            <div className="recentlyViewClearAll">
                              <span className="clearAllText">清除全部記錄</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recently-view-list footer-overlay-list">
                      <div className="recently-view-slider"></div>
                      <div className="noMoreProductIconWrapper">
                        <i className="noMoreProductIcon"></i>
                        <span className="alertNoRecord">沒有記錄</span>
                      </div>
                      <div className="width-100p" style={{ height: 6 }}></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        id="Salesforce-cshelp"
        //onclick="location.href='/hktv/zh/cs-help';"
        style={{
          width: 278,
          right: 10,
          height: 40,
          bottom: 0,
          position: "fixed",
          zIndex: 16777271,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          backgroundColor: "#36b449",
          color: "#fff",
          fontSize: 16,
          lineHeight: 30,
          padding: 5,
          border: "none",
          cursor: "pointer",
          textAlign: "center"
        }}
      >
        <span>客戶服務</span>
      </button>
      <div className="extra-banner-container">
        <div
          className="hktv-zone-banner"
          data-category="gadgetsandelectronics"
          data-zone="SLA"
        ></div>
        <div
          className="hktv-zone-banner"
          data-category="gadgetsandelectronics"
          data-zone="SLB"
        ></div>
        <div
          className="hktv-zone-banner"
          data-category="gadgetsandelectronics"
          data-zone="SLC"
        ></div>
        <div
          className="hktv-zone-banner"
          data-category="gadgetsandelectronics"
          data-zone="SLD"
        ></div>
        <i className="closeBtn"></i>
      </div>
      <div className="CrazyAd">
        <div className="CrazyAd-container">
          <i className="btnCloseLarge"></i>
          <div
            className="hktv-zone-banner"
            data-category="gadgetsandelectronics"
            data-zone="CRA"
          ></div>
        </div>
      </div>
      <form name="accessiblityForm">
        <input
          id="accesibility_refreshScreenReaderBufferField"
          name="accesibility_refreshScreenReaderBufferField"
          type="hidden"
          defaultValue=""
        />
      </form>
      <div
        aria-live="polite"
        aria-relevant="text"
        className="skip"
        id="ariaStatusMsg"
        role="status"
      ></div>
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
    </>
  );
};

export default ShoppingSite;