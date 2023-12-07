import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import React from 'react';

type Props = {
  // item: string
}
const itemList = [
  "手機",
  "平板電腦 電子書閱讀器",
  "耳機 耳筒",
  "手提電腦",
  "智能手錶及手機週邊"
]

export default function IteMenu() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleItemClick = () => {
  //   const items = item.split(' ');
  //   setAnchorEl(null);
  //   alert(items.join('\n'));
  // };


  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 4 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ListIcon />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block', backgroundcolor: 'white' } }}
          fontSize={17}
        >
          商品分類
        </Typography>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {itemList.map((category, index) => (
          <MenuItem key={index} sx={{ backgroundColor: '#e0e0e0' }}>
            {category}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}