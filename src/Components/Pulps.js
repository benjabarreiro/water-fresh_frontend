import React from "react";
import { Accordion, CardGroup, Card } from "react-bootstrap";

export default function Pulps() {
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Pulpas naturales</Accordion.Header>
      <Accordion.Body>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/5617/red-tomato-vegetable.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Pulpa de tomate</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/701774/pexels-photo-701774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Pulpa de mora</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Pulpa de limon</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/zX89SIxwTe1d15kB2j4dGuJugLa94DaqjDB0Mem-fSA/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/SFhHeHZqTlBFQ3Nm/QkhtZ2VYeTZBSGFF/NyZwaWQ9QXBp"
            />
            <Card.Body>
              <Card.Title>Pulpa de arazá</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}
