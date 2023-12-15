import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, MouseEvent, SyntheticEvent } from 'react';
import { getAccessToken } from '../../../../authService/FirebaseAuthService';
import { CartItemListDto } from '../../../../data/CartItem/CartItemListDto';
import * as CartApi from "../../../../api/CartItemApi"
import { Box, Divider, Popover, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface CartPopoverProps {
  basket: CartItemListDto | null; // Replace 'any' with the actual type of basket data
  handleDeleteCartItem: () => void;
  anchorEl: HTMLElement | null; // Add anchorEl property
  onClose: () => void; // Add onClose property
}

export default function UserStatus() {
  const [value, setValue] = useState('Login');
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [basket, setBasket] = useState<CartItemListDto | null>(null);

  const deleteItem = () => {
    localStorage.clear();
  };

  const localBasket = JSON.parse(localStorage.getItem('basket') || '[]');

  useEffect(() => {
    setBasket(localBasket);
  }, []);

  //for Popover 
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  //

  const navigate = useNavigate();

  const navigateLoginPage = () => {
    navigate('/login');
  };

  const navigateThankyouPage = () => {
    navigate('/thankyoupage');
  };

  const navigateErrorPage = () => {
    navigate('/error');
  };

  const navigateShoppingCartPage = () => {
    navigate('/shoppingcart');
  };

  const fetchCartData = async () => {
    try {
      const token = await getAccessToken();
      if (token) {
        const cartItems = await CartApi.getCartItemListApi(token);
        setBasket(cartItems.length > 0 ? cartItems[0] : null);
      }
    } catch (e) {
      navigate('/error');
    }
  };
  return (
    <>
      {/** handleChange之後keep白色 */}
      <BottomNavigation
        sx={{
          width: 300,
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '& .Mui-selected': {
            '& .MuiBottomNavigationAction-label': {
              fontSize: theme => theme.typography.caption,
              fontWeight: 'bold',
              color: 'white'
            }
          }
        }}
        showLabels
        onChange={handleChange}
      >

        <BottomNavigationAction
          label="Login "
          value="Login"
          icon={<PersonIcon sx={{ color: 'white' }} />}
          onClick={navigateLoginPage}
          sx={{
            width: 100,
            '&:hover': {
              backgroundColor: '#90caf9',
            }
          }
          }
        />
        {/**handleChange 之前icon白色 */}


        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon sx={{ color: 'white' }} />}
          onClick={navigateThankyouPage}
          sx={{
            width: 100,
            '&:hover': {
              backgroundColor: '#90caf9',
            }
          }}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon sx={{ color: 'white' }} />}
          onClick={navigateErrorPage}
          sx={{
            width: 100,
            '&:hover': {
              backgroundColor: '#90caf9'
            }
          }}
        />
        {/* Drawer -> 黑屏選項 效果 */}
        {/* Popover -> 彈出shopping cart 效果 */}
        <BottomNavigationAction
          aria-describedby={id}
          label="Shopping Cart"
          icon={<ShoppingCartIcon sx={{ color: 'white' }} />}
          // onClick={navigateShoppingCartPage}
          onClick={handleClick}
          sx={{
            width: 100,
            '&:hover': {
              backgroundColor: '#90caf9'
            }
          }}
        />
      </BottomNavigation >
      {/* CART */}

      {/* Popover */}
      <Popover
        id={id}
        //  open={Boolean(basket)}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
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
                        color: "#009688",
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
                          color: "#1a237e",
                          fontSize: "13px",
                        }}
                      >
                        ${basket.price}.00 x {basket.cart_quantity}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#3d5afe",
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
                      color: "#1de9b6",
                      cursor: "pointer",
                      opacity: "0.7",
                    }}
                  // onClick={handleDeleteCartItem}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Box>
                </Box>

                {/* CHECKOUT BUTTON */}
                <Box
                  sx={{
                    p: 1.5,
                    backgroundColor: "#ffb74d",
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
                  color: "#4caf50",
                }}
              >
                Your cart is empty.
              </Typography>
            )}
          </Box>
        </Box>
      </Popover>    </>
  );
}