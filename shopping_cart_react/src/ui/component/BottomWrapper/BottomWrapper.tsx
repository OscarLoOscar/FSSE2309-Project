import { Breadcrumbs, Grid, Link, Typography, AppBar } from "@mui/material";
import Container from "@mui/material/Container";
import { red } from '@mui/material/colors';

type Props = {};

export default function BottomWrapper(props: Props) {
  const color = red[50];

  return (
    // <Grid container justifyContent="center">
    //   <Grid sx={{ textAlign: { xs: 'center', md: 'center' } }}>
    //     <Breadcrumbs aria-label="breadcrumb">
    // <footer style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}>
    <AppBar position="sticky" sx={{
      // backgroundColor: "transparent"
      backgroundColor: "#0091ea"
    }}
    >
      <Container maxWidth="lg">
        <Typography color="text.primary" align="center">熱門搜尋:
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
      </Container>
    </AppBar >
    //   </footer>

    //     {/* </Breadcrumbs>
    //   </Grid>
    // </Grid> */}
  );
}
