import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";

type Props = {};

export default function BottomWrapper(props: Props) {
  return (
    <Grid container justifyContent="center">
      <Grid sx={{ textAlign: { xs: 'center', md: 'center' } }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">熱門搜尋:</Typography>
          <Link underline="hover" color="inherit" href="/sponsor/momax-flagship">
            (贊助) <u>momax旗艦店</u>
          </Link>
          <Link underline="hover" color="inherit" href="/iphone15">
            <u> iPhone15</u>
          </Link>
          <Link underline="hover" color="inherit" href="/switch">
            <u> Switch</u>
          </Link>
          <Link underline="hover" color="inherit" href="/sony">
            <u>  SONY</u>
          </Link>
          <Link underline="hover" color="inherit" href="/soundbar">
            <u> Soundbar</u>
          </Link>
          <Link underline="hover" color="inherit" href="/tab-s9">
            <u> Tab S9</u>
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            <u>Core</u>
          </Link>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}
