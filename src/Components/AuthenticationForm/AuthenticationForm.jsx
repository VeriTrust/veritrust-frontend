import google from "../../Images/google.png";
import AuthBanner from "../../Images/AuthBanner.jpg";
import { Link } from "react-router-dom";
import styles from "./AuthenticationForm.module.css";
import { useState } from "react";

function AuthenticationForm({ formType, handleFormType }) {
  const [loading, setLoading] = useState(false);
  //to check whether form is login or signup form
  let isSignup = formType === "signup" ? true : false;
  const toggleFormType = () => {
    handleFormType(isSignup ? "login" : "signup");
  };

  //To handle form submission
  const handleSubmit = (e) => {};
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 h-screen">
        <img src={AuthBanner} alt="AuthBanner" className="h-full z-1" />
      </div>
      <div className={styles.Form}>
        <p className={styles.formHead}>Welcome To Veritrust 🚀</p>

        <div className={styles.AuthForm}>
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              name="username"
              className={styles.inputBox}
              required
            />
          )}
          <input
            type="text"
            placeholder="Email"
            name="mail"
            className={styles.inputBox}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className={styles.inputBox}
          />
          <div className={styles.remember}>
            <input type="checkbox" /> Remember me
          </div>
          <div className={styles.googleBox}>
            <img src={google} alt="google" className={styles.logoImg} />
            <div className={styles.continue}>Continue with Google</div>
          </div>
          <Link to="/Home" className={styles.submitBtn}>
            {isSignup ? "Sign Up":"Login"}
          </Link>

          <span className={styles.msg}>
            {isSignup
              ? `Already have an account ?`
              : "Don't have an account ? "}
            <Link
              to={`/${isSignup ? "login" : "signup"}`}
              onClick={toggleFormType}
            >
              {isSignup ? "Login" : "Sign Up"}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationForm;
/* <Link to={"/"} className={`${styles.inputBox} ${styles.googleBox}`}>
        <img src={google} alt="google" className={styles.logoImg} />
        <div className={styles.continue}>Continue with Google</div>
      </Link>
      <span>
        {isSignup ? `Already have an account ?` : "Don't have an account ? "}
        <Link to={`/${isSignup ? "login" : "signup"}`} onClick={toggleFormType}>
          {isSignup ? "login" : "signup"}
        </Link>
      </span>*/
