import React from "react";
import { Box, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import { ImgData } from "../../data/ImgData";

type AdvProps = {
  imgData: ImgData | undefined;
}

const Adv: React.FC<AdvProps> = (props) => (
  <React.Fragment>
    <Card component="div"
      sx={{ maxWidth: 750, display: 'flex', flexDirection: 'column', maxHeight: 400, overflowY: 'auto' }}>
      <CardActionArea>
        <CardMedia
          data-position={props.imgData?.position}
          component="img"
          height="340"
          src={props.imgData?.data[0].src}
          alt={props.imgData?.data[0].alt}
          style={{ cursor: "pointer" }}
          tabIndex={-1}
        />
      </CardActionArea>
    </Card>
  </React.Fragment>
);

type MainWrapperProps = {
  imgData: ImgData | undefined;
}

const MainWrapper: React.FC<MainWrapperProps> = (props) => (
  <Box sx={{ maxWidth: 750 }} justifyContent="center">
    <Card variant="outlined">
      <Adv imgData={props.imgData} />
    </Card>
  </Box>
);

export default MainWrapper;
