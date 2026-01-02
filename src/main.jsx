import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

/* Styles */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/gallery.css"
import "./styles/room.css"
import "./styles/theme.css";
import "./index.css";

/* Bootstrap JS */
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
