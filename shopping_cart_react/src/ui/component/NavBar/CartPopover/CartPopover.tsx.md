// CartPopover.tsx
import React from 'react';
import { Box, Divider, Popover, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { CartItemListDto } from '../../../../data/CartItem/CartItemListDto';

interface CartPopoverProps {
  basket: CartItemListDto | null; // Replace 'any' with the actual type of basket data
  handleDeleteCartItem: () => void;
  anchorEl: HTMLElement | null; // Add anchorEl property
  onClose: () => void; // Add onClose property
}

const CartPopover: React.FC<CartPopoverProps> = ({ basket, handleDeleteCartItem }) => {
  return (
    <Popover
      id="simple-popover"
      open={Boolean(basket)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box
        sx={{
          width: "18rem",
          height: "15rem",
        }}
      >
        <Typography sx={{ p: 2, fontWeight: "700" }}>Cart</Typography>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "70%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* POPOVER-BASKET */}
          {basket ? (
            <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      py: 0.5,
                      px: 1,
                      color: "darkGrayishBlue",
                      fontSize: "13px",
                    }}
                  >
                    {basket.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        py: 0.5,
                        px: 1,
                        color: "darkGrayishBlue",
                        fontSize: "13px",
                      }}
                    >
                      ${basket.price}.00 x {basket.cart_quantity}
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: "700",
                      }}
                    >
                      ${basket.price * basket.cart_quantity}.00
                    </Typography>
                  </Box>
                </Box>

                {/* DELETE ICON */}
                <Box
                  sx={{
                    color: "darkGrayishBlue",
                    cursor: "pointer",
                    opacity: "0.7",
                  }}
                  onClick={handleDeleteCartItem}
                >
                  <DeleteOutlineOutlinedIcon />
                </Box>
              </Box>

              {/* CHECKOUT BUTTON */}
              <Box
                sx={{
                  p: 1.5,
                  backgroundColor: "orange",
                  mt: 2,
                  borderRadius: "0.5rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Checkout
                </Typography>
              </Box>
            </Box>
          ) : (
            <Typography
              sx={{
                p: 2,
                fontWeight: "700",
                color: "darkGrayishBlue",
              }}
            >
              Your cart is empty.
            </Typography>
          )}
        </Box>
      </Box>
    </Popover>
  );
};

export default CartPopover;
