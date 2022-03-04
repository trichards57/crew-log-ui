import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import SideBar from "./sidebar";

function MainLayout({ children }: React.PropsWithChildren<{}>) {
  const [collapseSideBar, setCollapseSideBar] = useState(false);

  return (
    <div className="wrapper">
      <SideBar collapseSideBar={collapseSideBar} />

      <div className="main">
        <NavBar toggleSideBar={() => setCollapseSideBar(!collapseSideBar)} />
        <main className="content">{children}</main>

        <footer className="footer">
          <Container fluid>
            <Row className="text-muted">
              <Col xs={7} className="text-start">
                <p className="mb-0">
                  Template :{" "}
                  <a
                    className="text-muted"
                    href="https://adminkit.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>AdminKit</strong>
                  </a>{" "}
                  &copy;, Website Copyright &copy; 2022 Tony Richards
                </p>
              </Col>
              <Col xs={5} className="text-end">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link className="text-muted" to="/privacy">
                      Privacy
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="text-muted" to="/terms">
                      Terms
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </div>
  );
}

export default MainLayout;
