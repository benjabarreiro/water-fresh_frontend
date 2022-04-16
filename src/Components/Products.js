import React from "react";
import { Container, Accordion } from "react-bootstrap";
import Water from "./Water";
import Pulps from "./Pulps";

export default function Products() {
  return (
    <Container>
      <h2>Nuestros productos</h2>
      <Accordion alwaysOpen>
        <Water />
        <Pulps />
      </Accordion>
    </Container>
  );
}
