import { Card } from "react-bootstrap";

export default function Cards({ title, img, text }) {
  return (
    <div>
      <Card style={{ width: "17rem", height: "575px", border: "none" }}>
        <Card.Img variant="top" src={img} className="h-100" />
        <Card.Body>
          <Card.Title className="text-secondary">{title}</Card.Title>
          <br />
          <Card.Text className="text-primary fw-bold">{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
