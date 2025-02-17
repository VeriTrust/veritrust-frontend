import google from "../../src/Images/google.png";
import {Link } from "react-router-dom";
import styles from "./AuthenticationForm.module.css";
function AuthenticationForm({ formType,handleFormType }) {

 let isSignup=formType==="signup"?true:false;
 const toggleFormType=()=>{
   handleFormType(isSignup?"login":"signup");
 }
  return (
    <form method="POST" action="/" className={styles.AuthenticationForm}>
      <span className={styles.formHead}>Welcome User</span>
      <span>Please enter your details</span>
    
     {formType === "signup" && <div className={styles.inputBox}>
        <div className={styles.placeholder}>Username </div>
        <input type="text" name="username" required/>
      </div> }

      <div className={styles.inputBox}>
        <div className={styles.placeholder}>Email </div>
        <input type="email" name="usermail"  required />
      </div>

      <div className={styles.inputBox}>
        <div className={styles.placeholder}>Password</div>
        <input type="password" />
      </div>

      <div className={styles.remember}>
        <input type="checkbox" />
        Remember me
      </div>

   
        <button  className={`${styles.submitBtn} ${styles.continue}`}>Submit</button>
      


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
    </form>
  );
}

export default AuthenticationForm;
