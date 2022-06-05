import React, { useContext } from "react";
import { Accordion, CardGroup, Card, Row, Col } from "react-bootstrap";
/* import ItemAction from "./ItemAction"; */
import { Image } from "cloudinary-react";
/* import { faCartPlus } from "@fortawesome/free-solid-svg-icons"; */
/* import { CartContext } from "../CartContext"; */

export default function Water({ water }) {
  /* const { addToCart } = useContext(CartContext); */
  return (
    <>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Aguas naturales</Accordion.Header>
        <Accordion.Body>
          <CardGroup>
            <Row>
              {water.map((w) => (
                <Col sm="6" md="4" key={w._id}>
                  <Card>
                    {/* <ItemAction action={() => addToCart(w)} icon={faCartPlus}> */}
                      <Image
                        className="card-img"
                        cloudName="dmpmsmabd"
                        publicId={w.img}
                      />
                      <Card.Body>
                        <Card.Title>{w.productName}</Card.Title>
                        {w.description && (
                          <Card.Text>{w.description}</Card.Text>
                        )}
                        {w.price && <Card.Text>${w.price}</Card.Text>}
                      </Card.Body>
                   {/*  </ItemAction> */}
                  </Card>
                </Col>
              ))}
            </Row>
          </CardGroup>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}
