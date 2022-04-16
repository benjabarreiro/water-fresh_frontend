import React from "react";
import { Container, Nav } from "react-bootstrap";
import instagram from "../icons-media/instagram-blanco.png";
import facebook from "../icons-media/facebook-blanco.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Nav className="footer-nav">
          <article>
            <Nav.Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/waterfreshec/"
            >
              <img className="icons-media" src={instagram} alt="" />
            </Nav.Link>

            <Nav.Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/waterfreshec/"
            >
              <img className="icons-media" src={facebook} alt="" />
            </Nav.Link>

            <Nav.Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=593939998966"
            >
              Whatsapp
            </Nav.Link>
          </article>
          <article>
            <Link to="/" className="nav-link-footer">
              Water Fresh
            </Link>
          </article>
        </Nav>
      </Container>
    </footer>
  );
}
