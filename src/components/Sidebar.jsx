import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import styles from "./Sidebar.module.css";
function Sidebar({ show, setShow }) {
  return (
    <Offcanvas
      show={show}
      onHide={() => setShow((show) => !show)}
      scroll={true}
      className="bg-dark"
      style={{ color: "white" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>🍿 POPCORN MENU</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <nav className={styles.sidebarContainer}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/tvshows">TV Shows</NavLink>
            </li>
            <li>
              <NavLink to="/login">Sign in</NavLink>
            </li>
          </ul>
        </nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Sidebar;
