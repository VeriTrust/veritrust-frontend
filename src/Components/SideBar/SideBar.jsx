import React, { useState } from "react";
import styles from "./SideBar.module.css";
import {Link} from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiLogOut,
  FiCheckSquare,
  FiShoppingCart,
  FiMenu,
  FiMinus,
} from "react-icons/fi";

const SideBar = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(true);
  const [selectedNav, setselectedNav] = useState("Home");

  const toggleSidebar = () => {
    setisSideBarOpen(!isSideBarOpen);
  };

  const handleNavClick = (nav) => {
    setselectedNav(nav);
  };

  const menuItems = [
    { icon: <FiHome className={styles.icon} />, name: "Home" },
    { icon: <FiCheckSquare className={styles.icon} />, name: "Verify" },
    { icon: <FiHome className={styles.icon} />, name: "Health Check" },
    { icon: <FiShoppingCart className={styles.icon} />, name: "Explore" },
    { icon: <FiUser className={styles.icon} />, name: "Profile" },
    { icon: <FiLogOut className={styles.icon} />, name: "Logout" },
  ];

  return (
    <>
      <div
        className={`${styles.sidebar} ${
          isSideBarOpen ? styles.open : styles.closed
        }`}
      >
        <div className={styles.logo}>
          <h1>VeriTrust</h1>
        </div>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <Link to={`/${item.name}`} key={index} className={`${styles.menuItem} ${selectedNav === item.name ? styles.active : ""}`} >
              {item.icon}
              {isSideBarOpen && <span>{item.name}</span>}
              {!isSideBarOpen && (
                <span className={styles.tooltip}>{item.name}</span>
              )}
            </Link>
          ))}
        </ul>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          {isSideBarOpen ? (
            <FiMenu className={styles.icon} />
          ) : (
            <FiMenu className={styles.icon} />
          )}
        </button>
      </div>
    </>
  );
};

export default SideBar;
