import React, { useEffect, useContext } from "react";
import Separator from "../Components/Separator";
import { Container } from "react-bootstrap";
import AddProduct from "../Components/BackOffice/AddProduct";
import ProductsList from "../Components/BackOffice/ProductsList";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function BackOffice() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

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
