import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { ProductListData } from "../../../data/dto/ProductListData";
import almaviva from "../../../assets/wine/almaviva.png";
import borgogno_no_name from "../../../assets/wine/borgogno_no_name.png";
import branaire_ducru from "../../../assets/wine/branaire_ducru.png";
import cantemerle from "../../../assets/wine/cantemerle.png";
import dissan from "../../../assets/wine/dissan.png";
import domaine_michel_noellat_coteaux_bourguignons_new from "../../../assets/wine/domaine_michel_noellat_coteaux_bourguignons_new.png";
import domaine_pierre_amiot_et_fils_morey_saint_denis_1er_cru_les_millandes from "../../../assets/wine/domaine_pierre_amiot_et_fils_morey_saint_denis_1er_cru_les_millandes.png";
import dominus_estate_napanook from "../../../assets/wine/dominus_estate_napanook.png";
import lafite_rothschild_6 from "../../../assets/wine/lafite_rothschild_6.png";
import lascombes from "../../../assets/wine/lascombes.png";
import leoville_las_cases_90 from "../../../assets/wine/leoville_las_cases_90.png";
import les_griffons_de_pichon_baron_1 from "../../../assets/wine/les_griffons_de_pichon_baron_1.png";
import luce_della_vite_brunello_di_montalcino_1 from "../../../assets/wine/luce_della_vite_brunello_di_montalcino_1.png";
import mouton_2004 from "../../../assets/wine/mouton_2004.png";
import quintessa from "../../../assets/wine/quintessa.png";

const productPhotoMapping: { [key: number]: string } = {
  1: almaviva,
  2: borgogno_no_name,
  3: branaire_ducru,
  4: cantemerle,
  5: dissan,
  6: domaine_michel_noellat_coteaux_bourguignons_new,
  7: domaine_pierre_amiot_et_fils_morey_saint_denis_1er_cru_les_millandes,
  8: dominus_estate_napanook,
  9: lafite_rothschild_6,
  10: lascombes,
  11: leoville_las_cases_90,
  12: les_griffons_de_pichon_baron_1,
  13: luce_della_vite_brunello_di_montalcino_1,
  14: mouton_2004,
  15: quintessa
}


type Props = {
  productData: ProductListData
}

export default function ProductListCard2({ productData }: Props) {
  return (
    <>
      <Card sx={{ maxWidth: 1000 }}>
        <CardActionArea sx={{ flexGrow: 1, borderRadius: 0 }} >
          <CardMedia
            component="img"
            height='auto'
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

    </>
  );
}