import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container, Grid, Stack } from '@mui/material';
import SearchBox from './SearchBox/SearchBox';
import UserStatus from './UserStatus/UserStatus';
import ItemMenu from './ItemMenu/ItemMenu';
import { Item } from '../../../data/dto/TransactionDetailData';


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
        style={{ width: '100%' }}
      >
        <Toolbar>

          <ItemMenu />
          <SearchBox />
          <Stack spacing={2}
            sx={{
              width: 800,
              // margin: 'flex', // Center the Stack horizontally
              marginLeft: 5,
              // display: 'flex', // Make it a flex container
              // alignItems: 'center', // Center the content vertically
            }}
          >
          </Stack >
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          </Box>
          <UserStatus />
        </Toolbar>
      </AppBar>
    </>
  );
}