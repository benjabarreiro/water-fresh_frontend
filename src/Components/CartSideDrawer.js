import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function CartSideDrawer({closeCartHandler}) {
  return (
    <div className="cart-side-drawer">
      <div className="cart-side-drawer_overlay" onClick={closeCartHandler}></div>
      <div className="cart-side-drawer_container">
        <FontAwesomeIcon icon={faClose} onClick={closeCartHandler} />
        <h4>Carrito de compras</h4>
      </div>
    </div>
  );
}
