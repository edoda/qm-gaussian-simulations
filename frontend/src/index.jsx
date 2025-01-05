import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

//optional? external scripts (Plotly and Pyodide)
const loadExternalScripts = () => {
  const plotlyScript = document.createElement("script");
  plotlyScript.src = "https://cdn.plot.ly/plotly-2.27.0.min.js";
  plotlyScript.defer = true;
  document.body.appendChild(plotlyScript);

  const pyodideScript = document.createElement("script");
  pyodideScript.src = "https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js";
  pyodideScript.defer = true;
  document.body.appendChild(pyodideScript);
};

loadExternalScripts();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme accentColor="tomato" radius="full">
      <App />
      <ThemePanel />
    </Theme>
  </React.StrictMode>
);