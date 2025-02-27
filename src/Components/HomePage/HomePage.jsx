import SideBar from "../SideBar/SideBar.jsx";
import styles from "./HomePage.module.css";
import { cards } from "../../Store/VerifyCards.js";
import Card from "../Card/Card.jsx";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className={styles.HomeContainer}>
      <SideBar />
      <div className={styles.MainPage}>
        <div className={styles.banner}>
          <div className={styles.bannerContent}> 
            <h1 className={styles.heading}> Welcome To VeriTrust 😎</h1>
            <p>
              {" "}
              Unveil the truth behind every food label. Scan product details,
              verify brand claims, and make informed choices with confidence.🚀
            </p>
          </div>
        </div>

        {/* <div className={styles.cardContainer}>
          {cards.map((card) => (
            <Link to={card.link} className={styles.link}><Card key={card.id} card={card} /></Link>
          ))}
        </div> */}
      </div>
    </div>
  );
}
export default HomePage;
