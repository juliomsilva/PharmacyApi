import React from "react";

import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Rotas from "./Routes/Rotas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Rotas />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
