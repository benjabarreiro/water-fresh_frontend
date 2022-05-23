import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import Water from "./Water";
import Pulps from "./Pulps";
import axios from "axios";

export default function Products() {
  const [water, setWater] = useState([]);
  const [pulp, setPulp] = useState([]);
  const getProducts = async () => {
    try {
      const products = await axios.get("http://localhost:8080/list");
      setWater(products.data.water);
      setPulp(products.data.pulp);
    } catch (err) {}
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <h2>Nuestros productos</h2>
      <Accordion alwaysOpen>
        <Water water={water} />
        <Pulps pulp={pulp} />
      </Accordion>
    </Container>
  );
}
