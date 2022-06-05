import React, { useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Separator from "../Components/Separator";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const initialValues = {
  user: "",
  password: "",
};

const validationSchema = Yup.object({
  user: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
  const { values, errors, touched, getFieldProps } = useFormik({
    initialValues,
    validationSchema,
  });
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = async (e, values) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await axios.post("https://water-fresh-backend.herokuapp.com/login", values);
      login(response.data.userId, response.data.token);
      navigate("/administrador");
    } catch (err) {
      console.log("Hubo un error al intentar iniciar sesion");
      console.log(err);
    }
  };

  const handleDisable = () => {
    if (
      Object.keys(errors).length !== 0 ||
      values.user.length === 0 ||
      values.password.length === 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <Container>
      <Separator />
      <Form className="form">
        <Form.Group className="mb-3" controlId="user">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese usuario"
            {...getFieldProps("user")}
          />
          {touched.user && errors.user && (
            <Form.Text className="error">{errors.user}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese contraseña"
            {...getFieldProps("password")}
          />
          {touched.password && errors.password && (
            <Form.Text className="error">{errors.password}</Form.Text>
          )}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={handleDisable()}
          onClick={(e) => onSubmit(e, values)}
        >
          Iniciar sesión
        </Button>
      </Form>
      <Separator />
    </Container>
  );
}
