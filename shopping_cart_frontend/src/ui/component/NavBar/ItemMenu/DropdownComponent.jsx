import Button from "@material-ui/core/Button";
import { Box, Link } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Typography from "@material-ui/core/Typography";

import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./Dropdown";

<Dropdown
trigger={<Button>File</Button>}
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
            onChange={(e) => {}}
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
            onChange={(e) => {}}
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