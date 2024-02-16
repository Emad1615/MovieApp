import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Mobile from "./mediaQuery/Mobile";
import Desktop from "./mediaQuery/Desktop";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className={`container-fluid ${styles.nav}`}>
      <p className="text-uppercase ">
        <span>🍿</span> popcorn
      </p>
      <Mobile>
        <button onClick={() => setShow((show) => !show)}>
          <CiMenuBurger />
        </button>
        <Sidebar show={show} setShow={setShow} />
      </Mobile>
      <Desktop>
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
      </Desktop>
    </nav>
  );
}

export default Navbar;
