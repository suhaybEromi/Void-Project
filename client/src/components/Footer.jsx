import { Col, Container, Row } from "react-bootstrap";
import imgNode from "../assets/node.png";
import { Link } from "react-router-dom";

let styleText = "text-decoration-none text-dark";

export default function Footer() {
  return (
    <div>
      <Container className="mb-4">
        <Row>
          <Col lg="3">
            <Link className={styleText}>
              <h2>HELP</h2>
            </Link>
            <Link className={styleText}>
              <p>Contact us</p>
            </Link>
            <Link className={styleText}>
              <p>Returns and Changes</p>
            </Link>
            <Link className={styleText}>
              <p>Shipping & Delivery</p>
            </Link>
            <Link className={styleText}>
              <p>Order Tracking</p>
            </Link>
            <Link className={styleText}>
              <p>FAQ</p>
            </Link>
          </Col>

          <Col lg="3">
            <Link className={styleText}>
              <h2>ABOUT US</h2>
            </Link>
            <Link className={styleText}>
              <p>About us</p>
            </Link>
            <Link className={styleText}>
              <p>Our Stores</p>
            </Link>
            <Link className={styleText}>
              <p>Corporate</p>
            </Link>
            <Link className={styleText}>
              <p>Career Opportunities</p>
            </Link>
            <Link className={styleText}>
              <p>Corporate Support</p>
            </Link>
          </Col>

          <Col lg="3">
            <Link className={styleText}>
              <h2>POLICIES</h2>
            </Link>
            <Link className={styleText}>
              <p>Data Privacy</p>
            </Link>
            <Link className={styleText}>
              <p>Security Policy</p>
            </Link>
            <Link className={styleText}>
              <p>Terms Of use</p>
            </Link>
          </Col>

          <Col lg="3">
            <img className="w-100 mt-5" src={imgNode} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
