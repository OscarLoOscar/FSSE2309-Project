import React from "react";
import { Box, Button, Typography, styled, alpha } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./Dropdown";
import { useNavigate } from "react-router-dom";

const Menu = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 180,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '200',
  },
}));

export default function ItemMenu() {
  const navigate = useNavigate();

  const navigateMainPage = () => {
    navigate("/")
  }
  const menuItems = [
    {
      label: "Red Wine",
      // rightIcon: <ArrowRight />,
      menu: [
        { label: "Bordeaux", onClick: () => navigateMainPage() },
        { label: "Burgundy", onClick: () => console.log("Document clicked") },
        { label: "Loire Vally", onClick: () => console.log("Document clicked") },
        { label: "South France", onClick: () => console.log("Document clicked") },
        {
          label: "Italy",
          inputProps: { id: "mdInput", type: "file", accept: ".md" },
        },
        {
          label: "Spain",
          inputProps: { id: "htmlInput", type: "file", accept: ".html" },
        },
        {
          label: "Germany",
          inputProps: { id: "htmlInput", type: "file", accept: ".html" },
        },
        {
          label: "America",
          inputProps: { id: "htmlInput", type: "file", accept: ".html" },
        },
        {
          label: "Argentina",
          inputProps: { id: "htmlInput", type: "file", accept: ".html" },
        },
        {
          label: "Australia",
          inputProps: { id: "htmlInput", type: "file", accept: ".html" },
        },
      ],
    },
    {
      label: "White Wine",
      // rightIcon: <ArrowRight />,
      menu: [
        { label: "Bordeaux", onClick: () => console.log("Markdown clicked") },
        { label: "Burgundy", onClick: () => console.log("Plain HTML clicked") },
        { label: "Alsace", onClick: () => console.log("Styled HTML clicked") },
        { label: "Loire Vally", onClick: () => console.log("Styled HTML clicked") },
        { label: "Rhone", onClick: () => console.log("Styled HTML clicked") },
        { label: "Piedmont", onClick: () => console.log("Styled HTML clicked") },

      ],
    },
    {
      label: "Sweet Wine",
      rightIcon: <ArrowRight />,
      menu: [
        { label: "Bordeaux", onClick: () => console.log("PDF clicked") },
        { label: "Germany", onClick: () => console.log("Github Gist clicked") },
      ],
    },
    {
      label: "Sparkling Wine",
      rightIcon: <ArrowRight />,
      menu: [
        { label: "Champagne", onClick: () => console.log("PDF clicked") },
        { label: "BUrgundy", onClick: () => console.log("Github Gist clicked") },
      ],
    },
    {
      label: "Sake",
      rightIcon: <ArrowRight />,
      menu: [
        { label: "Junmai Daiginjo / 純米大吟醸", onClick: () => console.log("PDF clicked") },
        { label: "Junmai Ginjo / 純米吟醸", onClick: () => console.log("Github Gist clicked") },
        { label: "Tokubetsu Junmai / 特別純米", onClick: () => console.log("Github Gist clicked") },
        { label: "Tokubetsu Honjozo / 特別本醸造", onClick: () => console.log("Github Gist clicked") },

      ],
    },
  ];



  return (
    <>
      <Box>
        <Menu>
          <Dropdown
            trigger={
              <Button sx={{ color: "white", fontSize: 16 }}>
                <FormatListBulletedIcon />
                <b>&nbsp; &nbsp;商品分類</b>
              </Button>
            }
            menu={menuItems.map((item, index) => (
              <DropdownNestedMenuItem
                key={index}
                label={item.label}
                // rightIcon={item.rightIcon}
                sx={{
                  backgroundcolor: "silver"
                }}
                menu={item.menu.map((menuItem, i) => (
                  <DropdownMenuItem
                    key={i}
                    onClick={menuItem.onClick}
                    inputProps={menuItem.inputProps}
                  >
                    {menuItem.label}
                  </DropdownMenuItem>
                ))}
              />
            ))}
          />
        </Menu>
      </Box>
    </>
  );
}
