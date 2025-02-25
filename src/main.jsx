import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain={"dev-hmoxl1srz8zf60yd.us.auth0.com"}
    clientId={"Zn2GtXWKqNfnlLFhfO63qoQe1KbetoOr"}
    authorizationParams={{
      redirect_uri: "http://localhost:5173",
    }}
  >
    <App />
  </Auth0Provider>
  </StrictMode>,
)
