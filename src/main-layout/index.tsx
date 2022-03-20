import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from "react-oidc-context";
import { Link } from "react-router-dom";
import { useNavigateNoUpdates } from "../route-utils";
import NavBar from "./navbar";
import SideBar from "./sidebar";

function MainLayout({
  children,
  authenticating,
}: React.PropsWithChildren<{ authenticating?: boolean }>) {
  const [collapseSideBar, setCollapseSideBar] = useState(false);
  const { isAuthenticated, signinSilent, user } = useAuth();
  const navigate = useNavigateNoUpdates();

  useEffect(() => {
    async function checkLogIn() {
      if (!isAuthenticated) {
        try {
          const silentResult = await signinSilent();

          if (silentResult !== null) {
            return;
          }
        } catch {}
        navigate("/login");
      }
    }

    checkLogIn();
  }, [isAuthenticated, navigate, signinSilent]);

  useEffect(() => {
    if (authenticating && isAuthenticated) {
      navigate("/");
    }
  }, [authenticating, isAuthenticated, navigate]);

  const content = !isAuthenticated ? <div>One moment please...</div> : children;

  return (
    <div className="wrapper">
      <SideBar collapseSideBar={collapseSideBar} />

      <div className="main">
        <NavBar
          toggleSideBar={() => setCollapseSideBar(!collapseSideBar)}
          userName={user?.profile.real_name as string | undefined}
        />
        <main className="content">{content}</main>

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
