import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextPorvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextPorvider>
      <App />
    </ContextPorvider>
  </React.StrictMode>
);
