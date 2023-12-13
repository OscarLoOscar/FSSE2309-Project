import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { Badge, Box, Divider, Popover, Typography } from '@mui/material';
import { ProductDetailsDto } from '../../../../data/Product/ProductDetailsDto';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect } from 'react';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function UserStatus() {
  const [value, setValue] = React.useState('Login');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [basket, setBasket] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const deleteItem = () => {
    localStorage.clear()
  }

  let localBasket = JSON.parse(localStorage.getItem("basket") || "[]");
  //as ProductDetailsDto[];

  useEffect(() => {
    setBasket(localBasket);
  }, [localBasket]);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const navigateLoginPage = () => {
    navigate("/login")
  }

  const navigateThankyouPage = () => {
    navigate("/thankyoupage")
  }
  const navigateErrorPage = () => {
    navigate("/error")
  }
  const navigateShoppingCartPage = () => {
    navigate("/shoppingcart")
  }

  // Dummy data for illustration, replace it with your actual cart data
  const dummyCartItem: ProductDetailsDto = {
    pid: 1,
    name: 'Dummy Product',
    price: 50.00,
    description: "Testing",
    stock: 10, // Make sure to include the stock property or adjust as needed
  };

  const [cartItemList, setCartItemList] = React.useState([dummyCartItem]);



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
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
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
                  {/* <Image
                      src={basket.image}
                      width={50}
                      height={50}
                      style={{ borderRadius: "0.4rem" }}
                      alt={basket.product}
                    /> */}
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
                      {/* {basket.product} */}
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
                        {/* ${basket.price}.00 x {basket.amount} */}
                      </Typography>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "13px",
                          fontWeight: "700",
                        }}
                      >
                        {/* ${basket.price * basket.amount}.00 */}
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
                    onClick={deleteItem}
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
    </>
  );
}