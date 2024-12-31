import logo from "../assets/fcb_logo_PNG13.png";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} width="50px" />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/Products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/About">
          <li>About</li>
        </NavLink>
        <NavLink to="/Contact">
          <li>Contacts</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/about")}>Get Started</button>
    </div>
  );
};

export default Navbar;
