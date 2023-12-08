import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import styled from '@emotion/styled';




export default function UserStatus() {
  const [value, setValue] = React.useState('recents');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {/** handleChange之後keep白色 */}
      <BottomNavigation
        sx={{
          width: 500, backgroundColor: 'transparent',
          '& .Mui-selected': {
            '& .MuiBottomNavigationAction-label': {
              fontSize: theme => theme.typography.caption,
              //     transition: 'none',
              fontWeight: 'bold',
              //      lineHeight: '20px',
              color: 'white'
            }
          }

        }}
        value={value}
        onChange={handleChange}
      >

        <BottomNavigationAction
          label="Login "
          value="Login"
          icon={<PersonIcon sx={{ color: 'white' }} />}
        />
        {/**handleChange 之前icon白色 */}


        <BottomNavigationAction
          label="Notifications"
          value="Notifications"
          icon={<NotificationsIcon sx={{ color: 'white' }} />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon sx={{ color: 'white' }} />}
        />
        <BottomNavigationAction
          label="ShoppingCart"
          value="ShoppingCart"
          icon={<ShoppingCartIcon sx={{ color: 'white' }} />}
        />
      </BottomNavigation>
    </>
  );
}