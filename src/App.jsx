import { BrowserRouter, createBrowserRouter, Outlet, Routes ,Route} from "react-router-dom";
import AuthenticationForm from "../Components/AuthenticationForm/AuthenticationForm.jsx";
import Header from "../Components/Header/Header.jsx";
import LandingPage from "../Components/LandingPage/LandingPage.jsx";

import { useState } from "react";
function App() {
  const [formType, setFormType] = useState("login");

  const handleFormType = (type) => {
    setFormType(type);
  };

  
  return (
    <div className="animated-gradient">
      <BrowserRouter>
        <Header />
        <div className="outlet">   
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<AuthenticationForm formType="login" handleFormType={handleFormType}/>} />
              <Route path="/signup" element={<AuthenticationForm formType="signup" handleFormType={handleFormType}/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
