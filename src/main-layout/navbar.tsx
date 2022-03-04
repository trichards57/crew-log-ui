import { Navbar, Nav, NavItem, Dropdown } from "react-bootstrap";
import { LogOut, Settings, User } from "react-feather";
import { Link } from "react-router-dom";

function NavBar({
  toggleSideBar,
  userName,
}: {
  toggleSideBar: () => void;
  userName?: string;
}) {
  return (
    <Navbar expand color="light" className="navbar-bg">
      <button
        className="sidebar-toggle js-sidebar-toggle border-0 bg-transparent"
        onClick={() => toggleSideBar()}
      >
        <i className="hamburger align-self-center"></i>
      </button>

      <Navbar.Collapse>
        <Nav navbar className="navbar-align">
          <Dropdown as={NavItem}>
            <Dropdown.Toggle className="nav-icon d-inline-block d-sm-none bg-transparent border-0">
              <Settings className="align-middle" />
            </Dropdown.Toggle>

            <Dropdown.Toggle
              as="a"
              className="nav-link d-none d-sm-inline-block bg-transparent border-0"
            >
              <User className="avatar img-fluid rounded me-1" />{" "}
              <span className="text-dark">{userName ?? "User"}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item as={Link} className="dropdown-item" to="/profile">
                <User className="align-middle me-1" /> Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} className="dropdown-item" to="/settings">
                <Settings className="align-middle me-1" /> Settings &amp;
                Privacy
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                <LogOut className="align-middle me-1" /> Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
