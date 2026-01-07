import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";
import "./styles/theme.css";
import "./styles/room.css";
import "./styles/testimoni.css";
import "./styles/faq.css";
import "./styles/cta.css";
import "./styles/footer.css";
import "./styles/rental.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
