import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const photos = [
  //imgData: ImgData | undefined;
  "//images.hktvmall.com/image_slider/bannerzh_231130040831.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231106074059.jpg",
  "//images.hktvmall.com/image_slider/bannerzh_231201044918.jpg",
];

const MainWrapper = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevCurrentPhoto) => (prevCurrentPhoto + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto - 1 + photos.length) % photos.length);
  }
  const nextPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photos.length);
  }
  const photoIndicators = [];
  for (let i = 0; i < photos.length; i++) {
    photoIndicators.push(
      <button key={i} onClick={() => setCurrentPhoto(i)}>
        {i === currentPhoto ? '●' : '○'}
      </button>
    );
  }

  return (
    <>
      <img src={photos[currentPhoto]} alt="Display photo" />
      {/* <button onClick={prevPhoto}>Prev</button>
      <button onClick={nextPhoto}>Next</button>
      <div>{photoIndicators}</div> */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button onClick={prevPhoto} variant="contained" color="primary">
          Prev
        </Button>
        <Button onClick={nextPhoto} variant="contained" color="primary">
          Next
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        {photoIndicators}
      </Box>
    </>
  );
}

export default MainWrapper;

