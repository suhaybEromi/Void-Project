import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Add() {
  const [addProducts, setAddProducts] = useState({
    title: "",
    imageUrl: "",
    brand: "",
    sizes: [],
    colors: [],
    price: "",
    description: "",
  });

  const handleChange = e => {
    setAddProducts({ ...addProducts, [e.target.name]: e.target.value });
  };

  const handleSizesChange = e => {
    const sizeArray = e.target.value.split(",").map(size => size.trim());
    setAddProducts({ ...addProducts, sizes: sizeArray });
  };

  const handleColorsChange = e => {
    const colorArray = e.target.value.split(",").map(color => color.trim());
    setAddProducts({ ...addProducts, colors: colorArray });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/products",
        addProducts,
      );
      alert(response.data.message);
      setAddProducts({
        title: "",
        imageUrl: "",
        brand: "",
        sizes: [],
        colors: [],
        price: "",
        description: "",
      });
    } catch (err) {
      console.error("Error adding product", err);
      alert("Failed to add product");
    }
  };

  return (
    <div className="text-bg-dark">
      <Container>
        <Row>
          <Link className="mt-4 fs-4" to="/">
            Home
          </Link>
          <Col className="mt-4 d-flex justify-content-center">
            <div className="w-50">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={addProducts.title}
                    placeholder="Enter Title"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>imageUrl</Form.Label>
                  <Form.Control
                    type="text"
                    name="imageUrl"
                    onChange={handleChange}
                    value={addProducts.imageUrl}
                    placeholder="Enter imageUrl"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>brand</Form.Label>
                  <Form.Control
                    type="text"
                    name="brand"
                    onChange={handleChange}
                    value={addProducts.brand}
                    placeholder="Enter brand"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>sizes</Form.Label>
                  <Form.Control
                    type="text"
                    name="sizes"
                    placeholder="Enter sizes (comma-separated)"
                    value={addProducts.sizes.join(",")}
                    onChange={handleSizesChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>colors</Form.Label>
                  <Form.Control
                    type="text"
                    name="colors"
                    placeholder="Enter colors (comma-separated)"
                    value={addProducts.colors.join(",")}
                    onChange={handleColorsChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    onChange={handleChange}
                    value={addProducts.price}
                    placeholder="Enter price"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={addProducts.description}
                    placeholder="Enter description"
                  />
                </Form.Group>

                <button className="btn btn-info mb-5 w-25" type="submit">
                  Submit
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
