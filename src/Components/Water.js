import React from "react";
import { Accordion, CardGroup, Card } from "react-bootstrap";

export default function Water() {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Aguas naturales</Accordion.Header>
      <Accordion.Body>
        <CardGroup>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://i.ebayimg.com/images/g/SKwAAOSw0rVe39Xn/s-l1600.jpg"
            />
            <Card.Body>
              <Card.Title>Botellon con grifo</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://media.istockphoto.com/photos/plastic-bottles-of-natural-spring-water-picture-id1193333115?k=20&m=1193333115&s=612x612&w=0&h=COFQwxwapcKgMMVGfeRAYWFdDGjcbiN5AeHPdo9JwjY="
            />
            <Card.Body>
              <Card.Title>Botellon sin grifo</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://media.istockphoto.com/photos/several-plastic-water-bottles-on-white-background-picture-id1146755093?k=20&m=1146755093&s=612x612&w=0&h=GAQl0mBtsRybamjTvlljmPDRR1uSQWlmCccq9rVtRvo="
            />
            <Card.Body>
              <Card.Title>Botella</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}
