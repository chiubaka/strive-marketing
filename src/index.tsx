import * as React from "react";
import { render } from "react-dom";
import "bootstrap";

import "../styles/index.scss";

import Strive from "./Strive";

render(
  <Strive/>,
  document.getElementById("strive")
);