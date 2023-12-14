import BottomWrapper from "../../component/BottomWrapper/BottomWrapper";
import ItemTab from "../../component/ItemTab/ItemTab";
import NavBar from "../../component/NavBar/NavBar";
import TopContainer from "../../component/TopContainer/TopContainer";
import { Container } from "@mui/material";
import Footer from "../../component/Footer/Footer";
import {  FormLabel, Input } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { GetTransDto } from "../../../data/Trans/GetTransDto";
import * as TransApi from "../../../api/TransactionApi"
import * as CartItemApi from "../../../api/CartItemApi"
import { Params, useNavigate, useParams } from "react-router-dom";
import Loading from "../../component/Utility/Loading";
import TransItemCard from "../../component/Transaction/TransItemCard";
import { getAccessToken } from "../../../authService/FirebaseAuthService";
import LogoImage from "../../component/LogoImage/LogoImage";


export default function CartPage() {
  const [transData, setTransData] = React.useState<GetTransDto | undefined>(undefined);
  const [cardNo, setCardNo] = React.useState<number | undefined>(undefined)
  const [expDate, setExpDate] = React.useState<Date | undefined>(undefined)
  const [payStatus, setPayStatus] = React.useState<string | undefined>(undefined)
  const [cvv, setCvv] = React.useState<number | undefined>(undefined)
  const [loadingBackdrop, setLoadingBackdrop] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const { transactionId } = useParams<Params>();

  const fetchTransData = async () => {
    try {
      // const token = await getAccessToken()
      if (transactionId) {
        // if (token && transactionId) {
        // setTransData(await TransApi.getTransApi(token, transactionId))
        setTransData(await TransApi.getTransApiTest(transactionId))
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
  const handleCardNoInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCardNo(Number(event.target.value))
  }

  const handleExpDateInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setExpDate(event.target.value)
  }

  const handleCVVInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCvv(Number(event.target.value))
  }
  const handleSubmitPayment = async () => {
    setLoadingBackdrop(true)
    const token = await getAccessToken()
    if (token && transactionId) {
      const payResult = await TransApi.payTransApi(token, transactionId)
      setPayStatus(payResult.result)

    }
  }

  const handlePaymentSuccess = async () => {
    const token = await getAccessToken()
    if (token && transactionId) {
      const payResult = await TransApi.finishTransApi(token, transactionId)
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
    void fetchTransData()
  }, [])

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
      <Container >
        {/* {pData?.products?.map((data2, index) => (
          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="top"
            style={{ marginTop: 10 }}
          > */}
        {/* <ShoppingCartItem
              key={index}
              cartItem={data2}
              cartItemList={cartItemList}
              setCartItemList={setCartItemList}
            /> */}
        {/* </Grid>
        ))}; */}
      </Container>
      <Footer />

    </>
  );
}