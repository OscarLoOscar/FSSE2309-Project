import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { ProductListData } from "../../../data/dto/ProductListData";
import anguirus from "../../../assets/Anguirus.png"
import baragon from "../../../assets/Baragon.png"
import destoroyah from "../../../assets/Destoroyah.png";
import godzilla2016 from "../../../assets/Godzilla-4th Form-2016.png";
import godzilla1 from "../../../assets/Godzilla1998.png";
import godzilla2 from "../../../assets/Godzilla1994.png";
import ghidorah from "../../../assets/Ghidorah.png";
import kong from "../../../assets/Kong.png";
import mothra from "../../../assets/Mothra.png";
import rodan from "../../../assets/Rodan.png";
import monsterX from "../../../assets/Monster X.png"
import godzilla3 from "../../../assets/Godzilla-3rd Form-2016.png"
import godzilla4 from "../../../assets/Godzilla-2nd Form-2016.png"
import gigan from "../../../assets/Gigan.png"
import keizerGhidorah from "../../../assets/Keizer Ghidorah.png"
import orga from "../../../assets/Orga.png"


const productPhotoMapping: { [key: number]: string } = {
  1: anguirus,
  2: baragon,
  3: destoroyah,
  4: godzilla2016,
  5: godzilla1,
  6: godzilla2,
  7: ghidorah,
  8: kong,
  9: mothra,
  10: rodan,
  11: monsterX,
  12: godzilla3,
  13: godzilla4,
  14: keizerGhidorah,
  15: gigan,
  16: orga
}


type Props = {
  productData: ProductListData
}

export default function ProductListCard2({ productData }: Props) {
  return (
    <>
      {/* <Container>
        <Grid container spacing={1} justifyContent="center" alignItems="center" style={{ marginTop: 30 }}>
          <Grid spacing={1} sx={{ margin: '0 auto' }}> */}

            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea sx={{ flexGrow: 1, borderRadius: 0 }} >
                <CardMedia
                  component="img"
                  height="200"
                  image={productPhotoMapping[productData.pid]}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {productData.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {`HK$${productData.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    paragraph
                  </Typography>
                  <div style={{ fontSize: "12px", fontWeight: "bolder", color: "black", textAlign: "right" }}>
                    {productData.has_stock ? "In-Stock" : "Out of Stock"}
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>

          {/* </Grid>
        </Grid>
      </Container> */}
    </>
  );
}