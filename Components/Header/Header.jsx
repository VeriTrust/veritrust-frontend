import { Link, useLocation } from "react-router-dom";
import logo from "../../src/Images/ai.png";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();
  const currPath = location.pathname;

  // Function to determine the authentication link
  const getAuthLink = () => {
    if (currPath === "/signup") return { to: "/login", text: "Login" };
    if (currPath === "/login") return { to: "/signup", text: "Signup" };
    return { to: "/login", text: "Logout" };
  };

  const { to: authLink, text: authText } = getAuthLink();

  return (
    <div className={styles.Header}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation Menu */}
      <ul className={styles.navMenus}>
        <Link to="/" className={styles.navMenu}>Home</Link>
        <Link to="/" className={styles.navMenu}>Verify</Link>
        <Link to="/" className={styles.navMenu}>Explore</Link>
        <Link to="/" className={styles.navMenu}>Discover</Link>
        <Link to="/" className={styles.navMenu}>About Us</Link>
      </ul>

      {/* Profile & Auth Buttons */}
      <ul className={`${styles.navMenus} ${styles.buttonMenu}`}>
        <Link to="/" className={styles.button}>Profile</Link>
        <Link to={authLink} className={styles.button}>
          {authText}
        </Link>
      </ul>
    </div>
  );
}

export default Header;
