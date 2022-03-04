import { Card, Col, Container, Row } from "react-bootstrap";
import MainLayout from "../main-layout";

function Home() {
  return (
    <MainLayout>
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Blank Page</h1>

        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h5" className="mb-0">
                  Empty card
                </Card.Title>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

export default Home;
