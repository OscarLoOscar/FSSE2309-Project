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
    navigate("/thankyoupage")
  }
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
          sx={{
            width: 100,
            '&:hover': {
              backgroundColor: '#90caf9'
            }
          }}
        />
        <BottomNavigationAction
          label="ShoppingCart"
          icon={<ShoppingCartIcon sx={{ color: 'white' }} />}
          onClick={navigateShoppingCartPage}
          sx={{
            width: 100,
            '&:hover': {
              backgroundColor: '#90caf9'
            }
          }}
        />
      </BottomNavigation >
    </>
  );
}