import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./Layout";
import { BrowserRouter, Route, Link } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
