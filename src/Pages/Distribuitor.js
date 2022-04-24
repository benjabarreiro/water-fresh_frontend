import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Separator from "../Components/Separator";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
};

const onSubmit = (values) => {
  axios.post("http://localhost:8080/access", values);
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().required("Required"),
});

export default function Distribuitor() {
  const {
    handleSubmit,
    values,
    errors,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

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

  return (
    <Container>
      <Separator />
      <Form className="form" onSubmit={() => {
        handleSubmit()
        }}>
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

        <Button variant="primary" type="submit" disabled={handleDisable()}>
          Se un distribuidor
        </Button>
      </Form>
      <Separator />
    </Container>
  );
}
