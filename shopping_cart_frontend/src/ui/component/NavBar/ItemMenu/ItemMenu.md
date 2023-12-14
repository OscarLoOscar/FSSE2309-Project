import React from "react";
import ReactDOM from "react-dom";
import { Box, Button, Link, Typography, styled, alpha } from "@mui/material";
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
export default function ItemMenu() {
  return (
    <>
      <Box>
        <Menu>
          <Dropdown
            trigger={<Button sx={{ color: "white" }}>
              <FormatListBulletedIcon />
              <b>商品分類</b>
            </Button>}
            menu={[
              <DropdownNestedMenuItem
                label="New"
                rightIcon={<ArrowRight />}
                menu={[
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Document
                  </DropdownMenuItem>,
                  <DropdownMenuItem>
                    <Button
                      component="label"
                      sx={{
                        color: "#000",
                        textTransform: "none",
                        fontSize: "1rem"
                      }}
                      variant="text"
                    >
                      From Markdown file
                      <input
                        id="mdInput"
                        type="file"
                        accept={`.md`}
                        hidden
                        onChange={(e) => { }}
                      />
                    </Button>
                  </DropdownMenuItem>,
                  <DropdownMenuItem>
                    <Button
                      component="label"
                      sx={{
                        color: "#000",
                        textTransform: "none",
                        fontSize: "1rem"
                      }}
                      variant="text"
                    >
                      From HTML file
                      <input
                        id="mdInput"
                        type="file"
                        accept={`.html`}
                        hidden
                        onChange={(e) => { }}
                      />
                    </Button>
                  </DropdownMenuItem>
                ]}
              />,
              <DropdownNestedMenuItem
                label="Save as"
                rightIcon={<ArrowRight />}
                menu={[
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Markdown
                  </DropdownMenuItem>,
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Plain HTML
                  </DropdownMenuItem>,
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Styled HTML
                  </DropdownMenuItem>
                ]}
              />,
              <DropdownNestedMenuItem
                label="Export"
                rightIcon={<ArrowRight />}
                menu={[
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    PDF
                  </DropdownMenuItem>,
                  <DropdownMenuItem
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Github Gist
                  </DropdownMenuItem>
                ]}
              />
            ]}
          />
        </Menu>
      </Box>
    </>
  )
};