import React from "react";
import { Box, Button, Typography, styled, alpha } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./Dropdown";

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

const menuItems = [
  {
    label: "New",
    // rightIcon: <ArrowRight />,
    menu: [
      { label: "Document", onClick: () => console.log("Document clicked") },
      {
        label: "From Markdown file",
        inputProps: { id: "mdInput", type: "file", accept: ".md" },
      },
      {
        label: "From HTML file",
        inputProps: { id: "htmlInput", type: "file", accept: ".html" },
      },
    ],
  },
  {
    label: "Save as",
    // rightIcon: <ArrowRight />,
    menu: [
      { label: "Markdown", onClick: () => console.log("Markdown clicked") },
      { label: "Plain HTML", onClick: () => console.log("Plain HTML clicked") },
      { label: "Styled HTML", onClick: () => console.log("Styled HTML clicked") },
    ],
  },
  {
    label: "Export",
    rightIcon: <ArrowRight />,
    menu: [
      { label: "PDF", onClick: () => console.log("PDF clicked") },
      { label: "Github Gist", onClick: () => console.log("Github Gist clicked") },
    ],
  },
];

export default function ItemMenu() {
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
                key={index  }
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
