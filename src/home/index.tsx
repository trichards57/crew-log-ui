import { Col, Container, Row } from "react-bootstrap";
import MainLayout from "../main-layout";
import HoursCard from "./hours-card";

function Home({ authenticating }: { authenticating?: boolean }) {
  return (
    <MainLayout authenticating={authenticating}>
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Hours</h1>

        <Row>
          <Col xl lg={12} sm={6}>
            <HoursCard title="Total" />
          </Col>
          <Col xl lg={3} sm={6}>
            <HoursCard title="Primary" />
          </Col>
          <Col xl lg={3} sm={4}>
            <HoursCard title="Secondary" />
          </Col>
          <Col xl lg={3} sm={4}>
            <HoursCard title="Training" />
          </Col>
          <Col xl lg={3} sm={4}>
            <HoursCard title="Other" />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

export default Home;
