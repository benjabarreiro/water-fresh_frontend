import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Image } from "cloudinary-react";

const validationSchema = Yup.object({
  productName: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
});

export default function EditDeleteProduct({ data, setModal, handleRefresh }) {
  const initialValues = {
    ...data,
  };

  const { values, errors, touched, getFieldProps, resetForm } = useFormik({
    initialValues,
    validationSchema,
  });
  const [img, setImg] = useState([]);
  const [preview, setPreview] = useState(null);

  const onDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        "https://water-fresh-backend.herokuapp.com/delete/" + data._id
      );
      console.log(response);
      handleRefresh();
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", img[0]);
    formData.append("upload_preset", "sagjmyif");

    let imgData;

    try {
      if (img.length !== 0) {
        const cloudinary = await axios.post(
          `https://api.cloudinary.com/v1_1/dmpmsmabd/image/upload`,
          formData
        );
        imgData = cloudinary.data.public_id;
      } else {
        imgData = data.img;
      }

      const response = await axios.put(
        "https://water-fresh-backend.herokuapp.com/update",
        {
          ...values,
          img: imgData,
        }
      );
      console.log(response);
      handleRefresh();
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPreview({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Editar/Eliminar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            <Form.Select
              aria-label="Default select example"
              {...getFieldProps("category")}
            >
              <option>Seleccioná una categoría</option>
              <option value="agua">Agua</option>
              <option value="pulpa">Pulpa</option>
            </Form.Select>
            {touched.price && errors.price && (
              <Form.Text className="error">{errors.price}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Imagen</Form.Label>
            {preview ? (
              <img
                className="card-img"
                src={preview.image}
                alt={`Imagen para ${data.productName}`}
              />
            ) : (
              <Image
                className="card-img"
                cloudName="dmpmsmabd"
                publicId={data.img}
                alt={`Imagen de ${data.productName}`}
              />
            )}
            <Form.Control
              type="file"
              onChange={(e) => {
                setImg(e.target.files);
                onImageChange(e);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Text className="text-muted">
              Nunca le vamos a compartir tu datos personales a alguien.
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal(false)}>
          Cancelar
        </Button>
        <Button
          variant="secondary"
          onClick={(e) => {
            onDelete(e);
            setModal(false);
          }}
        >
          Eliminar
        </Button>
        <Button
          variant="primary"
          onClick={(e) => {
            onSubmit(e);
            setModal(false);
          }}
        >
          Guardar cambios
        </Button>
      </Modal.Footer>
    </>
  );
}
