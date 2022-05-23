import React, { useEffect, useState } from "react";
import { Row, Col, Card, Modal, Button } from "react-bootstrap";
import { Image } from "cloudinary-react";
import axios from "axios";
import ItemAction from "../ItemAction";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditDeleteProduct from "./EditDeleteProduct";

export default function ProductsList() {
  const [water, setWater] = useState([]);
  const [pulp, setPulp] = useState([]);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({});
  const getProducts = async () => {
    try {
      const products = await axios.get("http://localhost:8080/list");
      setWater(products.data.water);
      setPulp(products.data.pulp);
    } catch (err) {}
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div>
        <Modal show={modal} onHide={() => setModal(false)}>
          <EditDeleteProduct data={data} setModal={setModal} />
        </Modal>
        <Row>
          {water.map((w) => (
            <Col sm="6" md="4" key={w._id}>
              <Card>
                <ItemAction
                  action={() => {
                    setModal(true);
                    setData(w);
                  }}
                  icon={faPenToSquare}
                >
                  <Image
                    className="card-img"
                    cloudName="dmpmsmabd"
                    publicId={w.img}
                  />
                  <Card.Body>
                    <Card.Title>{w.productName}</Card.Title>
                    {w.description && <Card.Text>{w.description}</Card.Text>}
                    {w.price && <Card.Text>${w.price}</Card.Text>}
                  </Card.Body>
                </ItemAction>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {pulp.map((p) => (
            <Col sm="6" md="4" key={p._id}>
              <Card>
                <ItemAction
                  action={() => {
                    setModal(true);
                    setData(p);
                  }}
                  icon={faPenToSquare}
                >
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
                </ItemAction>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
