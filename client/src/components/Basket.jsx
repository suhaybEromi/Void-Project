import { Col, Container, Row } from "react-bootstrap";
import Navs from "./Navs.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import imageBasket from "../assets/blues.png";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function Basket() {
  return (
    <div>
      <Navs />
      <Container>
        <Row className="align-items-center">
          <Col lg="4" className="d-flex justify-content-center">
            <img src={imageBasket} className="w-50" />
          </Col>

          <Col lg="4" className="text-center">
            <p>1x</p>
            <h5>26,000</h5>
            <div className="border border-1 w-50 mx-auto d-flex justify-content-center align-items-center">
              <button className="border-0 btn text-danger">
                <MdOutlineDeleteOutline />
              </button>
              <button className="border-0 btn">-</button>
              <p className="mb-1">1</p>
              <button className="border-0 btn">+</button>
            </div>
          </Col>

          <Col lg="4">
            <h3>LCW ECO Embroidered Men's Cap Hat</h3>
            <p className="text-secondary mt-5">Cash Price</p>
            <h4 className="text-primary mb-4">29,000</h4>
            <Link
              className="text-decoration-none btn btn-primary w-100 btn-lg"
              to="/sale"
            >
              ADD TO CART
            </Link>
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
