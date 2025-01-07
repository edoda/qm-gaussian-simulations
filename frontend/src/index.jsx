import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "katex/dist/katex.min.css";

//optional? external scripts (Plotly and Pyodide)
const loadExternalScripts = () => {
  const plotlyScript = document.createElement("script");
  plotlyScript.src = "https://cdn.plot.ly/plotly-basic-3.0.0-rc.2.min.js";
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
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
);