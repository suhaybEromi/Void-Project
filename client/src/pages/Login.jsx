import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";
import { AuthContext } from "../components/AuthContext";

export default function Login() {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleUpdate = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
      setData({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="text-bg-dark h-100">
      <Container>
        <Row>
          <Col>
            <h3 className="mt-3 ms-5">Login</h3>
            <form onSubmit={handleSubmit} className="p-5">
              <label>Email</label>
              <input
                type="email"
                className="form-control form-control-lg mb-4"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleUpdate}
                required
              />

              <label>Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleUpdate}
                required
              />

              <button className="btn btn-outline-light btn-lg w-100 mt-5">
                Login
              </button>
            </form>
            <Link className="text-decoration-none fs-3 ms-5" to={"/register"}>
              Register
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
