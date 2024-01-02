import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function TopContainer() {
  return (
    <>
        <Grid container   spacing={2} columns={10}>
          <Grid item xs={5} sx={{ textAlign: {xs:'left' , md:'left'} }}>
            <Tooltip title="廣告位置1" placement="top-start" >
              <Button color="success">廣告位置1</Button>
            </Tooltip>
            <Tooltip title="廣告位置2" placement="top">
              <Button color="success">廣告位置2</Button>
            </Tooltip>
            <Tooltip title="廣告位置3" placement="top">
              <Button color="success">廣告位置3</Button>
            </Tooltip>
            <Tooltip title="廣告位置4" placement="top">
              <Button color="success">廣告位置4</Button>
            </Tooltip>
            <Tooltip title="廣告位置5" placement="top-end">
              <Button color="success">廣告位置5</Button>
            </Tooltip>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: {xs:'right' , md:'right'} }}>
            <Tooltip title="常見問題" placement="right-start">
              <Button>常見問題</Button>
            </Tooltip>
            <Tooltip title="常見問題2" placement="right">
              <Button>常見問題2</Button>
            </Tooltip>
            <Tooltip title="常見問題3" placement="right">
              <Button>常見問題3</Button>
            </Tooltip>
            <Tooltip title="常見問題4" placement="right-end">
              <Button>常見問題4</Button>
            </Tooltip>
          </Grid>

        </Grid>
            </>
  );
}