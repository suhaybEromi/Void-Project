import { Col, Container, Row } from "react-bootstrap";
import Navs from "./Navs.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

import { MdOutlineDeleteOutline } from "react-icons/md";
import imageBasket from "../assets/blues.png";

export default function Sale() {
  return (
    <div>
      <Navs />
      <Container>
        <Row className="align-items-center">
          <Col lg="4" className="d-flex justify-content-center">
            <img src={imageBasket} className="w-50" />
          </Col>

          <Col lg="3"></Col>

          <Col lg="5">
            <h3>LCW ECO Embroidered Men's Cap Hat</h3>
            <p className="text-secondary mt-5">Cash Price</p>
            <h4 className="text-primary mb-4">29,000</h4>
            <button className="btn btn-primary w-100 btn-lg">
              <Link className="text-decoration-none text-light" to="/sale">
                ADD TO CART
              </Link>
            </button>
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <Container className="mt-5">
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
