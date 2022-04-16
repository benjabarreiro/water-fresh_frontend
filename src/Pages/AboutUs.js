import React from "react";
import { Image, Container } from "react-bootstrap";
import Separator from "../Components/Separator";

export default function AboutUs() {
  return (
    <main>
      <Separator />
      <Container>
        <h2 className="about-us-title">Quienes somos</h2>
        <p className="about-us-paragraph">
          Somos una empresa ecuatoriana de bebidas hidratantes naturales y
          productos alimenticios saludables constituida en el año 2017 con
          procesos sistemáticos estandarizados en la purificación de agua
          embotellada y tratamientos industriales en la producción de alimentos
          de calidad a través de tecnología, maquinaria y personal profesional
          altamente calificado comprometido con el cliente para brindar salud
          sabor y bienestar a las familias ecuatorianas.
        </p>
      </Container>
      <Separator />

      <section className="banner-home">
        <Image
          className="about-us-img"
          src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=1"
        />
      </section>

      <Separator />

      <Container>
        <h2 className="about-us-title">Nuestra misión</h2>
        <p className="about-us-paragraph">
          Water Fresh es una empresa riobambeña de soluciones hidratantes
          dedicada al tratamiento, producción y comercialización de agua
          embotellada y alimentos sanos con alto valor nutricional a través de
          maquinaria, tecnología, personal profesional capacitado, procesos
          estandarizados de un producto de calidad capaz de satisfacer las
          necesidades del mercado objetivo enfocado en la alimentación saludable
          basado en la filosofía Salud, Sabor y Bienestar.
        </p>
      </Container>
      <Separator />
      <section className="banner-home">
        <Image
          className="about-us-img2"
          src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
      </section>
      <Separator />
      <Container>
        <h2 className="about-us-title">Nuestra visión</h2>
        <p className="about-us-paragraph">
          En el año 2024 ser una empresa líder en el mercado riobambeño y
          referente a nivel nacional especializada en la hidratación,
          alimentación saludable a través de una cartera amplia de productos
          enfocados a brindar soluciones que impulsen a las familias
          ecuatorianas tener un estilo de vida saludable.
        </p>
      </Container>
      <Separator />
    </main>
  );
}
