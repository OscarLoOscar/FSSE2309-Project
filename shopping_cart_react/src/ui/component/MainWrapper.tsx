import { Box, Button, Theme } from "@mui/material";
import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';

const photos = [
  "//images.hktvmall.com/image_slider/bannerzh_231130040831.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231106074059.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231201044918.jpg",
];

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    //  margin: theme.spacing(1),
    //backgroundColor: 'rgba(0, 0, 0, 0.7)',
    marginLeft: -50,
    color: 'white',
    // '&:hover': {
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // },
  },
  indicator: {
    width: 8,
    height: 8,
    // margin: theme.spacing(0.5),
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    borderRadius: '50%',
  },
  activeIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
})) as () => Record<string, string>;

const MainWrapper = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevCurrentPhoto) => (prevCurrentPhoto + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto - 1 + photos.length) % photos.length);
  };

  const nextPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
  };

  const renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < photos.length; i++) {
      indicators.push(
        <Box
          key={i}
          className={
            i === currentPhoto ? classes.activeIndicator : classes.indicator
          }
        />
      );
    }
    return indicators;
  };

  const renderButton = () => {
    const buttons = [];
    for (let i = 0; i < photos.length; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => setCurrentPhoto((prevCurrentPhoto) => (prevCurrentPhoto + 1) % photos.length)}
          className={classes.button}
          variant="contained"
        >
          {photos[i]}
        </Button>
      );
    }
    return buttons;
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          onClick={prevPhoto}
          className={classes.button}
          variant="contained"
        //sx={{ marginLeft: -10 }}
        >
          <ArrowBackIosSharpIcon />
        </Button>
        <img src={photos[currentPhoto]} alt="Display photo" />
        <Button startIcon={<ArrowForwardIosSharpIcon />}
          onClick={nextPhoto}
          className={classes.button}
          variant="contained">
        </Button>
      </Box>
      {/* <Box className={classes.indicator}>
        {renderIndicators()}
      </Box> */}
      {/* {renderButton()} */}
    </>
  );
}

export default MainWrapper;