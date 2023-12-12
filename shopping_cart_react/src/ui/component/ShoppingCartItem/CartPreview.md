import React, { useContext } from "react";
import classNames from "classnames";
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart,
  toggleCartPopup,
} from "./contexts/cart"; // Assuming 'contexts/cart' is in the same directory
import { useNavigate } from "react-router-dom";
import { ProductListData } from "../../../data/dto/ProductListData";
import { Item } from "../../../data/dto/TransactionDetailData";
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


const productPhotoMapping: { [key: number]: string, [name: string]: string } = {
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

type State = {
  productData: ProductListData;
  transactionProduct: Item;
}

export default function CartPreview({ transactionProduct, productData }: State) {
  const { items, isCartOpen } = useContext(CartStateContext)!; // Use "!" for non-null assertion
  const dispatch = useContext(CartDispatchContext)!;
  const navigate = useNavigate();

  const handleRemove = (productId: number) => {
    return removeFromCart(dispatch, productId);
  };

  const handleProceedCheckout = () => {
    toggleCartPopup(dispatch);
    navigate("/checkout");
  };

  return (

    <>
    <Card
  color="neutral"
  invertedColors={false}
  orientation="horizontal"
  size="md"
  variant="outlined"
/>
    </>
    <div className={classNames("cart-preview", { active: isCartOpen })}>
      <ul className="cart-items">
        {items.map((product) => {
          return (
            <li className="cart-item" key={productData.name}>
              <img className="product-image" src={productPhotoMapping[transactionProduct.product.pid]}
                alt={productPhotoMapping[productData.name]} />
              <div className="product-info">
                <p className="product-name">{productData.name}</p>
                <p className="product-price">{productData.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">
                  {`${product.quantity} ${product.quantity > 1 ? "Nos." : "No."}`}
                </p>
                <p className="amount">{product.quantity * productData.price}</p>
              </div>
              <button
                className="product-remove"
                onClick={() => handleRemove(product.id)}
              >
                ×
              </button>
            </li>
          );
        })}
      </ul>
      <div className="action-block">
        <button
          type="button"
          className={classNames({ disabled: items && items.length === 0 })}
          onClick={handleProceedCheckout}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};
