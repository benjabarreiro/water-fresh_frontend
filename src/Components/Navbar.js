import { Navbar as NavBar, Container, Nav } from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import CartSideDrawer from "./CartSideDrawer";
import { CartContext } from "../CartContext";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const { cartQty } = useContext(CartContext);

  const closeCartHandler = () => {
    setOpenCart(false);
  };
  return (
    <NavBar bg="light" expand="lg">
      <Container>
        <Link className="nav-link" to="/">
          <img src={logo} alt="Logo Water Fresh" width={100} />
        </Link>
        <div className="navbar-menu">
          <NavBar.Toggle aria-controls="basic-navbar-nav" />
          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/administrador">
                Editar Sitio
              </Link>
              <Link className="nav-link" to="/sobre-nosotros">
                Sobre nosotros
              </Link>
              <Link className="nav-link" to="/distribuidor">
                Distribuidores
              </Link>
            </Nav>
          </NavBar.Collapse>
          <FontAwesomeIcon
            icon={faShoppingCart}
            onClick={() => setOpenCart(!openCart)}
          />
          {cartQty}
          {openCart && <CartSideDrawer closeCartHandler={closeCartHandler} />}
        </div>
      </Container>
    </NavBar>
  );
}
