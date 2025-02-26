import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "../src/Components/Layout.jsx";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
