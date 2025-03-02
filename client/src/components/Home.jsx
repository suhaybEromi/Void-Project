import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";
import Navs from "./Navs.jsx";
import Footer from "./Footer.jsx";
import Cards from "./Cards.jsx";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import imgShirt from "../assets/shirt.png";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [addProducts, setAddProducts] = useState({
    title: "",
    imageUrl: "",
    brand: "",
    sizes: "",
    colors: "",
    price: "",
    quantity: "",
    description: "",
  });

  const handleSubmit = () => {};

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then(products => {
        setProducts(products.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="text-bg-light">
      <Navs />
      <Container className="mb-5">
        <div className="mb-4">
          <Link to="/add" className="text-decoration-none">
            ADD
          </Link>
          <br />
          <br />
          <h3>Man</h3>
          <p>( {products.length} ) Items</p>
        </div>
        <Row className="g-4">
          {products.map(product => (
            <Col key={product._id} lg={4} md={6} sm={12} className="shadow-sm">
              <Link
                to={`/detail/${product._id}`}
                className="text-decoration-none"
              >
                <Cards
                  title={product.title}
                  img={product.img || imgShirt}
                  price={product.price}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <br />
      <br />

      <Container className="mt-5">
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>

      <br />
      <button onClick={() => signOut(auth)}>SignOut</button>
    </div>
  );
}
