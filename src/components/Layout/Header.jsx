import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="header-nav">
      <div>
        <Link to="/" onClick={closeMenu}>
          <img src={logoImg} alt="logo" width={50} height={50} />
        </Link>
      </div>

      {/* Hamburger button - only visible on small screens via CSS */}
      {!menuOpen && (
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
        {/* Close button - only visible when menu is open on small screens */}
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          &times;
        </button>

        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </nav>

      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Header;
