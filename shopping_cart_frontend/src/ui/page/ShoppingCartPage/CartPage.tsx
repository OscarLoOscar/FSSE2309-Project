import BottomWrapper from "../../component/BottomWrapper/BottomWrapper";
import ItemTab from "../../component/ItemTab/ItemTab";
import NavBar from "../../component/NavBar/NavBar";
import TopContainer from "../../component/TopContainer/TopContainer";
import { Container } from "@mui/material";
import Footer from "../../component/Footer/Footer";
import { FormLabel, Input } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState, ChangeEvent, SetStateAction } from "react";
import { GetTransDto } from "../../../data/Trans/GetTransDto";
// import * as TransApi from "../../../api/TransactionApi"
import { Params, useNavigate, useParams } from "react-router-dom";
import Loading from "../../component/Utility/Loading";
import TransItemCard from "../../component/Transaction/TransItemCard";
import LogoImage from "../../component/LogoImage/LogoImage";
import ShoppingCartList from "../../component/ShoppingCart/ShoppingCartList";
import ShoppingCartListCard from "../../component/ShoppingCart/ShoppingCartListCard";
import { CartItemListDto } from "../../../data/CartItem/CartItemListDto";

export default function CartPage() {
  const [transData, setTransData] = useState<GetTransDto | undefined>(undefined);
  const [cardNo, setCardNo] = useState<number | undefined>(undefined)
  const [expDate, setExpDate] = useState<Date | undefined>(undefined)
  const [payStatus, setPayStatus] = useState<string | undefined>(undefined)
  const [cvv, setCvv] = useState<number | undefined>(undefined)
  const [loadingBackdrop, setLoadingBackdrop] = useState<boolean>(false);
  const navigate = useNavigate();
  const { transactionId } = useParams<Params>();

  const fetchTransData = async () => {
    try {
      if (transactionId) {
        setTransData(await TransApi.getTransApi(transactionId))
      }
    } catch (e) {
      navigate("/error")
    }
  }

  const transItemListHeader = () => {
    return <>
      <Box display="flex" flexDirection="row">
        <Box width="20%" sx={{
          textAlign: "center"
        }}>
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >Item Image
          </Typography>
        </Box>
        <Box width="20%" sx={{
          textAlign: "center"
        }}>
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >Item Name</Typography>
        </Box>
        <Box width="15%" sx={{
          textAlign: "center"
        }}>
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >Unit Price
          </Typography>
        </Box>
        <Box width="15%" sx={{
          textAlign: "center"
        }}>
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >Item Qty
          </Typography>
        </Box>
        <Box width="25%" sx={{
          textAlign: "center"
        }}>
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >Item Subtotal
          </Typography>
        </Box>
      </Box>
    </>
  }

  const renderTransItemList = () => {
    if (transData && transData.items.length > 0) {
      return transData.items.map((value) => {
        return <TransItemCard key={value.tpid} data={value} />
      })
    } else {
      return <Loading />
    }
  }
  const handleCardNoInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardNo(Number(event.target.value))
  }

  const handleExpDateInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setExpDate(event.target.value)
  }

  const handleCVVInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCvv(Number(event.target.value))
  }
  const handleSubmitPayment = async () => {
    setLoadingBackdrop(true)
    if (transactionId) {
      const payResult = await TransApi.payTransApi(transactionId)
      setPayStatus(payResult.result)

    }
  }

  const handlePaymentSuccess = async () => {
    if (transactionId) {
      const payResult = await TransApi.finishTransApi(transactionId)
      setPayStatus(payResult.status)
      setLoadingBackdrop(false)
      navigate('/thankyou')
    }
  }

  useEffect(() => {
    if (payStatus === 'SUCCESS') {
      void handlePaymentSuccess()
    }
    setTransData(undefined)
    void fetchTransData();
  }, []);
  // }, [fetchTransData, handlePaymentSuccess, payStatus]);

  const transFooter = () => {
    return <>
      <Box height="200px"></Box>
      <Box sx={{
        margin: 'auto',
        width: 800,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form id="login" onSubmit={handleSubmitPayment}>
          <FormLabel>
            <Typography>
              Credit Card Number
            </Typography>
          </FormLabel>
          <Input
            sx={{ '--Input-decoratorChildHeight': '45px' }}
            type="tel"
            required
            value={cardNo || ''}
            onChange={handleCardNoInput}
          />
          <FormLabel>
            <Typography>
              Expiry Date
            </Typography>
          </FormLabel>
          <Input
            sx={{ '--Input-decoratorChildHeight': '45px' }}
            type="month"
            required
            value={expDate || ''}
            onChange={handleExpDateInput}
          />
          <FormLabel>
            <Typography>
              CVV
            </Typography>
          </FormLabel>
          <Input
            sx={{ '--Input-decoratorChildHeight': '45px' }}
            inputProps={{ min: 0, max: 999 }}
            type="tel"
            required
            value={cvv || ''}
            onChange={handleCVVInput}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </>

  }

  return (
    <>
      <title>Venturenix Lab React Project</title>
      <TopContainer />
      <LogoImage />

      <ItemTab />

      <NavBar />

      <BottomWrapper />
      <Container sx={{ marginBottom: 10 }}>
        <ShoppingCartList />
        {/* //   {transItemListHeader} */}
      </Container>
      <Footer />

    </>
  );
}