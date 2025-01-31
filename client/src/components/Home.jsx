import { signOut } from "firebase/auth";
import { auth } from "./firebase.js";
import Navs from "./Navs.jsx";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards.jsx";

import imgShirt from "../assets/shirt.png";
import imgBlues from "../assets/blues.png";
import imgTrousers from "../assets/trousers.png";
import imgMan from "../assets/man.png";
import imgJacket from "../assets/jacket.png";
import imgBluesWinter from "../assets/blueswinter.png";
import imgHood from "../assets/hood.png";
import imgShirtPajamas from "../assets/shirtpajamas.png";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-bg-light">
      <Navs />
      <Container className="mb-5">
        <div className="mb-4">
          <h3>Man</h3>
          <p>6,566 items are listed</p>
        </div>
        <Row>
          <Col lg="3" className="shadow-sm">
            <Link to="/basket" className="text-decoration-none">
              <Cards title="Tech Haven" img={imgShirt} text="27,000" />
            </Link>
          </Col>

          <Col lg="3" className="shadow-sm">
            <Link to="/basket" className="text-decoration-none">
              <Cards title="Tech Haven" img={imgBlues} text="29,000" />
            </Link>
          </Col>

          <Col lg="3" className="shadow-sm">
            <Link to="/basket" className="text-decoration-none">
              <Cards title="Tech Haven" img={imgTrousers} text="30,000" />
            </Link>
          </Col>

          <Col lg="3" className="shadow-sm">
            <Link to="/basket" className="text-decoration-none">
              <Cards title="Tech Haven" img={imgMan} text="40,000" />
            </Link>
          </Col>

          <div className="mt-5"></div>
          <Col lg="3" className="shadow-sm">
            <Link to="/basket" className="text-decoration-none">
              <Cards title="Tech Haven" img={imgJacket} text="25,000" />
            </Link>
          </Col>

          <Col lg="3" className="shadow-sm">
            <Link tpo="/basket" className="text-decoration-none">
              <Cards title="Tech Haven" img={imgBluesWinter} text="15,000" />
            </Link>
          </Col>

          <Col lg="3" className="shadow-sm">
            <Link to="/basket" className="text-decoration-none">
              <Cards title="Tech Haven" img={imgHood} text="10,000" />
            </Link>
          </Col>

          <Col lg="3" className="shadow-sm">
            <Link to="/basket" className="text-decoration-none">
              <Cards title="Tech Haven" img={imgShirtPajamas} text="50,000" />
            </Link>
          </Col>
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
