import * as React from "react";
import { render } from "react-dom";
import "bootstrap";
import * as analytics from "universal-ga";

import "../styles/index.scss";

import Home from "./pages/Home";

analytics.initialize("UA-58023025-2");

render(
  <Home/>,
  document.getElementById("strive")
);