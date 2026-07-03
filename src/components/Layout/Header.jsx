import { Link,NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.jpg";
import { getTodayDate } from "../../utils/helpers";

const Header = () => {
  const todayDate = getTodayDate();
  return (
    <div className="header-nav">
      <div>
        <Link to="/">
          <img src={logoImg} alt="logo" width={50} height={50} />
        </Link>
      </div>
      <nav>
        {/* Using inline styles for active link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          // style={({ isActive }) => ({
          //   color: isActive ? "red" : "black",
          //   fontWeight: isActive ? "bold" : "normal",
          //   textDecoration: "none",
          //   marginRight: "15px",
          // })}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          // style={({ isActive }) => ({
          //   color: isActive ? "red" : "black",
          //   fontWeight: isActive ? "bold" : "normal",
          //   textDecoration: "none",
          //   marginRight: "15px",
          // })}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          // className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}

          // style={({ isActive }) => ({
          //   color: isActive ? "red" : "black",
          //   fontWeight: isActive ? "bold" : "normal",
          //   textDecoration: "none",
          // })}
        >
          Contact
        </NavLink>
      </nav>
      <div className="today-date">{todayDate}</div>
    </div>
  );
};

export default Header;
