import React from "react";
import BannerHome from "../Components/BannerHome";
import Separator from "../Components/Separator";
import Products from "../Components/Products";

export default function Home() {
  return (
    <>
      <BannerHome />
      <Separator />
      <Products />
      <Separator />
    </>
  );
}
