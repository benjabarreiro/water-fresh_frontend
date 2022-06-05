import React, { useEffect, useContext, useState } from "react";
import Separator from "../Components/Separator";
import { Container } from "react-bootstrap";
import AddProduct from "../Components/BackOffice/AddProduct";
import ProductsList from "../Components/BackOffice/ProductsList";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function BackOffice() {
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <Container>
      <Separator />
      <AddProduct handleRefresh={handleRefresh} />
      <Separator />
      <ProductsList handleRefresh={handleRefresh} refresh={refresh} />
      <Separator />
    </Container>
  );
}
