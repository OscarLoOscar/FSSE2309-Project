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
    const [cartItem, setCartItems] = useState<CartItemListDto>(data)
    const [itemSubtotal, setItemSubtotal] = useState<number>(data.price * data.cart_quantity)
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

    const handleQtyChange = async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        try {
            const updatedCartItem: CartItemListDto | undefined = await CartApi.updateCartItemApi(data.pid.toString(), event.target.value);
            if (updatedCartItem) {
                setCartItems(updatedCartItem);
            }
            setItemSubtotal(Number(event.target.value) * data.price);
        } catch (e) {
            navigate("/error");
        }
    };


    // const handleDecreaseClick = () => {
    //     // 确保数量不小于 1，避免出现负数
    //     const newQuantity = Math.max(cartItem.cart_quantity - 1, 1);
    //     handleQtyChange(newQuantity);
    // };

    const handleDeleteCartItem = async (pid: string) => {
        try {
            const result = await CartApi.deleteCartItemApi(pid.toString())
            console.log(result);
            await getCartItemList();
        } catch (e) {
            navigate("/error")
        }
    }

    return <>
        <Box display="flex" flexDirection="row" key={cartItem.pid}>
            <Box width="20%">
                <img src={cartItem.image_url}
                    alt={cartItem.name}
                    loading="lazy"
                    height='80px' />
            </Box>
            <Box width="20%" sx={{
                display: "flex",
                alignItems: "center"
            }}>
                <Typography
                    sx={{ margin: "auto auto auto 0" }}>
                    {cartItem.name}
                </Typography>
            </Box>
            <Box width="15%" sx={{
                display: "flex",
                alignItems: "center"
            }}>
                <Typography
                    sx={{ margin: "auto" }}>
                    {HKDollar.format(cartItem.price)}
                </Typography>
            </Box>
            <Box width="15%" sx={{
                display: "flex",
                alignItems: "center"
            }}>
                {/* Controll _itemQuantity */}
                <TextField
                    id={cartItem.pid.toString() + "_itemQuantity"}
                    type="number"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    size={"small"}
                    inputProps={{ min: 1, max: cartItem.stock }}
                    onBlur={handleQtyChange}
                    defaultValue={cartItem.cart_quantity}
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
                    onClick={() => handleDeleteCartItem(cartItem.pid.toString())}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Box>
        <Typography variant="body2">
            Selected Product: {cartItem.name} | Price: {HKDollar.format(cartItem.price)} | Quantity: {cartItem.cart_quantity}
        </Typography>
    </>
}