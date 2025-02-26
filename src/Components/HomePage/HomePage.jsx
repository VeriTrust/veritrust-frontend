import SideBar from "../SideBar/SideBar.jsx";
import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={styles.HomeContainer}>
      <SideBar />
    </div>
  );
}
export default HomePage;
