import * as React from "react";
import { render } from "react-dom";
import "bootstrap";

import "../styles/index.scss";

import Home from "./pages/Home";

render(
  <Home/>,
  document.getElementById("strive")
);