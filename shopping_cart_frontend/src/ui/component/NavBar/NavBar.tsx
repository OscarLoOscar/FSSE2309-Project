import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled, Grid, Box } from '@mui/material';
import SearchBox from './SearchBox/SearchBox';
import UserStatus from './UserStatus/UserStatus';
import MenuMenu from './ItemMenu/ContextMenu';
import { LoginUserContext } from '../../../App';
import { useContext, useState, MouseEvent } from 'react';
const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));
export default function NavBar() {
  const loginUser = useContext(LoginUserContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (

    <>
      {/* <AppBar position="static"
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
      </AppBar> */}


      {/* <AppBar position="static" >
        <Toolbar variant="dense" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Grid container style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <Grid item style={{ width: '140px' }}>
              <MenuMenu />
            </Grid>
            <Grid item style={{  width: '500px' }}>
              <SearchBox />
            </Grid>
            <Grid item style={{ width: '300px' }}>
              <UserStatus />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> */}

      {/* <AppBar position="static">
        <Toolbar variant="regular" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={2} sx={{ flex: '1 1 0', maxWidth: '100px' }}>
              <MenuMenu />
            </Grid>
            <Grid item xs={12} sm={8} md={6} sx={{ flex: '1 1 0', maxWidth: '500px' }}>
              <SearchBox />
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ flex: '1 1 0', maxWidth: '300px' }}>
              <UserStatus />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> */}

      <AppBar position="static">
        <Toolbar variant="regular" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box flex="1 1 0" maxWidth="140px">
              <MenuMenu />
            </Box>
            <Box flex="1 1 0" maxWidth="500px">
              <SearchBox />
            </Box>
            <Box flex="1 1 0" maxWidth="300px">
              <UserStatus />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}