import styles from "./LandingPage.module.css";
import {Link} from "react-router-dom"
import CardContainer from "../CardContainer/CardConatiner.jsx";
import {cards} from "../../Store/FeatureCard.js"
function LandingPage() {
  
  return (
    <>
      <div className={styles.LandingPage}>
        <p className={`${styles.desc} ${styles.gradientText}`}>
          Verify Brand Claims in Seconds
        </p>
        <p className={`${styles.subDesc} ${styles.gradientText}`}>
          {" "}
          Don't Trust , Just Verify it!
        </p>
        <p className={styles.subDesc1}>
          AI Powered Accuracy | Instant Analysis | Ethical Comsumerism
        </p>

        <Link to="/login" className="button">
          Get Started
        </Link>
      </div>

     <CardContainer cards={cards} title="Features" bgcolor="#d5bddb"/>
      
    </>
  );
}
export default LandingPage;
