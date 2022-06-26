import React, { useState, useEffect } from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import Separator from "../Components/Separator";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().required("Required"),
});

export default function Distribuitor() {
  const {
    values,
    errors,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues,
    validationSchema,
  });
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", description: "" });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const redirect = useCallback((link) => navigate(link), [navigate])

  useEffect(() => {
    if(show && !error) {
      setTimeout(() => redirect('/'), 5000)
    }
    if(error) {
      setTimeout(() => setShow(false), 5000)
    }
  }, [show, error, redirect])

  const onSubmit = async (e, values) => {
    e.preventDefault()
    try {
      await axios.post("https://water-fresh-backend.herokuapp.com/access", values);
      setModalInfo({
        title: "Éxito",
        description:
          "Tus datos se registraron exitosamente. Una persona de Water Fresh se contactará contigo!",
      });
      setShow(true);
    }
    catch(err) {
      console.log('Hubo un error al intentar enviar el mail')
      console.log(err)
      setError(true)
      setModalInfo({
        title: "Error",
        description:
          "Hubo un error al intentar registrar tus datos. Vuelve a intentarlo más tarde",
      });
      setShow(true);
    }
  };

  const handleDisable = () => {
    if (
      Object.keys(errors).length !== 0 ||
      values.fullName.length === 0 ||
      values.email.length === 0 ||
      values.phone.length === 0
    ) {
      return true;
    }
    return false;
  };

  const handleClose = () => {
    if(show && !error) {
       redirect('/')
    }
    if(error) {
      setShow(false)
    }
  }

  return (
    <Container>
      <Separator />
      <Form className="form">
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese nombre completo"
            {...getFieldProps("fullName")}
          />
          {touched.fullName && errors.fullName && (
            <Form.Text className="error">{errors.fullName}</Form.Text>
          )}
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese teléfono"
            {...getFieldProps("phone")}
          />
          {touched.phone && errors.phone && (
            <Form.Text className="error">{errors.phone}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Text className="text-muted">
            Nunca le vamos a compartir tu datos personales a alguien.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={handleDisable()} onClick={(e) => onSubmit(e, values)}>
          Se un distribuidor
        </Button>
      </Form>
      <Separator />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{modalInfo.title}</Modal.Title>
        </Modal.Header>
            <Modal.Body>{modalInfo.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
