import { Card } from "react-bootstrap";

export default function Cards({ title, img, price }) {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "17rem", height: "575px", border: "none" }}>
        <Card.Img variant="top" src={img} className="h-100" />
        <Card.Body>
          <Card.Title className="text-secondary">{title}</Card.Title>
          <br />
          <Card.Text className="text-primary fw-bold">$ {price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
