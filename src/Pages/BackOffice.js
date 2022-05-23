import React, { useEffect, useContext } from "react";
import Separator from "../Components/Separator";
import { Container } from "react-bootstrap";
import AddProduct from "../Components/BackOffice/AddProduct";
import ProductsList from "../Components/BackOffice/ProductsList";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function BackOffice() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  return (
    <Container>
      <Separator />
      <AddProduct />
      <Separator />
      <ProductsList />
      <Separator />
    </Container>
  );
}
