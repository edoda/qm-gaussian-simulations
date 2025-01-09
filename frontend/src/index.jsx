import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "@radix-ui/themes";
import { MathJaxContext } from "better-react-mathjax";
import './styles.css';
import "@radix-ui/themes/styles.css";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

const loadExternalScripts = () => {
  const plotlyScript = document.createElement("script");
  plotlyScript.src = "https://cdn.plot.ly/plotly-basic-3.0.0-rc.2.min.js";
  plotlyScript.defer = true;
  document.body.appendChild(plotlyScript);
};

loadExternalScripts();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme accentColor="tomato" radius="full">
      <MathJaxContext version={3} config={config}>
        <App />
        {/* <ThemePanel /> */}
      </MathJaxContext>
    </Theme>
  </React.StrictMode>
);