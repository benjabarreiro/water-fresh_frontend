import React, { useState } from "react";
import { Form, Button, Accordion } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  productName: "",
  description: "",
  price: "",
  category: "",
};

const validationSchema = Yup.object({
  productName: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
});

export default function AddProduct() {
  const { values, errors, touched, getFieldProps, resetForm } = useFormik({
    initialValues,
    validationSchema,
  });
  const [img, setImg] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", img[0]);
    formData.append("upload_preset", "sagjmyif");
    try {
      const cloudinary = await axios.post(
        `https://api.cloudinary.com/v1_1/dmpmsmabd/image/upload`,
        formData
      );
      const response = await axios.post("https://water-fresh-backend.herokuapp.com/create", {
        ...values,
        img: cloudinary.data.public_id,
      });
      console.log(response);
      resetForm();
    } catch (err) {
      console.log("Hubo un error");
      console.log(err);
    }
  };

  const handleDisable = () => {
    if (
      Object.keys(errors).length !== 0 ||
      values.productName.length === 0 ||
      img.length === 0 ||
      values.category.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>
          <h4 className="backoffice-title">Agregar un producto al sitio</h4>
        </Accordion.Header>
        <Accordion.Body>
          <Form className="form">
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre del producto"
                {...getFieldProps("productName")}
              />
              {touched.productName && errors.productName && (
                <Form.Text className="error">{errors.productName}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese descripcion"
                {...getFieldProps("description")}
              />
              {touched.description && errors.description && (
                <Form.Text className="error">{errors.description}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese precio"
                {...getFieldProps("price")}
              />
              {touched.price && errors.price && (
                <Form.Text className="error">{errors.price}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Categoria</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Valores aceptados: pulpa o agua"
                {...getFieldProps("category")}
              /> */}
              <Form.Select
                aria-label="Default select example"
                {...getFieldProps("category")}
              >
                <option>Seleccioná una categoría</option>
                <option value="agua">Agua</option>
                <option value="pulpa">Pulpa</option>
              </Form.Select>
              {/* <Form.Text>
                Ingresá pulpa o agua (en minúscula) para visualizar el producto
                agregado en el sitio
              </Form.Text> */}
              {touched.price && errors.price && (
                <Form.Text className="error">{errors.price}</Form.Text>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImg(e.target.files)}
              />
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
              onClick={(e) => onSubmit(e)}
            >
              Se un distribuidor
            </Button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
