import { Calendar, Home, Plus } from "react-feather";
import { NavLink, useLocation } from "react-router-dom";

function SideBar({ collapseSideBar }: { collapseSideBar: boolean }) {
  const location = useLocation();

  const homeActive = location.pathname === "/" ? " active" : "";
  const shiftsActive =
    location.pathname.startsWith("/shifts") &&
    location.pathname !== "/shifts/new"
      ? " active"
      : "";
  const addShiftActive = location.pathname === "/shifts/new" ? " active" : "";

  return (
    <nav
      id="sidebar"
      className={`sidebar js-sidebar${collapseSideBar ? " collapsed" : ""}`}
    >
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">CrewLog</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Portfolio</li>
          <li className={"sidebar-item" + homeActive}>
            <NavLink className="sidebar-link" to="/">
              <Home /> <span className="align-middle">Home</span>
            </NavLink>
          </li>
          <li className={"sidebar-item" + shiftsActive}>
            <NavLink className="sidebar-link" to="/shifts">
              <Calendar /> <span className="align-middle">Shifts</span>
            </NavLink>
          </li>
          <li className={"sidebar-item" + addShiftActive}>
            <NavLink className="sidebar-link" to="/shifts/new">
              <Plus /> <span className="align-middle">Add Shift</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
