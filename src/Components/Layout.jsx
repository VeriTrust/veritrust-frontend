import {  Routes, Route, useLocation } from "react-router-dom";
import AuthenticationForm from "./AuthenticationForm/AuthenticationForm.jsx";
import Header from "./Header/Header.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import "../index.css";

// Separate Layout Component
const Layout = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/signup"];

  return (
    <div className="outlet">
      {/* Conditionally render Header */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/login" element={<AuthenticationForm formType="login" />} />
        <Route path="/signup" element={<AuthenticationForm formType="signup" />} />
      </Routes>
    </div>
  );
};

export default Layout;
