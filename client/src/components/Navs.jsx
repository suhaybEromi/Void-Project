import { Col, Container, Row, Nav, Navbar } from "react-bootstrap";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

let navbarStyle = "p-2 text-dark text-decoration-none fw-medium";
export default function Navs() {
  return (
    <div className="shadow-sm mb-4">
      <Container>
        <Row>
          <div className="justify-content-center align-items-center d-flex">
            <Col lg="10">
              <Link to="/" className="text-decoration-none">
                <h3 className="text-primary">Tech Haven</h3>
              </Link>
            </Col>

            <Col lg="2">
              <Link to="/sale" className="btn text-primary fs-4 border-0">
                <SlBasket />
              </Link>
            </Col>
          </div>

          <Col lg="12">
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Link className={navbarStyle} to="/">
                      MAN
                    </Link>
                    <Link className={navbarStyle}>WOMAN</Link>
                    <Link className={navbarStyle}>KIDS</Link>
                    <Link className={navbarStyle}>BABY</Link>
                    <Link className="p-2 text-danger text-decoration-none fw-medium">
                      SALE%
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
