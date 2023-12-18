import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import * as CartApi from "../../../api/CartItemApi.js";
import { useNavigate } from "react-router-dom";
import { CartItemListDto } from "../../../data/CartItem/CartItemListDto.js";
import { Dispatch, useState, useEffect, ChangeEvent } from "react";

type Props = {
    data: CartItemListDto
    // update: Dispatch<React.SetStateAction<CartItemListDto[] | null | undefined>>
}

export default function ShoppingCartListCard({ data }: Props) {
    const [cartItem, setCartItemState] = useState<CartItemListDto | undefined>(data)
    const [itemSubtotal, setItemSubtotal] = useState<number>(data.price * data.cart_quantity)
    const [quantity, setQuantity] = useState<number>(data.cart_quantity);
    const HKDollar = new Intl.NumberFormat('zh-HK', {
        style: 'currency',
        currency: 'HKD',
    });

    const navigate = useNavigate();

    const getCartItemList = async () => {
        try {
            //      update(undefined)
            const result = await CartApi.getCartItemListApi();
            console.log(result);
            //        update(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleQtyChange = async (newQuantity: number) => {
        try {
            if (newQuantity >= 1 && newQuantity <= data.stock) {
                // const updatedCartItem: CartItemListDto | undefined = await CartApi.updateCartItemApi(
                //     data.pid.toString(),
                //     newQuantity.toString()
                // );

                // if (updatedCartItem) {
                //     setCartItems(updatedCartItem);
                //     setItemSubtotal(updatedCartItem.price * newQuantity);
                setQuantity(newQuantity);
                // }
            } else {
                setItemSubtotal(data.cart_quantity * data.price);
                navigate("/error");
            }
        } catch (e) {
            navigate("/error");
        }
    };
    const handlePlusButton = () => {
        handleQtyChange(quantity + 1);
    };

    const handleMinusButton = () => {
        const newQuantity = Math.max(data.cart_quantity - 1, 1);
        handleQtyChange(newQuantity)
    };

    const handleDeleteCartItem = async () => {
        try {
            const result = await CartApi.deleteCartItemApi(data?.pid.toString())
            console.log(result);
            await getCartItemList();
            setCartItemState(undefined);
            setQuantity(0)

        } catch (e) {
            navigate("/error")
        }
    }

    return <>
        <Box display="flex" flexDirection="row" key={data.pid}>
            <Box width="20%">
                <img src={data.image_url}
                    alt={data.name}
                    loading="lazy"
                    height='80px' />
            </Box>
            <Box width="20%" sx={{
                display: "flex",
                alignItems: "center"
            }}>
                <Typography
                    sx={{ margin: "auto auto auto 0" }}>
                    {data.name}
                </Typography>
            </Box>
            <Box width="15%" sx={{
                display: "flex",
                alignItems: "center"
            }}>
                <Typography
                    sx={{ margin: "auto" }}>
                    {HKDollar.format(data.price)}
                </Typography>
            </Box>
            <Box width="15%" sx={{
                display: "flex",
                alignItems: "center"
            }}>
                {/* Controll _itemQuantity */}
                <TextField
                    id={data.pid.toString() + "_itemQuantity"}
                    type="number"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    size={"small"}
                    inputProps={{ min: 1, max: data.stock }}
                    onBlur={(e) => handleQtyChange(Number(e.target.value))}
                    defaultValue={data.cart_quantity}
                />
            </Box>
            <Box width="25%" sx={{
                display: "flex",
                alignItems: "center"
            }}>
                <Typography
                    sx={{ margin: "auto" }}>
                    {HKDollar.format(itemSubtotal)}
                </Typography>

            </Box>
            <Box width="5%" sx={{
                display: "flex",
                alignItems: "center"
            }}>
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => handleDeleteCartItem()}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Box>
        <Typography variant="body2">
            Selected Product: {data.name} | Price: {HKDollar.format(data.price)} | Quantity: {quantity}
        </Typography>
    </>
}