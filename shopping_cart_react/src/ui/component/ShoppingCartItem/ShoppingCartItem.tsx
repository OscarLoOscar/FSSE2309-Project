import {Alert, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import {GetCartItemData} from "../../../data/dto/GetCartItemData";
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
import {useNavigate} from "react-router-dom";

const productPhotoMapping: {[key: number]: string} = {
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
    setCartItemList:  React.Dispatch<React.SetStateAction<GetCartItemData[] | undefined>>
}

export default function ShoppingCartItem ({cartItem, cartItemList, setCartItemList}: Props) {
    const [cartItemState, setCartItemState]= useState<GetCartItemData | undefined>(cartItem)
    const [quantity, setQuantity] = useState<number | undefined>(cartItem?.cart_quantity)
    const [warningText, setWarningText] = useState<string>("")
    const navigate = useNavigate();

    const handlePlusButton = async () => {
        if(cartItem && quantity && quantity + 1 <= cartItem.stock) {
            try {
                cartItem = await CartItemApi.patchCartItem(cartItem.pid, quantity + 1);
                setQuantity((state) => (state && state + 1));
            }
            catch (error) {
                navigate("/error");
            }
        }
        else {
            setWarningText("Stock Not Available");
            setTimeout(() => (setWarningText("")), 2000)
        }
    }

    const handleMinusButton = async () => {
        if(cartItem && quantity && quantity - 1 > 0) {
            try {
                cartItem = await CartItemApi.patchCartItem(cartItem.pid, quantity - 1)
                setWarningText("")
                setQuantity((state) => (state && state - 1))
            }
            catch (error) {
                navigate("/error");
            }
        }
        else  {
            try {
                await CartItemApi.deleteCartItem(cartItem?.pid);
                setCartItemState(undefined);
                setQuantity((state) => (state && state - 1))
            }
            catch (error) {
                navigate("/error")
            }
        }
    }

    const handleDeleteButton = async () => {
        try {
            await CartItemApi.deleteCartItem(cartItem?.pid);
            setCartItemState(undefined);
            setQuantity(0)
        }
        catch (error) {
            navigate("/error")
        }
    }

    const renderCartItem =() => {
        if(cartItemState) {
            return <>
                <div className="card mb-4 border-top-0 border-start-0 border-end-0 border-2 border-secondary">
                    <div className="card-body p-4 bg-white">

                        <div className="row align-items-center bg-white">
                            <div className="col-md-2 bg-white">
                                <img
                                    src={cartItem && productPhotoMapping[cartItem.pid]}
                                    className="img-fluid bg-white" alt="Generic placeholder image"/>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white">
                                    <p className="small text-muted mb-4 pb-2 bg-white">Name</p>
                                    <p className="lead fw-normal mb-0 bg-white">{cartItem?.name}</p>
                                </div>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white">
                                    <p className="small text-muted mb-3 pb-2 bg-white">Quantity</p>
                                    <div className="d-flex justify-content-center align-items-center bg-white">
                                        <Button
                                            className="border-0 p-2 fw-bold"
                                            variant="outline-secondary"
                                            onClick={handleMinusButton}>-</Button>
                                        <p className="lead fw-normal mb-0 ms-2 me-2 bg-white">{quantity}</p>
                                        <Button
                                            className="border-0 p-2 fw-bold"
                                            variant="outline-secondary"
                                            onClick={handlePlusButton}>+</Button>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white">
                                    <p className="small text-muted mb-4 pb-2 bg-white">Price</p>
                                    <p className="lead fw-normal mb-0 bg-white">{cartItem?.price.toLocaleString(undefined,{style: "currency", currency: "HKD"})}</p>
                                </div>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white">
                                    <p className="small text-muted mb-4 pb-2 bg-white">Sub-Total</p>
                                    <p className="lead fw-normal mb-0 bg-white">{cartItem && quantity && (cartItem.price * quantity).toLocaleString(undefined,{style: "currency", currency: "HKD"})}</p>
                                </div>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white mt-5">
                                    <FontAwesomeIcon
                                        className="trash-bin bg-white"
                                        icon={faTrash} size="xl"
                                        style={{color: "#ff0000"}}
                                        onClick={handleDeleteButton}/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                {warningText
                    && <div className={"d-flex justify-content-end bg-white me-5"}>
                        <Alert
                            variant={"danger"} className={"mt-3 w-25 d-flex justify-content-center align-items-center-center"}>
                            {warningText}
                        </Alert>
                    </div>}
            </>
        }
    }

    const handleCartItemListUpdate = () => {
        if(cartItem) {
            const updatedCartItemList = cartItemList.map((value) => {
                if(value.pid === cartItem?.pid && cartItem) {
                    return {
                        ...value,
                        cart_quantity: quantity
                    }
                }
                else {
                    return value;
                }
            })
            setCartItemList(updatedCartItemList);
        }
    }

    useEffect(() => {
        handleCartItemListUpdate()
    },[quantity, cartItemState])

    return (
        <>
            {renderCartItem()}
        </>
    )
}