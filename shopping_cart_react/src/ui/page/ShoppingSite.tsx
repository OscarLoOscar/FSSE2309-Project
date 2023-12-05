import React, { useState, useEffect } from 'react';
import TopContainer from '../component/TopContainer';
import TopContainerLeft from '../component/TopContainer';
import BottomWrapper from '../component/BottomWrapper';
import ItemTab from '../component/ItemTab';
import SerachBox from '../component/SearchBox';
import NaviWrapper from '../component/NaviWrapper';

// 定义一个ShoppingSite组件
const ShoppingSite = () => {
  // 声明一个selectedItems变量，用于存储选中的商品
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  // 声明一个cart变量，用于存储购物车中的商品
  const [cart, setCart] = useState<string[]>([]);
  // 声明一个paymentConfirmed变量，用于存储支付确认状态
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  // 声明一个transactionComplete变量，用于存储交易完成状态
  const [transactionComplete, setTransactionComplete] = useState(false);

  // Mounting Phase
  // 挂载时执行
  useEffect(() => {
    console.log('Component has mounted.');
    // 可以在這裡加載商品數據
    return () => {
      console.log('Component will unmount.');
    };
  }, []);

  // Updating Phase (Runs whenever selectedItems, cart, paymentConfirmed changes)
  // 更新时执行
  useEffect(() => {
    console.log('Selected items:', selectedItems);
  }, [selectedItems]);

  useEffect(() => {
    console.log('Shopping cart:', cart);
  }, [cart]);

  useEffect(() => {
    console.log('Payment confirmed:', paymentConfirmed);
  }, [paymentConfirmed]);

  useEffect(() => {
    console.log('Transaction complete:', transactionComplete);
  }, [transactionComplete]);

  // 添加商品到购物车
  const handleAddToCart = (item: string) => {
    setCart([...cart, item]);
  };

  // 确认支付
  const handleConfirmPayment = () => {
    // 模拟异步操作，例如发送支付请求
    try {
      // 发送支付请求
      // await api.post('/payment');
      // 如果成功，更新支付状态
      setPaymentConfirmed(true);
    } catch (error) {
      // 处理支付失败的情况
      console.error('Payment failed:', error);
    }
  };

  // 完成交易
  const handleCompleteTransaction = () => {
    // 模拟异步操作，例如完成交易请求
    try {
      // 完成交易请求
      // await api.post('/complete-transaction');
      // 如果成功，更新交易完成状态
      setTransactionComplete(true);
    } catch (error) {
      // 处理交易失败的情况
      console.error('Transaction failed:', error);
    } setTransactionComplete(true);
  };

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

        <NaviWrapper />

        <SerachBox />

        <BottomWrapper />
        <div className="navi wrapper">
          <div className="container">
            <div className="cat-menu">
              <a>
                <span>商品分類</span>
              </a>
              <div className="subnav" id="subnav" style={{ display: "block" }}>
                <ul>
                  <li>
                    <a
                      className="anchorBanner promoCat landingBestDealsBanner"
                      data-//mabsrefid="Ad_GadgetsAndElectronics_BestDeal_NA_NA_P0034002_20231204_3_247536"
                      href="https://www.hktvmall.com/hktv/zh/main/Timberland/s/P0034002"
                      //onclick="//onclickBestDealsBanner(this)"
                      target="_self"
                    >
                      <img
                        alt="TBL_Dec23_Promo"
                        className="landingPromotionBanner"
                        height={55}
                        src="//images-dynamic.hktvmall.com/mkgb/landing/egq/zhf/NlAMUUGkPJ20231130172500.jpg"
                        width={210}
                      />
                    </a>
                  </li>
                  <li data-category-code="AA31050000000" data-count={1506}>
                    <a
                      className="link"
                      data-cat="AA31050000000"
                      data-maincat="AA31050000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/c/AA31050000000"
                    >
                      手機
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={0}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31050000000"
                          data-maincat="AA31050000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/c/AA31050000000"
                        >
                          全部 手機
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31050500001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/iPhone/c/AA31050500001"
                              >
                                iPhone
                                <span>512</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31051000001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Samsung-Smartphone/c/AA31051000001"
                              >
                                Samsung 手機
                                <span>192</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31051500001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Huawei-Smartphone/c/AA31051500001"
                              >
                                華為 手機
                                <span>25</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31052000001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Xiaomi-Smartphone/c/AA31052000001"
                              >
                                小米 手機
                                <span>50</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31052500001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Sony-Smartphone/c/AA31052500001"
                              >
                                Sony 手機
                                <span>22</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31053000001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/LG-Smartphone/c/AA31053000001"
                              >
                                LG 手機
                                <span>2</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31053500001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Lenovo-Smartphone/c/AA31053500001"
                              >
                                Lenovo 手機
                                <span>1</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31054000001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Oppo-Smartphone/c/AA31054000001"
                              >
                                Oppo 手機
                                <span>32</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31054500001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Vivo-Smartphone/c/AA31054500001"
                              >
                                Vivo 手機
                                <span>58</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31055000001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/HTC-Smartphone/c/AA31055000001"
                              >
                                HTC 手機
                                <span>2</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31055500001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Nokia-Smartphone/c/AA31055500001"
                              >
                                Nokia 手機
                                <span>23</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31056000001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Motorola-Smartphone/c/AA31056000001"
                              >
                                Motorola 手機
                                <span>8</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31056500001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Other-Smartphone/c/AA31056500001"
                              >
                                其他智能手機
                                <span>498</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31057000001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Mobile-Phone/c/AA31057000001"
                              >
                                長者手機
                                <span>271</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31058000001"
                                data-maincat="AA31050000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Mobile-Phone/Device-Protection-Insurance/c/AA31058000001"
                              >
                                智能手機保險
                                <span>2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31050000000"
                            href="https://www.hktvmall.com/hktv/s/P0042001"
                            target="_blank"
                          >
                            <img
                              alt="Samsung"
                              data-src="//images.hktvmall.com/p0042001/p0042001_storelogo_210319041340.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31050000000"
                            href="https://www.hktvmall.com/hktv/s/B0247001"
                            target="_blank"
                          >
                            <img
                              alt="Nokia"
                              data-src="//images.hktvmall.com/b0247001/b0247001_storelogo_221214050428.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31050000000"
                            href="https://www.hktvmall.com/hktv/main/VIVO/s/H8745001?page=0&q=%3Alive-time-asc%3Acategory%3AAA31000000000%3Astore%3AH8745001%3Astreet%3Amain%3A"
                            target="_blank"
                          >
                            <img
                              alt="Vivo"
                              data-src="//images.hktvmall.com/h8745001/h8745001_storelogo_230221062734.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31050000000"
                            href="https://www.hktvmall.com/hktv/main/%E6%96%B0%E5%A2%83%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/s/H8955001?page=0&q=%3Alive-time-asc%3Acategory%3AAA31050000000%3Astore%3AH8955001%3Astreet%3Amain%3A"
                            target="_blank"
                          >
                            <img
                              alt="OPPO"
                              data-src="//images.hktvmall.com/h8955001/h8955001_storelogo_210513114206.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31100000000" data-count={695}>
                    <a
                      className="link"
                      data-cat="AA31100000000"
                      data-maincat="AA31100000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/c/AA31100000000"
                    >
                      平板電腦 電子書閱讀器
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={1}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31100000000"
                          data-maincat="AA31100000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/c/AA31100000000"
                        >
                          全部 平板電腦 電子書閱讀器
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31100500001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/Apple-iPad/c/AA31100500001"
                              >
                                Apple iPad
                                <span>182</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31101000001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/Samsung-Galaxy-Tab/c/AA31101000001"
                              >
                                Samsung Galaxy Tab
                                <span>136</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31101500001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/Microsoft-Surface/c/AA31101500001"
                              >
                                Microsoft Surface
                                <span>55</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31102000001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/Huawei-Tablet/c/AA31102000001"
                              >
                                華為 平板電腦
                                <span>4</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31102500001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/Xiaomi-Tablet/c/AA31102500001"
                              >
                                小米 平板電腦
                                <span>20</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31104000001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/Lenovo-Tablet/c/AA31104000001"
                              >
                                Lenovo 平板電腦
                                <span>12</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31105000001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/Amazon-Tablet/c/AA31105000001"
                              >
                                Amazon 平板電腦
                                <span>21</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31106000001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/Nokia-Tablet/c/AA31106000001"
                              >
                                Nokia 平板電腦
                                <span>5</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31107500001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/Other-Tablet/c/AA31107500001"
                              >
                                其他平板電腦
                                <span>143</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31108000001"
                                data-maincat="AA31100000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Tablet-%26-E-Book-Reader/E-Book-Reader/c/AA31108000001"
                              >
                                電子書閱讀器
                                <span>142</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul></ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31100000000"
                            href="https://www.hktvmall.com/hktv/main/BOOX/s/H6800002?page=0&q=%3Alive-time-asc%3Acategory%3AAA31100000000%3Astore%3AH6800002%3Astreet%3Amain%3A"
                            target="_blank"
                          >
                            <img
                              alt="BOOX"
                              data-src="//images.hktvmall.com/h6800002/h6800002_storelogo_211210065106.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31100000000"
                            href="https://www.hktvmall.com/hktv/s/P0042001"
                            target="_blank"
                          >
                            <img
                              alt="Samsung"
                              data-src="//images.hktvmall.com/p0042001/p0042001_storelogo_210319041340.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31150000000" data-count={9632}>
                    <a
                      className="link"
                      data-cat="AA31150000000"
                      data-maincat="AA31150000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/c/AA31150000000"
                    >
                      耳機 耳筒
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={2}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31150000000"
                          data-maincat="AA31150000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/c/AA31150000000"
                        >
                          全部 耳機 耳筒
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31150500001"
                                data-maincat="AA31150000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/Bluetooth-Earphone/c/AA31150500001"
                              >
                                藍牙耳機
                                <span>5286</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31151000001"
                                data-maincat="AA31150000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/Wired-Earphone/c/AA31151000001"
                              >
                                有線耳機
                                <span>1840</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31151500001"
                                data-maincat="AA31150000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/Headphone/c/AA31151500001"
                              >
                                頭戴式耳機
                                <span>2390</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31152000001"
                                data-maincat="AA31150000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/Bone-Conduction-Headphone/c/AA31152000001"
                              >
                                骨傳導耳機
                                <span>492</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31152500001"
                                data-maincat="AA31150000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/Earphone-Case-Cover/c/AA31152500001"
                              >
                                耳機盒保護套
                                <span>648</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31153000001"
                                data-maincat="AA31150000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/Earphone-Hook-%26-Bug/c/AA31153000001"
                              >
                                防滑掛耳鈎 耳塞
                                <span>274</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31153500001"
                                data-maincat="AA31150000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/Earphone-Cable/c/AA31153500001"
                              >
                                耳機線
                                <span>169</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31154000001"
                                data-maincat="AA31150000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/Earphone-Amplifier/c/AA31154000001"
                              >
                                耳擴
                                <span>226</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31154500001"
                                data-maincat="AA31150000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Headphone-%26-Earphone/Earphone-Cable-Organizer/c/AA31154500001"
                              >
                                耳機收納器 支架
                                <span>96</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul></ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31150000000"
                            href="https://www.hktvmall.com/hktv/s/H8270001"
                            target="_blank"
                          >
                            <img
                              alt="Jabra"
                              data-src="//images.hktvmall.com/h8270001/h8270001_storelogo_200902044059.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31150000000"
                            href="https://www.hktvmall.com/hktv/s/H8206001"
                            target="_blank"
                          >
                            <img
                              alt="Bose"
                              data-src="//images.hktvmall.com/h8206001/h8206001_storelogo_200904123250.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31150000000"
                            href="/hktv/zh/s/H0762002"
                            target="_blank"
                          >
                            <img
                              alt="Shure"
                              data-src="//images.hktvmall.com/h0762002/h0762002_storelogo_191029110151.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31200000000" data-count={822}>
                    <a
                      className="link"
                      data-cat="AA31200000000"
                      data-maincat="AA31200000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/c/AA31200000000"
                    >
                      手提電腦
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={3}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31200000000"
                          data-maincat="AA31200000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/c/AA31200000000"
                        >
                          全部 手提電腦
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31200500001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Apple/c/AA31200500001"
                              >
                                Apple macbook
                                <span>73</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31201000001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Samsung-Laptop/c/AA31201000001"
                              >
                                Samsung 手提電腦
                                <span>17</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31201500001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Microsoft-Laptop/c/AA31201500001"
                              >
                                Microsoft 手提電腦
                                <span>28</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31202000001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/HP-Laptop/c/AA31202000001"
                              >
                                HP 手提電腦
                                <span>66</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31202500001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Lenovo-Laptop/c/AA31202500001"
                              >
                                Lenovo 手提電腦
                                <span>135</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31203000001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Fujitsu-Laptop/c/AA31203000001"
                              >
                                Fujitsu 手提電腦
                                <span>10</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31204500001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Dell-Laptop/c/AA31204500001"
                              >
                                Dell 手提電腦
                                <span>168</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31205500001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Asus-Laptop/c/AA31205500001"
                              >
                                Asus 手提電腦
                                <span>73</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31206000001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Toshiba-Laptop/c/AA31206000001"
                              >
                                Toshiba 手提電腦
                                <span>3</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31206500001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Acer-Laptop/c/AA31206500001"
                              >
                                Acer 手提電腦
                                <span>58</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31207000001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/MSI-Laptop/c/AA31207000001"
                              >
                                MSI 手提電腦
                                <span>48</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31207500001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Razor-Laptop/c/AA31207500001"
                              >
                                Razor 手提電腦
                                <span>34</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31208000001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/Other-Laptop/c/AA31208000001"
                              >
                                其他手提電腦
                                <span>198</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31208500001"
                                data-maincat="AA31200000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Laptop/GIGABYTE-Laptop/c/AA31208500001"
                              >
                                GIGABYTE 手提電腦
                                <span>19</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31200000000"
                            href="https://www.hktvmall.com/hktv/zh/main/MicrosoftAuthorizedStore/s/H9569001"
                            target="_blank"
                          >
                            <img
                              alt="microsoft"
                              data-src="//images.hktvmall.com/h9569001/h9569001_storelogo_220119051915.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31200000000"
                            href="https://www.hktvmall.com/hktv/zh/main/Acer-Flagship-Store---Computer-%26-Gadget/s/H9963001"
                            target="_blank"
                          >
                            <img
                              alt="Acer"
                              data-src="//images.hktvmall.com/h9963001/h9963001_storelogo_230428061321.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31200000000"
                            href="https://www.hktvmall.com/hktv/s/H6629002"
                            target="_blank"
                          >
                            <img
                              alt="Razer"
                              data-src="//images.hktvmall.com/h6629002/h6629002_storelogo_210518010409.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31200000000"
                            href="https://www.hktvmall.com/hktv/s/H9046002"
                            target="_blank"
                          >
                            <img
                              alt="MSI"
                              data-src="//images.hktvmall.com/h9046002/h9046002_storelogo_230116040014.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31200000000"
                            href="https://www.hktvmall.com/hktv/zh/main/Dell-%E5%AE%98%E6%96%B9%E6%97%97%E8%89%A6%E5%BA%97/s/H6934002"
                            target="_blank"
                          >
                            <img
                              alt="Dell"
                              data-src="//images.hktvmall.com/h6934002/h6934002_storelogo_230113103957.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31200000000"
                            href="https://www.hktvmall.com/hktv/zh/main/%E8%8F%AF%E7%A2%A9/s/H0661011"
                            target="_blank"
                          >
                            <img
                              alt="asus"
                              data-src="//images.hktvmall.com/h0661011/h0661011_storelogo_210615044549.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31250000000" data-count={33435}>
                    <a
                      className="link"
                      data-cat="AA31250000000"
                      data-maincat="AA31250000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/c/AA31250000000"
                    >
                      智能手錶及手機週邊
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={4}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31250000000"
                          data-maincat="AA31250000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/c/AA31250000000"
                        >
                          全部 智能手錶及手機週邊
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31250500000"
                                data-maincat="AA31250000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/Smart-Watch-%26-Accessories/c/AA31250500000"
                              >
                                智能手錶及週邊配件
                                <span>3350</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31251000001"
                                data-maincat="AA31250000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/Location-Tracking-Tag/c/AA31251000001"
                              >
                                智能定位標籤
                                <span>186</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31251500000"
                                data-maincat="AA31250000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/Charger-%26-Adaptor/c/AA31251500000"
                              >
                                充電器 轉換器
                                <span>10665</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31252000000"
                                data-maincat="AA31250000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/Case-%26-Screen-Protector-%26-Stylus/c/AA31252000000"
                              >
                                外殼 保護貼 觸控筆
                                <span>13424</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31252500000"
                                data-maincat="AA31250000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/Mobile-Lens-%26-Stabilizer/c/AA31252500000"
                              >
                                手機鏡頭 穩定器
                                <span>3108</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31253000000"
                                data-maincat="AA31250000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/Prepaid-SIM-Card/c/AA31253000000"
                              >
                                儲值卡
                                <span>1373</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31253500000"
                                data-maincat="AA31250000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/Portable-Wifi/c/AA31253500000"
                              >
                                WiFi蛋
                                <span>41</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31254000000"
                                data-maincat="AA31250000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/Memory-Card-%26-USB/c/AA31254000000"
                              >
                                記憶卡 USB
                                <span>1212</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31254500000"
                                data-maincat="AA31250000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Watch-%26-Phone-Accessories/Translator-%26-Digital-Dictionary/c/AA31254500000"
                              >
                                翻譯機 電子辭典
                                <span>156</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul></ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo adLabel"
                            data-//mabsrefid="mabs_Ad_GadgetsAndElectronics_CategoryHotBrands_NA_AA31250000000_H6846002_20230206_7_194077"
                            data-maincat="AA31250000000"
                            href="https://www.hktvmall.com/s/H6846002"
                            target="_blank"
                          >
                            <img
                              alt="Ad_GadgetsAndElectronics_CategoryHotBrands_NA_AA31250000000_H6846002_20230206_7_194077"
                              data-src="//images.hktvmall.com/h6846002/h6846002_storelogo_221130014553.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31250000000"
                            href="https://www.hktvmall.com/hktv/s/H0183003"
                            target="_blank"
                          >
                            <img
                              alt="Amazfit"
                              data-src="//images.hktvmall.com/h0183003/h0183003_storelogo_211012105430.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31250000000"
                            href="https://www.hktvmall.com/hktv/s/H0775021"
                            target="_blank"
                          >
                            <img
                              alt="Fitbit"
                              data-src="//images.hktvmall.com/h0775021/h0775021_storelogo_201027053933.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31250000000"
                            href="https://www.hktvmall.com/hktv/s/P0042001"
                            target="_blank"
                          >
                            <img
                              alt="Samsung"
                              data-src="//images.hktvmall.com/p0042001/p0042001_storelogo_210319041340.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31250000000"
                            href="https://www.hktvmall.com/hktv/s/S2008001"
                            target="_blank"
                          >
                            <img
                              alt="Momax"
                              data-src="//images.hktvmall.com/s2008001/s2008001_storelogo_210205035420.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31250000000"
                            href="/hktv/zh/s/H7518002"
                            target="_blank"
                          >
                            <img
                              alt="Verbatim"
                              data-src="//images.hktvmall.com/h7518002/h7518002_storelogo_200707110149.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31300000000" data-count={17862}>
                    <a
                      className="link"
                      data-cat="AA31300000000"
                      data-maincat="AA31300000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/c/AA31300000000"
                    >
                      電玩 電競產品
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={5}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31300000000"
                          data-maincat="AA31300000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/c/AA31300000000"
                        >
                          全部 電玩 電競產品
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31300500000"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/Nintendo-Switch/c/AA31300500000"
                              >
                                任天堂 Switch
                                <span>4454</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31301000000"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/PlayStation/c/AA31301000000"
                              >
                                PlayStation
                                <span>1923</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31301500000"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/Xbox/c/AA31301500000"
                              >
                                Xbox
                                <span>399</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31301700001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/Steam-Deck/c/AA31301700001"
                              >
                                Steam Deck
                                <span>21</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31302000001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/Other-Gaming/c/AA31302000001"
                              >
                                其他電子遊戲機
                                <span>577</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31302500001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/VR-Device/c/AA31302500001"
                              >
                                VR虛擬實景裝置
                                <span>504</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31302700001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/Smart-Glasses/c/AA31302700001"
                              >
                                智能眼鏡
                                <span>11</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31303000001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Laptop/c/AA31303000001"
                              >
                                電競手提電腦
                                <span>180</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31303500001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Desktop/c/AA31303500001"
                              >
                                電競桌上電腦
                                <span>84</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31304000001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Monitor/c/AA31304000001"
                              >
                                電競顯示器 支架
                                <span>577</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31304500001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Keyboard/c/AA31304500001"
                              >
                                電競鍵盤
                                <span>850</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31305000001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Mouse/c/AA31305000001"
                              >
                                電競滑鼠
                                <span>1124</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31305100001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Mouse-Pad/c/AA31305100001"
                              >
                                電競滑鼠墊
                                <span>96</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31305500001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Earphone-%26-Microphone/c/AA31305500001"
                              >
                                電競耳機 麥克風 支架
                                <span>3290</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31306000001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Controller/c/AA31306000001"
                              >
                                電競手制
                                <span>342</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31306500001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Desktop/c/AA31306500001"
                              >
                                電競枱
                                <span>1455</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31307000001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/e-Sports-Chair/c/AA31307000001"
                              >
                                電競椅
                                <span>2630</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31307500001"
                                data-maincat="AA31300000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gaming-%26-E-Sports/Repair-Tools-For-Gaming-Devices/c/AA31307500001"
                              >
                                電子遊戲機維修工具
                                <span>8</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31300000000"
                            href="https://www.hktvmall.com/hktv/s/H5995001"
                            target="_blank"
                          >
                            <img
                              alt="Zenox"
                              data-src="//images.hktvmall.com/h5995001/h5995001_storelogo_180730052026.png"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31300000000"
                            href="https://www.hktvmall.com/hktv/s/H6629002"
                            target="_blank"
                          >
                            <img
                              alt="Razer"
                              data-src="//images.hktvmall.com/h6629002/h6629002_storelogo_210518010409.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31300000000"
                            href="https://www.hktvmall.com/hktv/s/H9046002"
                            target="_blank"
                          >
                            <img
                              alt="MSI"
                              data-src="//images.hktvmall.com/h9046002/h9046002_storelogo_230116040014.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31300000000"
                            href="https://www.hktvmall.com/hktv/s/H8024001"
                            target="_blank"
                          >
                            <img
                              alt="Logitech"
                              data-src="//images.hktvmall.com/h8024001/h8024001_storelogo_200812114646.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31300000000"
                            href="https://www.hktvmall.com/hktv/s/H0661011"
                            target="_blank"
                          >
                            <img
                              alt="ROG"
                              data-src="//images.hktvmall.com/h0661011/h0661011_storelogo_210615044549.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31300000000"
                            href="/hktv/zh/s/H6404002"
                            target="_blank"
                          >
                            <img
                              alt="Cougar"
                              data-src="//images.hktvmall.com/h6404002/h6404002_storelogo_210526035113.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31350000000" data-count={65}>
                    <a
                      className="link"
                      data-cat="AA31350000000"
                      data-maincat="AA31350000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gift-Card-%26-e-voucher/c/AA31350000000"
                    >
                      禮品卡 點數卡
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={6}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31350000000"
                          data-maincat="AA31350000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gift-Card-%26-e-voucher/c/AA31350000000"
                        >
                          全部 禮品卡 點數卡
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31350500001"
                                data-maincat="AA31350000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gift-Card-%26-e-voucher/Apple-iTunes-Gift-Card/c/AA31350500001"
                              >
                                Apple iTunes 禮品卡
                                <span>2</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31351000001"
                                data-maincat="AA31350000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gift-Card-%26-e-voucher/Google-Play-Gift-Card/c/AA31351000001"
                              >
                                Google Play 禮品卡
                                <span>5</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31351500000"
                                data-maincat="AA31350000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gift-Card-%26-e-voucher/Music-Platform-Gift-Card/c/AA31351500000"
                              >
                                音樂平台禮物卡
                                <span>22</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31352000000"
                                data-maincat="AA31350000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gift-Card-%26-e-voucher/Streaming-Gift-Card/c/AA31352000000"
                              >
                                影視平台禮品卡
                                <span>3</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31352500000"
                                data-maincat="AA31350000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gift-Card-%26-e-voucher/Gaming-Gift-Card/c/AA31352500000"
                              >
                                遊戲禮品卡
                                <span>14</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31353500001"
                                data-maincat="AA31350000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Gift-Card-%26-e-voucher/Other-Gift-Card-and-Point-Card/c/AA31353500001"
                              >
                                其他禮品卡 點數卡
                                <span>23</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul></ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31350000000"
                            href="/hktv/zh/s/H6531001"
                            target="_blank"
                          >
                            <img
                              alt="hmvod"
                              data-src="//images.hktvmall.com/h6531001/h6531001_storelogo_210824012248.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31400000000" data-count={32622}>
                    <a
                      className="link"
                      data-cat="AA31400000000"
                      data-maincat="AA31400000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/c/AA31400000000"
                    >
                      桌上電腦及電腦週邊設備
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={7}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31400000000"
                          data-maincat="AA31400000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/c/AA31400000000"
                        >
                          全部 桌上電腦及電腦週邊設備
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31400500000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Desktop/c/AA31400500000"
                              >
                                桌上電腦
                                <span>328</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31401000000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Printer-%26-Scanner-%26-Ink-Cartridge/c/AA31401000000"
                              >
                                打印 掃瞄器 墨盒
                                <span>8597</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31401500000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Desktop-Monitor/c/AA31401500000"
                              >
                                電腦螢幕
                                <span>1050</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31402000000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Router-%26-IP-Cam/c/AA31402000000"
                              >
                                路由器 IP鏡頭
                                <span>1894</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31402500000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/USB-%26-SSD-%26-Hard-Disk/c/AA31402500000"
                              >
                                USB SSD 硬碟
                                <span>3031</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31403000000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Keyboard-%26-Mouse-%26-Speaker/c/AA31403000000"
                              >
                                鍵盤 滑鼠 喇叭
                                <span>5429</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31403500000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Charging-Cable-%26-Stand/c/AA31403500000"
                              >
                                電腦充電線 支架
                                <span>1995</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31404000000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Stylus-%26-Drawing-%26-Writing-Pad/c/AA31404000000"
                              >
                                觸控筆 繪圖 手寫板
                                <span>698</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31404500000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Anti-Virus-%26-Office-Software/c/AA31404500000"
                              >
                                防毒及Office 軟件
                                <span>107</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31405000000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Computer-Bag-%26-Screen-Protector/c/AA31405000000"
                              >
                                電腦袋 保護貼
                                <span>3535</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31405500000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Connecting-Cable-%26-Unit-Convertor/c/AA31405500000"
                              >
                                連接線 轉換器
                                <span>4596</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31406000000"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/PC-Component/c/AA31406000000"
                              >
                                砌機組件
                                <span>2382</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31406500001"
                                data-maincat="AA31400000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Desktop-Computer-%26-Computer-Accessories/Multiport-Adapter-Hub/c/AA31406500001"
                              >
                                擴展器
                                <span>294</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31400000000"
                            href="https://www.hktvmall.com/hktv/s/H5705001"
                            target="_blank"
                          >
                            <img
                              alt="Epson"
                              data-src="//images.hktvmall.com/h5705001/h5705001_storelogo_170905095927.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31400000000"
                            href="https://www.hktvmall.com/hktv/s/H0610015"
                            target="_blank"
                          >
                            <img
                              alt="SanDisk"
                              data-src="//images.hktvmall.com/h0610015/h0610015_storelogo_200226112612.jpeg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31400000000"
                            href="/hktv/zh/s/H0610014"
                            target="_blank"
                          >
                            <img
                              alt="WD"
                              data-src="//images.hktvmall.com/h0610014/h0610014_storelogo_200226010408.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31400000000"
                            href="/hktv/zh/s/H7076001"
                            target="_blank"
                          >
                            <img
                              alt="KIOXIA"
                              data-src="//images.hktvmall.com/h7076001/h7076001_storelogo_200817093009.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31400000000"
                            href="/hktv/zh/s/H5156007"
                            target="_blank"
                          >
                            <img
                              alt="Linksys"
                              data-src="//images.hktvmall.com/h5156007/h5156007_storelogo_220524103234.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31450000000" data-count={5548}>
                    <a
                      className="link"
                      data-cat="AA31450000000"
                      data-maincat="AA31450000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/AV-%26-Entertainment/c/AA31450000000"
                    >
                      電視 投影機 機頂盒
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={8}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31450000000"
                          data-maincat="AA31450000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/AV-%26-Entertainment/c/AA31450000000"
                        >
                          全部 電視 投影機 機頂盒
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31450500000"
                                data-maincat="AA31450000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/AV-%26-Entertainment/Television/c/AA31450500000"
                              >
                                電視
                                <span>1184</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31451000000"
                                data-maincat="AA31450000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/AV-%26-Entertainment/Projector/c/AA31451000000"
                              >
                                投影機
                                <span>2363</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31451500000"
                                data-maincat="AA31450000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/AV-%26-Entertainment/Media-Player-%26-Set-top-Box/c/AA31451500000"
                              >
                                播放器 盒子
                                <span>613</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31452000000"
                                data-maincat="AA31450000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/AV-%26-Entertainment/Audio-Cable-%26-Accessories/c/AA31452000000"
                              >
                                影音線材 配件
                                <span>1430</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul></ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31450000000"
                            href="https://www.hktvmall.com/hktv/main/Samsung---%E5%BD%B1%E9%9F%B3%E5%A8%9B%E6%A8%82/s/H0610018"
                            target="_blank"
                          >
                            <img
                              alt="Samsung"
                              data-src="//images.hktvmall.com/h0610018/h0610018_storelogo_210323093144.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31450000000"
                            href="https://www.hktvmall.com/hktv/main/LG/s/H7755001?page=0&q=%3Alive-time-asc%3Acategory%3AAA31450500000%3Astore%3AH7755001%3Astreet%3Amain%3A"
                            target="_blank"
                          >
                            <img
                              alt="LG"
                              data-src="//images.hktvmall.com/h7755001/h7755001_storelogo_201021023251.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31450000000"
                            href="https://www.hktvmall.com/hktv/s/H9074001"
                            target="_blank"
                          >
                            <img
                              alt="TCL"
                              data-src="//images.hktvmall.com/h9074001/h9074001_storelogo_230714071404.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31500000000" data-count={7042}>
                    <a
                      className="link"
                      data-cat="AA31500000000"
                      data-maincat="AA31500000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/HiFi-World/c/AA31500000000"
                    >
                      音響世界
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={9}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31500000000"
                          data-maincat="AA31500000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/HiFi-World/c/AA31500000000"
                        >
                          全部 音響世界
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31500500000"
                                data-maincat="AA31500000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/HiFi-World/Audio-%26-Speaker/c/AA31500500000"
                              >
                                音響喇叭
                                <span>5714</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31501000000"
                                data-maincat="AA31500000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/HiFi-World/Audio-player-%26-Radio/c/AA31501000000"
                              >
                                音樂播放器 收音機
                                <span>745</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31501500001"
                                data-maincat="AA31500000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/HiFi-World/Karaoke-Home-System/c/AA31501500001"
                              >
                                卡啦OK組合
                                <span>240</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31502000000"
                                data-maincat="AA31500000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/HiFi-World/CD-%26-DVD-%26-Vinyl-Record/c/AA31502000000"
                              >
                                CD DVD 黑膠唱片
                                <span>383</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul></ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31500000000"
                            href="/hktv/zh/s/H8206001"
                            target="_blank"
                          >
                            <img
                              alt="Bose"
                              data-src="//images.hktvmall.com/h8206001/h8206001_storelogo_200904123250.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31500000000"
                            href="/hktv/zh/s/H8270001"
                            target="_blank"
                          >
                            <img
                              alt="Jabra"
                              data-src="//images.hktvmall.com/h8270001/h8270001_storelogo_200902044059.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31550000000" data-count={13519}>
                    <a
                      className="link"
                      data-cat="AA31550000000"
                      data-maincat="AA31550000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/c/AA31550000000"
                    >
                      攝影器材
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={10}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31550000000"
                          data-maincat="AA31550000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/c/AA31550000000"
                        >
                          全部 攝影器材
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31550500000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Camera-%26-Lens/c/AA31550500000"
                              >
                                數碼相機 鏡頭
                                <span>1427</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31551000000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Film-Camera-%26-Lens-%26-Film/c/AA31551000000"
                              >
                                菲林相機 鏡頭 菲林
                                <span>431</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31551500000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Instant-Camera-%26-Photo-Paper/c/AA31551500000"
                              >
                                即影即有相機 相紙
                                <span>395</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31552000000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Drone-%26-Action-Camera/c/AA31552000000"
                              >
                                航拍機 運動攝影機
                                <span>1074</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31552500001"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Children-Camera/c/AA31552500001"
                              >
                                兒童相機
                                <span>361</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31553000000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Video-Recorder-%26-Recording-Equipment/c/AA31553000000"
                              >
                                錄影機 錄音設備
                                <span>1891</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31553500000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Filter-%26-Camera-Battery/c/AA31553500000"
                              >
                                濾鏡 相機電池
                                <span>1071</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31554000000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Tripod-%26-Stabilizer/c/AA31554000000"
                              >
                                腳架 穩定器
                                <span>1915</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31554500000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Camera-Bag-%26-Strap-%26-Protector/c/AA31554500000"
                              >
                                相機袋 相機帶 屏幕保護
                                <span>1162</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31555000000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Flash-%26-Reflector-%26-Color-Filter/c/AA31555000000"
                              >
                                閃光燈 反光板 濾色片
                                <span>661</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31555500000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Studio-Equipment/c/AA31555500000"
                              >
                                影樓設備
                                <span>2270</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31556000000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Camera-Cleaning-Tool/c/AA31556000000"
                              >
                                相機清潔用品
                                <span>317</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31556500000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Dehumidifier-Cabinet-%26-Humidity-Meter/c/AA31556500000"
                              >
                                防潮箱 濕度計
                                <span>301</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31557000000"
                                data-maincat="AA31550000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Camera-%26-Accessories/Memory-Card/c/AA31557000000"
                              >
                                記憶卡
                                <span>624</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31550000000"
                            href="https://www.hktvmall.com/hktv/s/H6605003"
                            target="_blank"
                          >
                            <img
                              alt="olympus"
                              data-src="//images.hktvmall.com/h6605003/h6605003_storelogo_221105103520.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31600000000" data-count={3095}>
                    <a
                      className="link"
                      data-cat="AA31600000000"
                      data-maincat="AA31600000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/c/AA31600000000"
                    >
                      智能家居設備
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={11}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31600000000"
                          data-maincat="AA31600000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/c/AA31600000000"
                        >
                          全部 智能家居設備
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31600500001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Google-Home-%26-Smart-Home-Assistant/c/AA31600500001"
                              >
                                Google Home 及智能助理
                                <span>267</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31601000001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Electric-Door-Lock/c/AA31601000001"
                              >
                                電子門鎖
                                <span>857</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31601500001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/IP-Camera/c/AA31601500001"
                              >
                                IP鏡頭
                                <span>590</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31602000001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Smart-Light-Bulb/c/AA31602000001"
                              >
                                智能燈泡
                                <span>580</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31602500001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Smart-Extension-Cord/c/AA31602500001"
                              >
                                智能拖板
                                <span>207</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31603000001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Smart-Door-Bell/c/AA31603000001"
                              >
                                智能門鈴
                                <span>78</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31603500001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Smart-Switch-%26-Remote/c/AA31603500001"
                              >
                                智能開關 遙控
                                <span>319</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31604000001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Smart-Toilet/c/AA31604000001"
                              >
                                智能馬桶 廁板
                                <span>27</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31604500001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Security-Device/c/AA31604500001"
                              >
                                防盜 追蹤 裝置
                                <span>118</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31605000001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Smoke-Detector/c/AA31605000001"
                              >
                                煙霧感應器
                                <span>31</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31605500001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Digital-Thermo-hygrometer/c/AA31605500001"
                              >
                                智能溫濕度計
                                <span>67</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31606000001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Smart-Blinds/c/AA31606000001"
                              >
                                智能窗簾
                                <span>20</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31606500001"
                                data-maincat="AA31600000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Smart-Home/Safety-Alarm/c/AA31606500001"
                              >
                                平安鐘
                                <span>35</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31600000000"
                            href="https://www.hktvmall.com/hktv/main/LG/s/H7755001?page=0&q=%3Alive-time-asc%3Acategory%3AAA31000000000%3Astore%3AH7755001%3Astreet%3Amain%3A"
                            target="_blank"
                          >
                            <img
                              alt="LG"
                              data-src="//images.hktvmall.com/h7755001/h7755001_storelogo_201021023251.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31600000000"
                            href="https://www.hktvmall.com/hktv/main/Samsung---%E7%94%9F%E6%B4%BB%E5%AE%B6%E9%9B%BB/s/H0610019"
                            target="_blank"
                          >
                            <img
                              alt="Samsung"
                              data-src="//images.hktvmall.com/h0610019/h0610019_storelogo_210323093231.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31600000000"
                            href="https://www.hktvmall.com/hktv/zh/main/TP-Link%E5%AE%98%E6%96%B9%E6%97%97%E8%89%A6%E5%BA%97/s/H0610023"
                            target="_blank"
                          >
                            <img
                              alt="TP-link"
                              data-src="//images.hktvmall.com/h0610023/h0610023_storelogo_220903112346.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li data-category-code="AA31650000000" data-count={31537}>
                    <a
                      className="link"
                      data-cat="AA31650000000"
                      data-maincat="AA31650000000"
                      href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/c/AA31650000000"
                    >
                      汽車用品
                    </a>
                    <div
                      className="submenu gadgetsandelectronics"
                      data-submenu-index={12}
                    >
                      <div className="title">
                        <a
                          className="link"
                          data-cat="AA31650000000"
                          data-maincat="AA31650000000"
                          href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/c/AA31650000000"
                        >
                          全部 汽車用品
                        </a>
                      </div>
                      <div className="clearfix">
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31650500001"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Driving-Recorder/c/AA31650500001"
                              >
                                行車記錄器
                                <span>779</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31651000000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Vehicle-Cleaning-%26-Care/c/AA31651000000"
                              >
                                車箱 玻璃 輪胎清潔
                                <span>2285</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31651500000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Car-Vacuum-Cleaner-%26-Waxing-Machine/c/AA31651500000"
                              >
                                車用吸塵 打蠟機
                                <span>514</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31652000000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Sponge-%26-Brush/c/AA31652000000"
                              >
                                海綿 鈴刷 刮水刷
                                <span>641</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31652500000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Windshield-Wiper-%26-Car-Mirror/c/AA31652500000"
                              >
                                水撥 盲點鏡 警示燈
                                <span>3172</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31653000000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Car-Mat-%26-Anti-Scratch-Sticker/c/AA31653000000"
                              >
                                地膠 防花貼
                                <span>550</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31653500000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Baby-Car-Seat-%26-Milk-Warmer/c/AA31653500000"
                              >
                                兒童安全座椅 暖奶器
                                <span>117</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31654000000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Vehicle-Phone-Holder-%26-Cup-Holder/c/AA31654000000"
                              >
                                手機架 充電 杯架
                                <span>3013</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31654500000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Vehicle-Air-Purifier-%26-Aroma/c/AA31654500000"
                              >
                                車用空氣清新 香薰
                                <span>3822</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31655000000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Neck-Cushion-%26-Seat-Cover/c/AA31655000000"
                              >
                                頸枕 椅 安全帶套
                                <span>6178</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31655500000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Curtain-%26-Sun-Shade/c/AA31655500000"
                              >
                                窗簾 太陽擋
                                <span>596</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31656000000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Vehicle-Storage/c/AA31656000000"
                              >
                                尾箱袋 車內收納
                                <span>5885</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="submenu-nav">
                          <ul>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31656500000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Decoration-Light-%26-Sticker/c/AA31656500000"
                              >
                                裝飾燈 貼紙
                                <span>1979</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31657000001"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Emergency-Power-Supply/c/AA31657000001"
                              >
                                車用應急啟動電源
                                <span>162</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31657500000"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Engine-Lubricant-%26-Repair-Tool/c/AA31657500000"
                              >
                                機油 潤滑油 維修工具
                                <span>2871</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31658000001"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Wheels/c/AA31658000001"
                              >
                                車胎
                                <span>46</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31658200001"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Tire-Pump/c/AA31658200001"
                              >
                                輪胎充氣泵
                                <span>129</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31658500001"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Portable-Auto-Charger/c/AA31658500001"
                              >
                                汽車流動充電器
                                <span>91</span>
                              </a>
                            </li>
                            <li data-category-code="">
                              <a
                                className="link"
                                data-cat="AA31659000001"
                                data-maincat="AA31650000000"
                                href="/hktv/zh/main/Gadgets-%26-Electronics/Gadgets-%26-Electronics/Auto-Supplies/Safety-Hammer/c/AA31659000001"
                              >
                                安全錘
                                <span>38</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="brand-logo-wrapper">
                        <div className="brand-title">熱門品牌</div>
                        <div className="clearfix">
                          <a
                            className="logo"
                            data-//mabsrefid="mabs_false"
                            data-maincat="AA31650000000"
                            href="/hktv/zh/s/H7518002"
                            target="_blank"
                          >
                            <img
                              alt="Verbatim"
                              data-src="//images.hktvmall.com/h7518002/h7518002_storelogo_200707110149.jpg"
                              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="search-box" id="search-box">
              <svg
                className="ic_dummy_suggestionSearchBox"
                height="32px"
                id="ic_dummy_suggestionSearchBox"
                version="1.1"
                viewBox="0 0 443 32"
                width="443px"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-23.000000, -473.000000)">
                    <g transform="translate(23.000000, 473.000000)">
                      <rect
                        fill="#FFFFFF"
                        height={32}
                        width={443}
                        x={0}
                        y={0}
                      ></rect>
                      <path
                        d="M426.001082,9.16784422 C423.359779,9.16784422 421.210632,11.2756618 421.210632,13.8661709 C421.210632,16.4569554 423.359779,18.5647729 426.001082,18.5647729 C428.642386,18.5647729 430.791533,16.4569554 430.791533,13.8661709 C430.791533,11.2756618 428.642386,9.16784422 426.001082,9.16784422 M431.508917,18.100429 C432.443942,16.933064 433.002165,15.4623337 433.002165,13.8661709 C433.002165,10.0800845 429.861406,7 426.001082,7 C422.140759,7 419,10.0800845 419,13.8661709 C419,17.6522573 422.140759,20.7326171 426.001082,20.7326171 C427.628342,20.7326171 429.127741,20.1852639 430.317925,19.2684247 L435.562275,24.4119221 C435.726795,24.5732782 435.942131,24.6539563 436.157748,24.6539563 C436.373364,24.6539563 436.5887,24.5732782 436.75322,24.4119221 C437.08226,24.0894852 437.08226,23.5663169 436.75322,23.2438801 L431.508917,18.100429 Z"
                        fill="#9B9B9B"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="account">
              <a className="btn-login" data-tag="login" href="/hktv/zh/login">
                登入
              </a>
              <a
                className="btn-register"
                data-tag="register"
                href="javascript: void(0)"
              //onclick="if(typeof registerColorbox === 'function')registerColorbox();"
              >
                登記
              </a>
              <div>
                <a className="btn-msgCenter">訊息</a>
                <ul className="mymessage list" id="messagePopup">
                  <li className="msgBoxHeader">
                    <span className="title">訊息</span>
                  </li>
                  <li className="messageWrapper">
                    <div
                      className="noMessageOverlay"
                      style={{ display: "block" }}
                    >
                      <div className="icNomsgSmall"></div>
                      <div className="nomsg">沒有訊息</div>
                      <a
                        className="greenButton"
                        href="/hktv/zh/login"
                      //onclick="analytics.trackEventV2('header', 'message_center_login');"
                      >
                        登入
                      </a>
                    </div>
                    <div className="msgContainer"></div>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="btn-mylist"
                  data-tag="mylist"
                  href="/hktv/zh/mylist"
                >
                  我的清單
                </a>
              </div>
              <a
                className="btn-cart"
                data-restricted="false"
                data-tag="shopping_cart"
                href="/hktv/zh/cart/checkout/select-flow?flow=express&pci="
              //onclick="ACC.common.buttonToCheckoutExpress();applyCheckoutRestrictions(event);"
              >
                購物車
                <span className="cart-number-label">0</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom wrapper">
          <div className="container">
            <div className="keywords">
              <span>熱門搜尋:</span>
              (贊助)
              <a
                className="hot-keyword-content"
                data-algolia-enabled="true"
                data-current-class="gadgetsandelectronics"
                data-index={0}
                data-mabs-ref-id="Ad_GadgetsAndElectronics_WebHotKeywords_NA_NA_S2008001_20231204_7_246591"
                href="javascript: void(0);"
              >
                momax旗艦店
              </a>
              <a
                className="hot-keyword-content"
                data-algolia-enabled="true"
                data-current-class="gadgetsandelectronics"
                data-index={1}
                data-mabs-ref-id=""
                href="javascript: void(0);"
              >
                iPhone15
              </a>
              <a
                className="hot-keyword-content"
                data-algolia-enabled="true"
                data-current-class="gadgetsandelectronics"
                data-index={2}
                data-mabs-ref-id=""
                href="javascript: void(0);"
              >
                Switch
              </a>
              <a
                className="hot-keyword-content"
                data-algolia-enabled="true"
                data-current-class="gadgetsandelectronics"
                data-index={3}
                data-mabs-ref-id=""
                href="javascript: void(0);"
              >
                SONY
              </a>
              <a
                className="hot-keyword-content"
                data-algolia-enabled="true"
                data-current-class="gadgetsandelectronics"
                data-index={4}
                data-mabs-ref-id=""
                href="javascript: void(0);"
              >
                Soundbar
              </a>
              <a
                className="hot-keyword-content"
                data-algolia-enabled="true"
                data-current-class="gadgetsandelectronics"
                data-index={5}
                data-mabs-ref-id=""
                href="javascript: void(0);"
              >
                Tab S9
              </a>
            </div>
            <div className="promoMsg">
              <div className="promo-message">
                <a href="https://www.hktvmall.com/hktv/main/search?page=0&q=%3Alive-time-asc%3Acategory%3ABB03000041411%3AcategoryHotPickOrder%3ABB03000041411%3Azone%3Ahomenfamily%3Astreet%3Amain%3A">
                  超過80,000件電子產品!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="countdownTimerWrapper"></div>
        <div id="navScrollingBarWrapper"></div>
      </div>
      <div id="mainWrapper">
        <div className="rotating-image-slider">
          <div className="image-wrapper" style={{ backgroundColor: "#ffffff" }}>
            <a
              className=""
              data-position={1}
              href="https://www.hktvmall.com/hktv/search?q=::category:BB10000032701:categoryHotPickOrder:BB10000032701:street:main"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="2023xmas_round1_gifts_him_mall_slider_a_1"
                src="//images.hktvmall.com/image_slider/bannerzh_231130040831.jpg"
                title="2023xmas_round1_gifts_him_mall_slider_a_1"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#ffffff" }}>
            <a
              className=""
              data-position={2}
              href="https://www.hktvmall.com/hktv/zh/my-account/voucher-campaign"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="2023vouchercampaign_geheric3k_slider_20231106"
                src="//images.hktvmall.com/image_slider/bannerzh_231106074059.jpg"
                title="2023vouchercampaign_geheric3k_slider_20231106"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#ee4136" }}>
            <a
              className=""
              data-position={3}
              href="https://www.hktvmall.com/hktv/search?q=::category:BB02000025771:categoryHotPickOrder:BB02000025771:street:main"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="jetsosale_20231202_v2_mall_slider_a"
                src="//images.hktvmall.com/image_slider/bannerzh_231201044918.jpg"
                title="jetsosale_20231202_v2_mall_slider_a"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#ffffff" }}>
            <a
              className=""
              data-position={4}
              href="https://www.hktvmall.com/hktv/zh/search?q=::category:BB19000076141:categoryHotPickOrder:BB19000076141:street:main"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="2023vouchercampaign_samsung_gd_slider_20231102"
                src="//images.hktvmall.com/image_slider/bannerzh_231101111337.jpg"
                title="2023vouchercampaign_samsung_gd_slider_20231102"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#cdf2ff" }}>
            <a
              className=""
              data-position={5}
              href="https://cloud.marketing.hktvmall.com/2023retailcoupon?openinapp=true&autoTriggerApp=true&fastrender=true&backstack=true"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="2023vouchercampaign_retailcoupon_slider"
                src="//images.hktvmall.com/image_slider/bannerzh_231129045222.jpg"
                title="2023vouchercampaign_retailcoupon_slider"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#ffffff" }}>
            <a
              className=""
              data-position={6}
              href="https://cloud.marketing.hktvmall.com/payme_2023Sep/?openinapp=true&autoTriggerApp=true&fastrender=true&backstack=true"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="payme_2023Sep_sliderA"
                src="//images.hktvmall.com/image_slider/bannerzh_230907025912.jpg"
                title="payme_2023Sep_sliderA"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#ffffff" }}>
            <a
              className=""
              data-position={7}
              href="https://www.hktvmall.com/hktv/zh/search?q=::category:BB19000072661:categoryHotPickOrder:BB19000072661:street:main"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="本週Top 100!"
                src="//images.hktvmall.com/image_slider/bannerzh_220712063428.jpg"
                title="本週Top 100!"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#ffffff" }}>
            <a
              className=""
              data-position={8}
              href="https://www.hktvmall.com/hktv/zh/main/%E5%B0%8B%E5%AF%B6/s/H9070001?page=0&q=%3Arelevance%3Abrand%3AHyperDrive%3Astreet%3Amain%3Astore%3AH9070001%3A"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="storetoexplore_gd1_gd_slider_a"
                src="//images.hktvmall.com/image_slider/bannerzh_231204113738.jpeg"
                title="storetoexplore_gd1_gd_slider_a"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#ebf0f3" }}>
            <a
              className=""
              data-position={9}
              href="https://www.hktvmall.com/hktv/zh/main/OSIM/s/H0859001"
              //mabsref="Ad_GadgetsAndElectronics_SliderA_NA_NA_H0859001_20231204_7_247365"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="ForHim_ForHer"
                src="//images.hktvmall.com/image_slider/bannerzh_231128114211.jpg"
                title="ForHim_ForHer"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#bfa0ca" }}>
            <a
              className=""
              data-position={10}
              href="https://www.hktvmall.com/hktv/zh/main/p/H8024001_S_920-012281"
              //mabsref="Ad_GadgetsAndElectronics_SliderA_NA_NA_H8024001_20231204_7_235080"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="Logi_Xmas"
                src="//images.hktvmall.com/image_slider/bannerzh_231130061510.jpg"
                title="Logi_Xmas"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#c6d1c1" }}>
            <a
              className=""
              data-position={11}
              href="https://www.hktvmall.com/hktv/zh/main/s/H8024001"
              //mabsref="Ad_GadgetsAndElectronics_SliderA_NA_NA_H8024001_20231204_7_236469"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="Logi_Xmas"
                src="//images.hktvmall.com/image_slider/bannerzh_231130061646.jpg"
                title="Logi_Xmas"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#84b99f" }}>
            <a
              className=""
              data-position={12}
              href="https://www.hktvmall.com/hktv/zh/main/Samsung/s/P0042001"
              //mabsref="Ad_GadgetsAndElectronics_SliderA_NA_NA_P0042001_20231204_7_242538"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="TBC"
                src="//images.hktvmall.com/image_slider/bannerzh_231130061825.jpg"
                title="TBC"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#d9d9d9" }}>
            <a
              className=""
              data-position={13}
              href="https://www.hktvmall.com/c/BB03000052061"
              //mabsref="Ad_GadgetsAndElectronics_SliderA_NA_NA_H0762004_20231204_3_243279"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="winter sale"
                src="//images.hktvmall.com/image_slider/bannerzh_231204104000.jpg"
                title="winter sale"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#000000" }}>
            <a
              className=""
              data-position={14}
              href="https://www.hktvmall.com/hktv/main/Dyson/s/H7183001"
              //mabsref="Ad_GadgetsAndElectronics_SliderA_NA_NA_H7183001_20231204_3_240279"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="Dyson"
                src="//images.hktvmall.com/image_slider/bannerzh_231201032613.jpg"
                title="Dyson"
              />
            </a>
          </div>
          <div className="image-wrapper" style={{ backgroundColor: "#ffc301" }}>
            <a
              className=""
              data-position={15}
              href="https://blog.everuts.com/zh_HK/代購慳上加慳-everuts11月雙重賞-1000運費回贈-200新客現金券/?utm_source=hktvmall-stock&utm_medium=slidera&utm_campaign=cashcoupon-202312"
              //onclick=""
              style={{ cursor: "pointer" }}
              tabIndex={-1}
            >
              <img
                alt="hktvmall_everuts_slidera_cashcoupon"
                src="//images.hktvmall.com/image_slider/bannerzh_231201055450.jpg"
                title="hktvmall_everuts_slidera_cashcoupon"
              />
            </a>
          </div>
          <div className="width-1188 height-425">
            <div className="image-nav-container">
              <span className="nav-btn" data-index={0}>
                1
              </span>
              <span className="nav-btn" data-index={1}>
                2
              </span>
              <span className="nav-btn" data-index={2}>
                3
              </span>
              <span className="nav-btn" data-index={3}>
                4
              </span>
              <span className="nav-btn" data-index={4}>
                5
              </span>
              <span className="nav-btn" data-index={5}>
                6
              </span>
              <span className="nav-btn" data-index={6}>
                7
              </span>
              <span className="nav-btn" data-index={7}>
                8
              </span>
              <span className="nav-btn" data-index={8}>
                9
              </span>
              <span className="nav-btn" data-index={9}>
                10
              </span>
              <span className="nav-btn" data-index={10}>
                11
              </span>
              <span className="nav-btn" data-index={11}>
                12
              </span>
              <span className="nav-btn" data-index={12}>
                13
              </span>
              <span className="nav-btn" data-index={13}>
                14
              </span>
              <span className="nav-btn" data-index={14}>
                15
              </span>
            </div>
          </div>
        </div>
        <div id="promo-cat-wrapper">
          <div id="promoCat-0"></div>
          <div id="promoCat-1"></div>
        </div>
        <div id="advanced-promotion-box-1"></div>
        <div id="mechanics-banner"></div>
        <div id="mechanics-review"></div>
        <div id="simplified-store-content"></div>
        <div id="promoted-top-10"></div>
        <div className="reviewModuleWrapper" id="reviewModuleWrapper"></div>
        <div id="hotcat-wrapper"></div>
        <div id="recommend-brands-wrapper"></div>
        <div id="famous-brand-wrapper"></div>
        <div id="zone-promo-wrapper">
          <div id="zone-promo-slot"></div>
          <div id="zone-promoCat-0"></div>
          <div id="zone-promoCat-1"></div>
          <div id="zone-promoCat-2"></div>
          <div id="zone-promoCat-3"></div>
          <div id="zone-promoCat-4"></div>
          <div id="zone-promoCat-5"></div>
          <div id="zone-promoCat-6"></div>
          <div id="zone-promoCat-7"></div>
          <div id="zone-promoCat-8"></div>
          <div id="zone-promoCat-9"></div>
          <div id="zone-promoCat-10"></div>
          <div id="zone-promoCat-11"></div>
          <div id="zone-promoCat-12"></div>
          <div id="zone-promoCat-13"></div>
          <div id="zone-promoCat-14"></div>
          <div id="zone-promoCat-15"></div>
          <div id="zone-promoCat-16"></div>
          <div id="zone-promoCat-17"></div>
          <div id="zone-promoCat-18"></div>
          <div id="zone-promoCat-19"></div>
          <div id="zone-promoCat-20"></div>
          <div id="zone-promoCat-21"></div>
          <div id="zone-promoCat-22"></div>
          <div id="zone-promoCat-23"></div>
          <div id="zone-promoCat-24"></div>
        </div>
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