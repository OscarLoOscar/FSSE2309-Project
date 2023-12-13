import TopContainer from '../component/TopContainer/TopContainer';
import BottomWrapper from '../component/BottomWrapper/BottomWrapper';
import ItemTab from '../component/ItemTab/ItemTab';
import MainWrapper from '../component/adv/MainWrapper';
import NavBar from '../component/NavBar/NavBar';
import { Container } from '@mui/material';
import Footer from '../component/Footer/Footer';
import ProductDetails from '../component/Product/ProductDetails';
const photos = [
  "//images.hktvmall.com/image_slider/bannerzh_231130040831.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231201044918.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231129045222.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_230907025912.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_220712063428.jpg",

];

// define一個ShoppingSite组件
export default function ProductDetailsPage() {
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
        <MainWrapper imgs={photos} />
        <ProductDetails />
      </Container>
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
