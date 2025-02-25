import { BrowserRouter, createBrowserRouter, Outlet, Routes ,Route} from "react-router-dom";
import Layout from "../src/Components/Layout.jsx";
import "./index.css";
import { useState } from "react";
function App() {
  const [formType, setFormType] = useState("login");

  return (
    <div className="animated-gradient">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
