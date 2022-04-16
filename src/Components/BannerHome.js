import React from "react";
import { Image } from "react-bootstrap";

export default function BannerHome() {
  return (
    <section className="banner-home">
      <Image
        className="banner-home-img"
        src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=1"
      />
      <div className="banner-home_titles">
        <h1>Water Fresh</h1>
        <h6>Agua pura y natural</h6>
        <h6>Para todas las familias ecuatorianas</h6>
      </div>
    </section>
  );
}
