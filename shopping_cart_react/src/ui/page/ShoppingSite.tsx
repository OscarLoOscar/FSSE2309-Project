import React, { useState, useEffect } from 'react';
import TopContainer from '../component/TopContainer';
import TopContainerLeft from '../component/TopContainer';
import BottomWrapper from '../component/BottomWrapper';
import ItemTab from '../component/ItemTab';
import SerachBox from '../component/SearchBox';
import MainWrapper from '../component/adv/MainWrapper';
import { ImgData } from '../../data/ImgData';
import ImgDataJson from '../../data/ImgData.json';

const photos = [
  "//images.hktvmall.com/image_slider/bannerzh_231130040831.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231106074059.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231201044918.jpg",
];

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

  return (
    <>
      <title>大腦場 | HKTVmall 香港最大網購平台</title>
      <meta content="hktv://www.hktvmall.com/" property="al:ios:url" />
      <meta content={"910398738"} property="al:ios:app_store_id" />
      <meta content="HKTVmall" property="al:ios:app_name" />
      <meta content="https://www.hktvmall.com/" property="al:android:url" />
      <meta content="com.hktv.android.hktvmall" property="al:android:package" />
      <meta content="HKTVmall" property="al:android:app_name" />
      <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
      <meta content="香港電視，網上購物" name="keywords" />
      <meta content="香港電視網上購物" name="description" />
      <meta content="index,follow" name="robots" />
      <meta content="True" name="HandheldFriendly" />
      <meta content={"1280"} name="MobileOptimized" />
      <meta
        content="width=1280, target-densitydpi=160, maximum-scale=1.0"
        name="viewport"
      />
      <meta content="大腦場 | HKTVmall 香港最大網購平台" property="og:title" />
      <meta content="香港電視，網上購物" property="og:keywords" />
      <meta content="香港電視網上購物" property="og:description" />
      <meta content={"750069328396293"} property="fb:app_id" />
      <meta
        content="app-id=910398738, app-argument=https://www.hktvmall.com/"
        name="apple-itunes-app"
      />
      <link href="https://www.hktvmall.com/hktv/zh/" rel="canonical" />
      <link
        href="/_ui/desktop/common/images/favicon.ico"
        media="all"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="/yuicombo?/_ui/desktop/common/css/reset1511.css&/_ui/desktop/common/css/base1511.css&/_ui/desktop/common/css/general1511.css&/_ui/desktop/common/css/productBrief1511.css&/_ui/desktop/common/css/priceLabel1511.css&/_ui/desktop/common/css/colorBox1511.css&/_ui/desktop/common/css/colorbox-desktop.css&/_ui/desktop/common/css/sprite1511.css&/_ui/desktop/common/css/header_1511.css&/_ui/desktop/common/css/footer_1511.css&"
        rel="stylesheet"
      />
      <link
        href="/yuicombo?/_ui/desktop/common/css/tooltipster.css&/_ui/desktop/common/css/productDetailPanel1511.css&/_ui/desktop/common/css/recentlyView.css&/_ui/desktop/common/css/recentlyView_2015.css&/_ui/desktop/common/css/print1511.css&/_ui/desktop/common/css/generalHeaderFooter_1511.css&/_ui/desktop/common/css/crazyAd_1511.css&/_ui/desktop/common/css/productVariantDropdownSelector.css&"
        rel="stylesheet"
      />
      <link
        href="/yuicombo?/_ui/shared/common/css/ui/ui-button-confirm.css&/_ui/shared/common/css/ui/ui-selection-box.css&/_ui/shared/common/css/ui/layout/ui-overlay-view.css&/_ui/shared/common/css/ui/layout/ui-alert-box-view.css&/_ui/shared/common/css/productSharedSpriteMap.css&/_ui/shared/common/css/slick-1.5.7.css&"
        rel="stylesheet"
      />
      {/*?if !IE?*/}
      {/*?endif?*/}
      {/*[if gte IE 9]>
<link rel="stylesheet" href="/yuicombo?/_ui/desktop/common/css/ie9_1511.css&">
  <![endif]*/}
      {/*[if IE 8]>
<![endif]*/}
      <link
        href="/yuicombo?/_ui/shared/common/css/slick-custom.css&/_ui/shared/common/css/autoRotateProductList.css&/_ui/desktop/common/css/rotatingImageSlider.css&/_ui/desktop/common/css/hktv.productListView.css&/_ui/desktop/common/css/famousBrand.css&/_ui/desktop/common/css/1188Banner.css&/_ui/desktop/common/css/bannerTop.css&/_ui/shared/common/css/product-brief.css&/_ui/desktop/common/css/allPromotionBox/allPromotionBox.css&/_ui/shared/common/css/deliveryLabel.css&/_ui/desktop/common/css/hw-common/ui-hw-show-more-anchor.css&/_ui/desktop/common/css/hw-common/ui-hw-show-more-button.css&/_ui/desktop/common/css/st12-common/st12-show-more-button.css&/_ui/desktop/common/css/gadgetsandelectronicsLanding.css&/_ui/desktop/common/css/navCountdown.css&/_ui/desktop/common/css/st12-mechanics-banner/mechanics-banner.css&/_ui/desktop/common/css/navScrollingTextBar.css&/_ui/desktop/common/css/currentVisitor.css&/_ui/desktop/common/css/gadgets-hotcat/gadgets-hotcat-card.css&/_ui/desktop/common/css/gadgets-hotcat/gadgets-hotcat-list.css&"
        rel="stylesheet"
      />
      <link
        href="/yuicombo?/_ui/desktop/common/css/blogContentShowAllbtn.css&/_ui/desktop/common/css/blogContentDesktop.css&"
        rel="stylesheet"
      />
      <link
        href="/yuicombo?/_ui/desktop/common/css/st12-trp/st12-trp.css&/_ui/desktop/common/css/st12-slider-b/st12-slider-b-slide.css&/_ui/desktop/common/css/st12-slider-b/st12-slider-b-slider.css&/_ui/desktop/common/css/st12-slider-b/st12-slider-b.css&"
        rel="stylesheet"
      />
      <link
        href="/yuicombo?/_ui/desktop/common/css/promo-cat/mixnmatch/promo-cat-mixnmatch-promo-image-matrix.css&/_ui/desktop/common/css/promo-cat/mixnmatch/promo-cat-mixnmatch-promo-brief.css&/_ui/desktop/common/css/promo-cat/mixnmatch/promo-cat-mixnmatch-promos.css&/_ui/desktop/common/css/promo-cat/mixnmatch/promo-cat-mixnmatch-tab.css&/_ui/desktop/common/css/promo-cat/mixnmatch/promo-cat-mixnmatch.css&/_ui/desktop/common/css/promo-cat/sku/promo-cat-sku-products.css&/_ui/desktop/common/css/promo-cat/sku/promo-cat-sku-tab.css&/_ui/desktop/common/css/promo-cat/sku/promo-cat-sku.css&/_ui/desktop/common/css/promo-cat/promo-cat.css&/_ui/desktop/common/css/famous-brand/ui-famous-brand-slide.css&/_ui/desktop/common/css/famous-brand/st12-famous-brand-slider.css&/_ui/desktop/common/css/st12-review/selectedReview_desktop_st12.css&/_ui/desktop/common/css/PremiumStores/PremiumStoresComponent.css&/_ui/desktop/common/css/Voucher/VoucherComponent.css&"
        rel="stylesheet"
      />
      <link
        href="/yuicombo?/_ui/desktop/common/css/sfpi-st12-rec.css&/_ui/desktop/common/css/promotionSlot.css&/_ui/desktop/common/css/st12-mechanics-review/ui-mechanics-review-slide.css&/_ui/desktop/common/css/st12-mechanics-review/st12-mechanics-review-slider.css&/_ui/desktop/common/css/simplifiedStoreContent.css&/_ui/desktop/common/css/st12-pt10.css&"
        rel="stylesheet"
      />
      <link
        href="/yuicombo?/_ui/shared/common/css/advancedPromotionBox/advancedPromotionBox.css&"
        rel="stylesheet"
      />
      <link
        href="/yuicombo?/_ui/desktop/common/css/gadgets-recom-brand/gadgets-recom-brand-slider.css&/_ui/desktop/common/css/gadgets-zone-promo-slot/gadgets-zone-promo-slot.css&"
        rel="stylesheet"
      />
      {/* Custom Audience Pixel Code */}
      {/* Insert Your Custom Audience Pixel ID below. */}
      <noscript>
        &lt;img height="1"
        src="https://www.facebook.com/tr?id=761332883983543&amp;amp;ev=PageView&amp;amp;noscript=1"
        style="display:none" width="1"/&gt;
      </noscript>
      {/* End Custom Audience Pixel Code */}
      {/* Data Layer Declaration */}
      {/* End Data Layer Declaration */}
      {/* Google Tag Manager */}
      {/* End Google Tag Manager */}
      <div style={{ display: "none" }}></div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe height="0" src="//www.googletagmanager.com/ns.html?id=GTM-5XJPTB"
        style="display:none;visibility:hidden" width="0"&gt; &lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <div className="bodyWrapper">
        <div className="gadgetsandelectronics" id="header">
          <div id="bannerTop">
            <div className="banner-1188" style={{ backgroundColor: "#d3dfce" }}>
              <div className="width-1188">
                <a
                  className="topBannerGa"
                  data-//mabsrefid="Ad_GadgetsAndElectronics_TopBanner_NA_NA_H8024001_20231204_7_235194"
                  href="https://www.hktvmall.com/hktv/zh/main/s/H8024001"
                  tabIndex={-1}
                >
                  <img
                    alt="Logi_xmas"
                    src="//images.hktvmall.com/banner/bannerzh_231130051555.jpg"
                    title="Logi_xmas"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="animatedHeaderWrapper"></div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n     body #header .top .bar>div:first-child ul li a {\n                        color : #;\n                    }\n                    body #header .top .bar>div:first-child li:nth-last-child(n+2)::after {\n                        color : #;\n                    }\n    "
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n     body #header .top .bar>div:last-child ul li a {\n                        color : #;\n                    }\n                    body #header .top .bar>div:last-child li:nth-last-child(n+2)::after {\n                        color : #;\n                    }\n    "
            }}
          />
        </div>
        <TopContainer />
        <img
          alt="Logo"
          src="https://venturenixlab.co/wp-content/uploads/2022/05/cropped-cropped-Vlab-horizontal-logo.png"
          title="company_logo"
          width={500}
          style={{ display: 'block', margin: 'auto' }}
        />
        <ItemTab />

        {/* <NaviWrapper /> */}

        <SerachBox />
        <BottomWrapper />
        <MainWrapper imgs={photos}/>

        <div id="countdownTimerWrapper"></div>
        <div id="navScrollingBarWrapper"></div>
      </div>
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
      <input
        className="landingCurrentPage"
        type="hidden"
        defaultValue="page-GadgetsandelectronicsLandingPage"
      />
      {/* Google Code for Remarketing Tag */}
      {/*------------------------------------------------
    Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup
    -------------------------------------------------*/}
      <noscript>
        &lt;div style="display:inline;"&gt; &lt;img alt="" height="1"
        src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/964752338/?value=0&amp;amp;guid=ON&amp;amp;script=0"
        style="border-style:none;" width="1"&gt; &lt;/img&gt; &lt;/div&gt;
      </noscript>
    </>
  );
};

export default ShoppingSite;