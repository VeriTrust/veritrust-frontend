import google from "../../Images/google.png";
import AuthBanner from "../../Images/AuthBanner.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./AuthenticationForm.module.css";
import { useState } from "react";

function AuthenticationForm({ formType, handleFormType }) {
  // Check if the form is for Signup or Login
  const isSignup = formType === "signup";
  const toggleFormType = () => {
    handleFormType(isSignup ? "login" : "signup");
  };

  // Form State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? "http://localhost/signup" : "http://localhost/login";

    try {
      const response = await axios.post(
        endpoint,
        isSignup
          ? { username, mail, password }  // Send username, email, and password for Signup
          : { mail, password },           // Send email and password for Login
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/Home");
    } catch (error) {
      console.error(`${isSignup ? "Signup" : "Login"} failed:`, error);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 h-screen">
        <img src={AuthBanner} alt="AuthBanner" className="h-full z-1" />
      </div>
      <div className={styles.Form}>
        <p className={styles.formHead}>Welcome To Veritrust 🚀</p>

        <form className={styles.AuthForm} onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.inputBox}
              required
            />
          )}
          <input
            type="text"
            placeholder="Email"
            name="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className={styles.inputBox}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputBox}
          />
          <div className={styles.remember}>
            <input type="checkbox" /> Remember me
          </div>
          <div className={styles.googleBox}>
            <img src={google} alt="google" className={styles.logoImg} />
            <div className={styles.continue}>Continue with Google</div>
          </div>
          <button type="submit" className={styles.submitBtn}>
            {isSignup ? "Sign Up" : "Login"}
          </button>

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
        </form>
      </div>
    </div>
  );
}

export default AuthenticationForm;
