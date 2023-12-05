import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

type Props = {

}

export default function TopContainer(props: Props) {
  return (
    <>
        <Grid container   spacing={2} columns={10}>
          <Grid item xs={5} sx={{ textAlign: {xs:'left' , md:'left'} }}>
            <Tooltip title="「全民大派$3000!」使用攻略" placement="top-start" >
              <Button color="success">「全民大派$3000!」使用攻略</Button>
            </Tooltip>
            <Tooltip title="直送海外" placement="top">
              <Button color="success">直送海外</Button>
            </Tooltip>
            <Tooltip title="新手攻略" placement="top">
              <Button color="success">新手攻略</Button>
            </Tooltip>
            <Tooltip title="VIP會員計劃" placement="top">
              <Button color="success">VIP會員計劃</Button>
            </Tooltip>
            <Tooltip title="商店列表" placement="top-end">
              <Button color="success">商店列表</Button>
            </Tooltip>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: {xs:'right' , md:'right'} }}>
            <Tooltip title="常見問題" placement="right-start">
              <Button>常見問題</Button>
            </Tooltip>
            <Tooltip title="O2O自取點" placement="right">
              <Button>O2O自取點</Button>
            </Tooltip>
            <Tooltip title="工作機會" placement="right">
              <Button>工作機會</Button>
            </Tooltip>
            <Tooltip title="商戶加盟" placement="right-end">
              <Button>商戶加盟</Button>
            </Tooltip>
          </Grid>

        </Grid>
            </>
  );
}