import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
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


export default function ShoppingCartItem({ cartItem, cartItemList, setCartItemList }: Props) {
    const [quantity, setQuantity] = useState<number | undefined>(cartItem?.cart_quantity);
    const [warningText, setWarningText] = useState<string>("");
    const navigate = useNavigate();

    const handlePlusButton = async () => {
        if (cartItem && quantity && quantity + 1 <= cartItem.stock) {
            try {
                await CartItemApi.patchCartItem(cartItem.pid, quantity + 1);
                setQuantity((state) => (state && state + 1));
            } catch (error) {
                navigate("/error");
            }
        } else {
            setWarningText("Stock Not Available");
            setTimeout(() => setWarningText(""), 2000);
        }
    };

    const handleMinusButton = async () => {
        if (cartItem && quantity && quantity - 1 > 0) {
            try {
                await CartItemApi.patchCartItem(cartItem.pid, quantity - 1);
                setWarningText("");
                setQuantity((state) => (state && state - 1));
            } catch (error) {
                navigate("/error");
            }
        } else {
            try {
                await CartItemApi.deleteCartItem(cartItem?.pid);
                setQuantity((state) => (state && state - 1));
            } catch (error) {
                navigate("/error");
            }
        }
    };

    const handleDeleteButton = async () => {
        try {
            await CartItemApi.deleteCartItem(cartItem?.pid);
            setQuantity(0);
            setCartItemList(cartItemList.filter((item) => item.pid !== cartItem?.pid));
        } catch (error) {
            navigate("/error");
        }
    };

    useEffect(() => {
        if (cartItem) {
            const updatedCartItemList = cartItemList.map((value) => {
                if (value.pid === cartItem?.pid) {
                    return {
                        ...value,
                        cart_quantity: quantity,
                    };
                } else {
                    return value;
                }
            });
            setCartItemList(updatedCartItemList);
        }
    }, [quantity, cartItem, cartItemList, setCartItemList]);

    return (
        <>
            {cartItem && (
                <Card sx={{ display: "flex" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 140, objectFit: "cover" }}
                        image={productPhotoMapping[cartItem.pid]}
                        alt={cartItem.name}
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6">{cartItem.name}</Typography>
                        <Typography gutterBottom variant="subtitle1">
                            Quantity: {quantity}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: {cartItem.price.toLocaleString(undefined, { style: "currency", currency: "HKD" })}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Sub-Total: {(cartItem.price * (quantity || 0)).toLocaleString(undefined, { style: "currency", currency: "HKD" })}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handlePlusButton}>
                            +
                        </Button>
                        <Button size="small" onClick={handleMinusButton}>
                            -
                        </Button>
                        <Button
                            size="small"
                            onClick={handleDeleteButton}
                            endIcon={<DeleteIcon />}
                        ></Button>
                    </CardActions>
                </Card>
            )}
            {warningText && (
                <div className={"d-flex justify-content-end bg-white me-5"}>
                    <Alert
                        variant={"danger"}
                        className={"mt-3 w-25 d-flex justify-content-center align-items-center-center"}
                    >
                        {warningText}
                    </Alert>
                </div>
            )}
        </>
    );
}