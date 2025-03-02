import { Col, Container, Row, Form } from "react-bootstrap";
import Navs from "./Navs.jsx";
import Footer from "./Footer.jsx";
import { Link, useParams } from "react-router-dom";
import imageBasket from "../assets/blues.png";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/${productId}`,
        );
        setProduct(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p className="text-center fs-3 fw-bold mt-3">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p className="text-center fs-3 fw-bold mt-3">Product not found</p>;
  }

  return (
    <div>
      <Navs />
      <Container>
        <Row className="align-items-center">
          <Col lg="4">
            <img src={imageBasket} className="w-50" />
          </Col>

          <Col lg="4">
            <p className="text-primary fs-5">
              Brand: <span>{product.brand}</span>
            </p>
            <h2>{product.description}</h2>
            <hr />
            <p className="text-danger">
              <span className="text-secondary">Price: </span> $ {product.price}
            </p>
            <br />
            <h4 className="text-secondary">Size: </h4>
            <Form.Select className="w-50">
              <option>Select Size</option>
              {product.sizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </Form.Select>
            <br />
            <Form.Select className="w-50">
              <option>Select Color</option>
              {product.colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </Form.Select>

            <div className="border border-1 w-50 mt-3 d-flex justify-content-center align-items-center">
              <button className="border-0 btn text-danger">
                <MdOutlineDeleteOutline />
              </button>
              <button className="border-0 btn">-</button>
              <p className="mb-1">{product.quantity}</p>
              <button className="border-0 btn">+</button>
            </div>
          </Col>

          <Col lg="4">
            <div className="border border-2 p-3">
              <h3>{product.title}</h3>
              <h4 className="text-primary mb-4">$ {product.price}</h4>
              <Link
                className="text-decoration-none btn btn-primary w-100 btn-lg"
                to="/sale"
              >
                ADD TO CART
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <Container className="mt-4">
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
