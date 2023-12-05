import { Breadcrumbs, Button, Chip, Grid, Link, ListSubheader, Tooltip, Typography } from "@mui/material"

type Props = {

}
export default function BottomWrapper(props: Props) {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid sx={{ textAlign: { xs: 'center', md: 'center' } }}>

          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary">Breadcrumbs</Typography>
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
          </Breadcrumbs>
          <Grid />
          <Grid />
          {/* <Grid container justifyContent="center">
            <Grid sx={{ textAlign: { xs: 'center', md: 'center' } }}>
              <Chip title="熱門搜尋:" />
              {/* <ListSubheader component="div" >熱門搜尋:</ListSubheader> */}
              <Chip title="(贊助):" />
              {/* <ListSubheader component="div" >(贊助):</ListSubheader> */}
              <Chip title="momax旗艦店" />
              {/* <Button variant="text"><u>momax旗艦店</u></Button> */}
              <Chip title="iPhone15" />
              {/* <Button variant="text"><u>iPhone15</u></Button> */}
              <Chip title="Switch" />
              {/* <Button variant="text"><u>Switch</u></Button> */}
              <Chip title="SONY" />
              {/* <Button variant="text"><u>SONY</u></Button> */}
              <Chip title="Soundbar" />
              {/* <Button variant="text"><u>Soundbar</u></Button> */}
              <Chip title="Tab S9" />
              {/* <Button variant="text"><u>Tab S9</u></Button> */}
            </Grid>
          </Grid> */
        </>
        );
}
        {/* <div className="bottom wrapper">
  <div className="container">
    <div className="keywords">
      <span>熱門搜尋:</span>
      (贊助)
      <a
        className="hot-keyword-content"
        data-algolia-enabled="true"
        data-current-class="gadgetsandelectronics"
        data-index={0}
        data-mabs-ref-id="Ad_GadgetsAndElectronics_WebHotKeywords_NA_NA_S2008001_20231204_7_246591"
        href="javascript: void(0);"
      >
        momax旗艦店
      </a>
      <a
        className="hot-keyword-content"
        data-algolia-enabled="true"
        data-current-class="gadgetsandelectronics"
        data-index={1}
        data-mabs-ref-id=""
        href="javascript: void(0);"
      >
        iPhone15
      </a>
      <a
        className="hot-keyword-content"
        data-algolia-enabled="true"
        data-current-class="gadgetsandelectronics"
        data-index={2}
        data-mabs-ref-id=""
        href="javascript: void(0);"
      >
        Switch
      </a>
      <a
        className="hot-keyword-content"
        data-algolia-enabled="true"
        data-current-class="gadgetsandelectronics"
        data-index={3}
        data-mabs-ref-id=""
        href="javascript: void(0);"
      >
        SONY
      </a>
      <a
        className="hot-keyword-content"
        data-algolia-enabled="true"
        data-current-class="gadgetsandelectronics"
        data-index={4}
        data-mabs-ref-id=""
        href="javascript: void(0);"
      >
        Soundbar
      </a>
      <a
        className="hot-keyword-content"
        data-algolia-enabled="true"
        data-current-class="gadgetsandelectronics"
        data-index={5}
        data-mabs-ref-id=""
        href="javascript: void(0);"
      >
        Tab S9
      </a>
    </div> */}
