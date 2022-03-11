import { Col, Container, Row } from "react-bootstrap";
import MainLayout from "../main-layout";
import HoursCard from "./hours-card";

function Home({ authenticating }: { authenticating?: boolean }) {
  return (
    <MainLayout authenticating={authenticating}>
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Hours</h1>

        <Row>
          <Col sm={12}>
            <HoursCard title="Total" />
          </Col>
          <Col sm={12}>
            <HoursCard title="Primary" />
          </Col>
          <Col sm={4}>
            <HoursCard title="Secondary" />
          </Col>
          <Col sm={4}>
            <HoursCard title="Training" />
          </Col>
          <Col sm={4}>
            <HoursCard title="Other" />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

export default Home;
