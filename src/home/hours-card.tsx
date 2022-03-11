import { Card } from "react-bootstrap";

function HoursCard(props: { title: string }) {
  const { title } = props;

  return (
    <Card>
      <Card.Header>
        <Card.Title as="h5" className="mb-0">
          {title}
        </Card.Title>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
}

export default HoursCard;
