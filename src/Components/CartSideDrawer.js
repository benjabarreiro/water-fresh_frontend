import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { Image } from "cloudinary-react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
});

export default function CartSideDrawer({ closeCartHandler }) {
  const { cart, addToCart, reduceQuantity } = useContext(CartContext);

  const { values, errors, touched, getFieldProps } = useFormik({
    initialValues,
    validationSchema,
  });
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", description: "" });

  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), 5000);
    }
  }, [show]);

  const orderHandler = async (e, values, email) => {
    e.preventDefault();
    try {
      await axios.post("https://water-fresh-backend.herokuapp.com/send-order", {
        values,
        email,
      });
      setModalInfo({
        title: "Éxito",
        description:
          "Tu orden se registró exitosamente. Una persona de Water Fresh se contactará contigo!",
      });
      setShow(true);
    } catch (err) {
      setModalInfo({
        title: "Error",
        description:
          "Hubo un error al intentar enviar tu orden. Vuelve a intentarlo más tarde",
      });
      setShow(true);
    }
  };

  const handleDisable = () => {
    if (Object.keys(errors).length !== 0 || values.email.length === 0) {
      return true;
    }
    return false;
  };
  return (
    <div className="cart-side-drawer">
      <div
        className="cart-side-drawer_overlay"
        onClick={closeCartHandler}
      ></div>
      <div className="cart-side-drawer_container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h4>Carrito de compras</h4>
          <FontAwesomeIcon icon={faClose} onClick={closeCartHandler} />
        </div>
        {cart.map((item) => (
          <div className="cart-item"
            key={item._id}
          >
            <Image
              className="card-img cart-img"
              cloudName="dmpmsmabd"
              publicId={item.img}
            />
            <div style={{ marginLeft: "8px" }}>
              <p className="cart-item-name">{item.productName}</p>
              <p className="cart-item-counter">
                Cantidad: {item.quantity}{" "}
                <span
                className="cart-item-action"
                  style={{
                    border: "1px solid",
                    padding: "4px",
                    borderRadius: "5px",
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() => reduceQuantity(item)}
                    style={{ margin: "0px 4px" }}
                    icon={faMinus}
                  />{" "}
                  <FontAwesomeIcon
                    onClick={() => addToCart(item)}
                    style={{ margin: "0px 4px" }}
                    icon={faPlus}
                  />
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese email"
              {...getFieldProps("email")}
            />
            {touched.email && errors.email && (
              <Form.Text className="error">{errors.email}</Form.Text>
            )}
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            disabled={handleDisable()}
            onClick={(e) => orderHandler(e, cart, values.email)}
          >
            Enviar orden
          </Button>
        </Form>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalInfo.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
