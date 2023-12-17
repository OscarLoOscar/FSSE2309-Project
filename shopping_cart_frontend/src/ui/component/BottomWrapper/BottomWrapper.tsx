import { Link, Typography, AppBar } from "@mui/material";
import { red } from '@mui/material/colors';


export default function BottomWrapper() {
  const color = red[50];

  return (

    <AppBar
      position="relative"
      sx={{
        width: "100%",
        margin: "auto",
        backgroundColor: "#0091ea"
      }}
    >
      <Typography color="text.primary" align="center">
        熱門搜尋:
        {'  (贊助) '}
        <Link underline="hover" color={color} href="/sponsor/momax-flagship">
          momax旗艦店
        </Link>
        {' | '}
        <Link underline="hover" color={color} href="/iphone15">
          iPhone15
        </Link>
        {' | '}
        <Link underline="hover" color={color} href="/switch">
          Switch
        </Link>
        {' | '}
        <Link underline="hover" color={color} href="/sony">
          SONY
        </Link>
        {' | '}
        <Link underline="hover" color={color} href="/soundbar">
          Soundbar
        </Link>
        {' | '}
        <Link underline="hover" color={color} href="/tab-s9">
          Tab S9
        </Link>
        {' | '}
        <Link
          underline="hover"
          color={color}
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
      </Typography>
    </AppBar>
  );
}
