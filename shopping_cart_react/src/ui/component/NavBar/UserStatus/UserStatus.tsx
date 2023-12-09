import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UserStatus() {
  const [value, setValue] = React.useState('Login');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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

  const navigateShoppingCartPage = () => {
    navigate("/shoppingcart")
  }
  return (
    <>
      {/** handleChange之後keep白色 */}
      <BottomNavigation
        sx={{
          width: 500,
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '& .Mui-selected': {
            // '&:hover': {
            '& .MuiBottomNavigationAction-label': {
              fontSize: theme => theme.typography.caption,
              //     transition: 'none',
              fontWeight: 'bold',
              //      lineHeight: '20px',
              color: 'white'
            }
          }
        }}
        showLabels
        value={value}
        onChange={handleChange}
      >

        <BottomNavigationAction
          label="Login "
          value="Login"
          icon={<PersonIcon sx={{ color: 'white' }} />}
          onClick={navigateLoginPage}
          sx={{
            '&:hover': {
              backgroundColor: '#90caf9',
            }
          }
          }
        />
        {/**handleChange 之前icon白色 */}


        <BottomNavigationAction
          label="Notifications"
          value="Notifications"
          icon={<NotificationsIcon sx={{ color: 'white' }} />}
          sx={{
            '&:hover': {
              backgroundColor: '#90caf9',
            }
          }}
        />
        {/* <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu> */}
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon sx={{ color: 'white' }} />}
          sx={{
            '&:hover': {
              backgroundColor: '#90caf9'
            }
          }}
        />
        <BottomNavigationAction
          label="ShoppingCart"
          value="ShoppingCart"
          icon={<ShoppingCartIcon sx={{ color: 'white' }} />}
          onClick={navigateShoppingCartPage}

          sx={{
            '&:hover': {
              backgroundColor: '#90caf9'
            }
          }}
        />
      </BottomNavigation >
    </>
  );
}