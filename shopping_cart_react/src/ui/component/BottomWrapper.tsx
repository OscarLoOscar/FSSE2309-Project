import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";

type Props = {};

export default function BottomWrapper(props: Props) {
  return (
    <Grid container justifyContent="center">
      <Grid sx={{ textAlign: { xs: 'center', md: 'center' } }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">熱門搜尋</Typography>
          <Link underline="hover" color="inherit" href="/sponsor/momax-flagship">
            (贊助):momax旗艦店
          </Link>
          <Link underline="hover" color="inherit" href="/iphone15">
            iPhone15
          </Link>
          <Link underline="hover" color="inherit" href="/switch">
            Switch
          </Link>
          <Link underline="hover" color="inherit" href="/sony">
            SONY
          </Link>
          <Link underline="hover" color="inherit" href="/soundbar">
            Soundbar
          </Link>
          <Link underline="hover" color="inherit" href="/tab-s9">
            Tab S9
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}
