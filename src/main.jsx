import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// import.meta.env.BASE_URL is injected by Vite at build time:
//   GitHub Pages build (DEPLOY_TARGET=github) → "/Khadijah-Portfolio/"
//   Netlify / local dev → "/"
// Trim the trailing slash so BrowserRouter basename works correctly.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
