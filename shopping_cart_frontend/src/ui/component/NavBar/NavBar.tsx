import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Stack, styled } from '@mui/material';
import SearchBox from './SearchBox/SearchBox';
import UserStatus from './UserStatus/UserStatus';
import MenuMenu from './ItemMenu/ContextMenu';
const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));
export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (

    <>
      <AppBar position="static"
        style={{
          width: 'auto',
          height: 70,
          justifyContent: 'space-evenly',
          alignContent: 'center'
        }}
      >
        <Toolbar>
          <MenuMenu />
          <SearchBox />
          <Stack spacing={2}
            sx={{
              width: 500,
              // margin: 'flex', // Center the Stack horizontally
              marginLeft: 5,
              // display: 'flex', // Make it a flex container
              // alignItems: 'center', // Center the content vertically
            }}
          >
          </Stack >
          <UserStatus />
        </Toolbar>
      </AppBar>
    </>
  );
}