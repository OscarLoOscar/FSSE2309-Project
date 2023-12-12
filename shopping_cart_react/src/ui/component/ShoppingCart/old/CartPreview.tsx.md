import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { GetCartItemData } from "../../../data/dto/GetCartItemData";
import almaviva from "../../../assets/wine/almaviva.png";
import borgogno_no_name from "../../../assets/wine/borgogno_no_name.png";
import branaire_ducru from "../../../assets/wine/branaire_ducru.png";
import cantemerle from "../../../assets/wine/cantemerle.png";
import dissan from "../../../assets/wine/dissan.png";
import domaine_michel_noellat_coteaux_bourguignons_new from "../../../assets/wine/domaine_michel_noellat_coteaux_bourguignons_new.png";
import domaine_pierre_amiot_et_fils_morey_saint_denis_1er_cru_les_millandes from "../../../assets/wine/domaine_pierre_amiot_et_fils_morey_saint_denis_1er_cru_les_millandes.png";
import dominus_estate_napanook from "../../../assets/wine/dominus_estate_napanook.png";
import lafite_rothschild_6 from "../../../assets/wine/lafite_rothschild_6.png";
import lascombes from "../../../assets/wine/lascombes.png";
import leoville_las_cases_90 from "../../../assets/wine/leoville_las_cases_90.png";
import les_griffons_de_pichon_baron_1 from "../../../assets/wine/les_griffons_de_pichon_baron_1.png";
import luce_della_vite_brunello_di_montalcino_1 from "../../../assets/wine/luce_della_vite_brunello_di_montalcino_1.png";
import mouton_2004 from "../../../assets/wine/mouton_2004.png";
import quintessa from "../../../assets/wine/quintessa.png";
import * as CartItemApi from "../../../api/CartItemApi"
import { useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { TransactionDetailData } from "../../../data/dto/TransactionDetailData";
import ShoppingCartItem from "./ShoppingCartItem";

const productPhotoMapping: { [key: number]: string } = {
    1: almaviva,
    2: borgogno_no_name,
    3: branaire_ducru,
    4: cantemerle,
    5: dissan,
    6: domaine_michel_noellat_coteaux_bourguignons_new,
    7: domaine_pierre_amiot_et_fils_morey_saint_denis_1er_cru_les_millandes,
    8: dominus_estate_napanook,
    9: lafite_rothschild_6,
    10: lascombes,
    11: leoville_las_cases_90,
    12: les_griffons_de_pichon_baron_1,
    13: luce_della_vite_brunello_di_montalcino_1,
    14: mouton_2004,
    15: quintessa
}

type Props = {
    cartItem: GetCartItemData | undefined
    cartItemList: GetCartItemData[]
    setCartItemList: React.Dispatch<React.SetStateAction<GetCartItemData[]>>
}

// export default function ShoppingCartItem({ cartItem, cartItemList, setCartItemList }: Props) {
//     const [cartItemState, setCartItemState] = useState<GetCartItemData | undefined>(cartItem)
//     const [quantity, setQuantity] = useState<number | undefined>(cartItem?.cart_quantity)
//     const [warningText, setWarningText] = useState<string>("")
//     const navigate = useNavigate();

//     const handlePlusButton = async () => {
//         if (cartItem && quantity && quantity + 1 <= cartItem.stock) {
//             try {
//                 cartItem = await CartItemApi.patchCartItem(cartItem.pid, quantity + 1);
//                 setQuantity((state) => (state && state + 1));
//             }
//             catch (error) {
//                 navigate("/error");
//             }
//         }
//         else {
//             setWarningText("Stock Not Available");
//             setTimeout(() => (setWarningText("")), 2000)
//         }
//     }

//     const handleMinusButton = async () => {
//         if (cartItem && quantity && quantity - 1 > 0) {
//             try {
//                 cartItem = await CartItemApi.patchCartItem(cartItem.pid, quantity - 1)
//                 setWarningText("")
//                 setQuantity((state) => (state && state - 1))
//             }
//             catch (error) {
//                 navigate("/error");
//             }
//         }
//         else {
//             try {
//                 await CartItemApi.deleteCartItem(cartItem?.pid);
//                 setCartItemState(undefined);
//                 setQuantity((state) => (state && state - 1))
//             }
//             catch (error) {
//                 navigate("/error")
//             }
//         }
//     }

//     const handleDeleteButton = async () => {
//         try {
//             await CartItemApi.deleteCartItem(cartItem?.pid);
//             setCartItemState(cartItemList.filter((item) => item.pid !== cartItemList?.pid));
//             setQuantity(0)
//         }
//         catch (error) {
//             navigate("/error")
//         }
//     };

//     useEffect(() => {
//         if (cartItem) {
//             const updatedCartItemList = cartItemList.map((value) => {
//                 if (value.pid === cartItem?.pid) {
//                     return {
//                         ...value,
//                         cart_quantity: quantity,
//                     };
//                 } else {
//                     return value;
//                 }
//             });
//             setCartItemList(updatedCartItemList);
//         }
//     }, [quantity, cartItem, cartItemList, setCartItemList]);

//     const renderCartItem = () => {
//         if (cartItemState) {
//             return <>

//                 <Card sx={{ maxWidth: 345 }}>
//                     <CardMedia
//                         sx={{ height: 140 }}
//                         image={cartItem && productPhotoMapping[cartItem.pid]}
//                         title="green iguana"
//                     />
//                     <CardContent>
//                         <Typography gutterBottom sx={{ fontSize: 13 }} component="div">
//                             {cartItem?.name}
//                         </Typography>
//                         <Typography gutterBottom sx={{ fontSize: 13 }} component="div">
//                             Quantity
//                         </Typography>
//                         <Typography gutterBottom sx={{ fontSize: 13 }} component="div">
//                             Price<p> {cartItem?.price.toLocaleString(undefined, { style: "currency", currency: "HKD" })}</p>
//                         </Typography>

//                         <Typography gutterBottom sx={{ fontSize: 13 }} component="div">
//                             Sub-Total<p> {cartItem && quantity && (cartItem.price * quantity).toLocaleString(undefined, { style: "currency", currency: "HKD" })}</p>
//                         </Typography>

//                         <Typography variant="body2" color="text.secondary">
//                             text
//                         </Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small" onClick={handlePlusButton}>+</Button>
//                         {quantity}
//                         <Button size="small" onClick={handleMinusButton}>-</Button>
//                         <Button endIcon={<DeleteIcon />} onClick={handleDeleteButton}></Button>

//                     </CardActions>
//                 </Card>
//                 {warningText
//                     && <div className={"d-flex justify-content-end bg-white me-5"}>
//                         <Alert
//                             variant={"danger"} className={"mt-3 w-25 d-flex justify-content-center align-items-center-center"}>
//                             {warningText}
//                         </Alert>
//                     </div>}
//             </>
//         }
//     }

//     const handleCartItemListUpdate = () => {
//         if (cartItem) {
//             const updatedCartItemList = cartItemList.map((value) => {
//                 if (value.pid === cartItem?.pid && cartItem) {
//                     return {
//                         ...value,
//                         cart_quantity: quantity
//                     }
//                 }
//                 else {
//                     return value;
//                 }
//             })
//             setCartItemList(updatedCartItemList);
//         }
//     }

//     useEffect(() => {
//         handleCartItemListUpdate()
//     }, [quantity, cartItemState])

//     return (
//         <>
//             {renderCartItem()}
//         </>
//     )
// }

export default function ShoppingCartPage() {
    const [cartItemList, setCartItemList] = useState<GetCartItemData[] | undefined>(undefined);
    const navigate = useNavigate();
    //   const loginUser = useContext(loginUserContext)

    const renderCartItem = () => {
        if (cartItemList && cartItemList.length > 0) {
            //    return cartItemList.map((cartItem) => (
            // <ShoppingCartItem
            //     key={cartItem.pid}
            //     cartItem={cartItem}
            //     cartItemList={cartItemList}
            //     setCartItemList={setCartItemList} />
            //    ))
        }
        else {
            return <div className=" h1 d-flex justify-content-center align-items-center bg-white opacity-50 user-select-none">
                Shopp Cart Empty
            </div>
        }
    }

    const renderProcessButton = () => {
        if (cartItemList && cartItemList.length > 0) {
            return <div className="d-flex justify-content-end bg-white mb-5">
                <button type="button"
                    className="btn btn-warning btn-lg"
                // onClick={handleCheckout}
                >Process to Pay</button>
            </div>
        }
        else {
            return <></>
        }
    }

    // const handleCheckout = async () => {
    //     try {
    //        const transactionDetailData: TransactionDetailData | undefined = await TransactionApi.createTransaction()
    //         if (transactionDetailData) {
    //             navigate(`/checkout/${transactionDetailData.tid}`)
    //         }
    //     }
    //     catch (error) {
    //         navigate("/error")
    //     }
    // }

    const renderTotal = () => {
        if (cartItemList) {
            return <div className="float-end bg-white">
                <p className="mb-0 me-5 d-flex align-items-center bg-white">
                    <span className="small text-muted me-2 bg-white">Order total:</span> <span
                        className="lead fw-normal bg-white">{calculateTotal().toLocaleString(undefined, { style: "currency", currency: "HKD" })}</span>
                </p>
            </div>
        }
        else {
            return <></>
        }
    }

    const calculateTotal = () => {
        if (cartItemList) {
            return cartItemList.reduce((accumulator, cartItem) => {
                return accumulator + cartItem.price * (cartItem.cart_quantity ?? 0);
            }, 0);
        }
        else {
            return 0;
        }
    }

    const fetchCartItemData = async () => {
        setCartItemList([]);
        const responseData = await CartItemApi.getCartItem();
        setCartItemList(responseData);
    }

    // useEffect(() => {
    //     if (loginUser) {
    //         fetchCartItemData();
    //     }

    //     return () => {
    //         axios.CancelToken.source().cancel();
    //     }
    // }, [loginUser])

    return (
        <>
            <NavBar />

            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col bg-white rounded-5 p-5">
                            <p className="bg-white"><span className="h2 bg-white">Shopping Cart</span></p>

                            {renderCartItem()}
                            <div className="card mb-5 border-0">
                                <div className="card-body p-4 bg-white">

                                    {renderTotal()}

                                </div>
                            </div>
                            {renderProcessButton()}

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}