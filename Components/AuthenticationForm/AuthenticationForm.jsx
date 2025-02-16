import google from "../../src/Images/google.png";
import {Link } from "react-router-dom";
import styles from "./AuthenticationForm.module.css";
function AuthenticationForm({ formType,handleFormType }) {

 let isSignup=formType==="signup"?true:false;
 const toggleFormType=()=>{
   handleFormType(isSignup?"login":"signup");
 }
  return (
    <div className={styles.AuthenticationForm}>
      <span className={styles.formHead}>Welcome User</span>
      <span>Please enter your details</span>
    
     {formType === "signup" && <div className={styles.inputBox}>
        <div className={styles.placeholder}>Username </div>
        <input type="text" />
      </div> }

      <div className={styles.inputBox}>
        <div className={styles.placeholder}>Email </div>
        <input type="text" />
      </div>

      <div className={styles.inputBox}>
        <div className={styles.placeholder}>Password</div>
        <input type="text" />
      </div>

      <div className={styles.remember}>
        <input type="checkbox" />
        Remember me
      </div>

      <div className={`${styles.inputBox} ${styles.googleBox}`}>
        <img src={google} alt="google" className={styles.logoImg} />
        <div className={styles.continue}>Continue with Google</div>
      </div>
      <span>
        {
          isSignup ? `Already have an account ?`: "Don't have an account ? "
        }
        <Link to={`/${isSignup ? "login" : "signup"}`} onClick={toggleFormType}>{isSignup ? "login" : "signup"}</Link>
        
      </span>
    </div>
  );
}

export default AuthenticationForm;
