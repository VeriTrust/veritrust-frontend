import React, { useState } from "react";
import styles from "./SideBar.module.css";
import logo from "../../Images/ai.png";
import {
  FiHome,
  FiChevronDown,
  FiUser,
  FiLogOut,
  FiCheckSquare,
} from "react-icons/fi";

const SideBar = () => {
  const [isSideBarOpen, setisSideBarOpen] = useState(true);

  const toggleSidebar = () => {
    setisSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
{ !isSideBarOpen &&   <button onClick={toggleSidebar}>Open</button>}
   {isSideBarOpen && <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <ul className={styles.menu}>
        <li>
          <FiHome className={styles.icon} />
          Home
        </li>
        <li  className={styles.dropdown}>
          <div className={styles.verify}>
            <FiCheckSquare className={styles.icon} />
            Verify
          </div>
        </li>
        <li>
          <FiHome className={styles.icon} />
          Health Check
        </li>
        <li>
          <FiHome className={styles.icon} />
          Explore
        </li>
        <li>
          <FiUser className={styles.icon} />
          Profile
        </li>
        <li>
          <FiLogOut className={styles.icon} />
          Logout
        </li>
        <li onClick={toggleSidebar}>
          <FiLogOut className={styles.icon} />
          close
        </li>
      </ul>
    </div>}
    </>
  );
};

export default SideBar;
