import { Link, useLocation } from "react-router-dom";
import logo from "../../Images/ai.png";
import styles from "./Header.module.css";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const location = useLocation();
  const currPath = location.pathname;

  // Function to determine the authentication link
  const getAuthLink = () => {
    if (currPath === "/signup") return { to: "/login", text: "Login" };
    if (currPath === "/login") return { to: "/signup", text: "Signup" };
    return { to: "/login", text: "Logout" };
  };

  const { to: authLink, text: authText } = getAuthLink();

  //Logic to set active link
  const [activeLink, setActiveLink] = useState("Home");

  const hanldeNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={styles.Header}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation Menu */}
      <ul className={styles.navMenus}>
        <Link
          to="/Home"
          className={`${styles.navMenu} ${
            activeLink === "Home" && styles.active
          } `}
          onClick={() => hanldeNavClick("Home")}
        >
          Home
        </Link>

        <Link
          to="/"
          className={`${styles.navMenu} ${
            activeLink === "Verify" && styles.active
          } `}
          onClick={() => hanldeNavClick("Verify")}
        >
          Verify
        </Link>

        <Link
          to="/"
          className={`${styles.navMenu} ${
            activeLink === "Explore" && styles.active
          } `}
          onClick={() => hanldeNavClick("Explore")}
        >
          Explore
        </Link>

        <Link
          to="/"
          className={`${styles.navMenu} ${
            activeLink === "Discover" && styles.active
          } `}
          onClick={() => hanldeNavClick("Discover")}
        >
          Discover
        </Link>

        <Link
          to="/"
          className={`${styles.navMenu} ${
            activeLink === "AboutUS" && styles.active
          } `}
          onClick={() => hanldeNavClick("AboutUs")}
        >
          About Us
        </Link>
      </ul>

      {/* Profile & Auth Buttons */}
      <ul className={`${styles.navMenus} ${styles.buttonMenu}`}>
        <Link to="/" className="button">
          Profile
        </Link>
        <Link to="/login" className="button">
          LogIn
        </Link>

       
      </ul>
    </div>
  );
}

export default Header;
