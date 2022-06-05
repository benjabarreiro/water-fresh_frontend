import React from "react";
import { Accordion, CardGroup, Card, Col, Row } from "react-bootstrap";/* 
import ItemAction from "./ItemAction"; */
import { Image } from "cloudinary-react";
/* import { faCartPlus } from "@fortawesome/free-solid-svg-icons"; */
/* import { CartContext } from "../CartContext"; */

export default function Pulps({ pulp }) {
  /* const { addToCart } = useContext(CartContext); */
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Pulpas naturales</Accordion.Header>
      <Accordion.Body>
        <CardGroup>
          <Row>
            {pulp.map((p) => (
              <Col key={p._id} sm="6" md="3">
                <Card>
                  {/* <ItemAction action={() => addToCart(p)} icon={faCartPlus}> */}
                    <Image
                      className="card-img"
                      cloudName="dmpmsmabd"
                      publicId={p.img}
                    />
                    <Card.Body>
                      <Card.Title>{p.productName}</Card.Title>
                      {p.description && <Card.Text>{p.description}</Card.Text>}
                      {p.price && <Card.Text>${p.price}</Card.Text>}
                    </Card.Body>
                  {/* </ItemAction> */}
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}
