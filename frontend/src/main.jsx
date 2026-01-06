import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./styles/theme.css";

import "./styles/room.css";
import "./styles/gallery.css";
import "./styles/testimoni.css";
import "./styles/faq.css";
import "./styles/cta.css";
import "./styles/footer.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <App />
);
