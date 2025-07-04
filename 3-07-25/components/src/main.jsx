
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import EffectDemo from "./EffectDemo.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EffectDemo />
  </StrictMode>
);
