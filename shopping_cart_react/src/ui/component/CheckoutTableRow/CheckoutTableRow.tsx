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
import {Item} from "../../../data/dto/TransactionDetailData";

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
    transactionProduct: Item
}

export default function CheckoutTableRow({transactionProduct}: Props) {
    return (
        <>
            <tr>
                <th scope="row">
                    <div className="d-flex align-items-center bg-white">
                        <img src={productPhotoMapping[transactionProduct.product.pid]}
                             className="img-fluid rounded-3 bg-transparent"
                             style={{width: "120px"}} alt="Product"/>
                        <div className="ms-4 pt-3 align-items-center justify-content-center bg-white">
                            <p className="mb-2 bg-white">{transactionProduct.product.name}</p>
                        </div>
                    </div>
                </th>
                <td className="align-middle">
                    <p className="mb-0 bg-white" style={{fontWeight: "500"}}>{transactionProduct.product.price.toLocaleString(undefined,{style: "currency", currency: "HKD"})}</p>
                </td>
                <td className="align-middle">
                    <div className="d-flex flex-row bg-white">
                        <p className="mb-0 bg-white ps-2" style={{fontWeight: "500"}}>{transactionProduct.quantity}</p>
                    </div>
                </td>
                <td className="align-middle">
                    <p className="mb-0 bg-white" style={{fontWeight: "500"}}>{transactionProduct.subtotal.toLocaleString(undefined,{style: "currency", currency: "HKD"})}</p>
                </td>
            </tr>
        </>
    )
}