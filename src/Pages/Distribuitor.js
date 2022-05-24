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

const onSubmit = async (e, values) => {
  e.preventDefault();
  console.log(values)
  try {
    const response = await axios.post("https://water-fresh-backend.netlify.app/access",values);
    console.log(response);
  } catch (err) {
    console.log("Hubo un error al intentar enviar el mail");
    console.log(err);
  }
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().required("Required"),
});

export default function Distribuitor() {
  const { values, errors, touched, getFieldProps } = useFormik({
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

        <Button
          variant="primary"
          type="submit"
          disabled={handleDisable()}
          onClick={(e) => {
            onSubmit(e, values);
          }}
        >
          Se un distribuidor
        </Button>
      </Form>
      <Separator />
    </Container>
  );
}
