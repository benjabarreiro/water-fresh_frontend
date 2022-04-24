import { Navbar as NavBar, Container, Nav } from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavBar bg="light" expand="lg">
      <Container>
        <Link className="nav-link" to="/">
          <img src={logo} alt="Logo Water Fresh" width={100} />
        </Link>
        <div>
          <NavBar.Toggle aria-controls="basic-navbar-nav" />
          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/sobre-nosotros">
                Sobre nosotros
              </Link>
              <Link className="nav-link" to="/distribuidor">
                Distribuidores
              </Link>
            </Nav>
          </NavBar.Collapse>
        </div>
      </Container>
    </NavBar>
  );
}
