import * as React from "react";
import { Link, NavLink } from "react-router-dom";

const logo = require("../../resources/img/strive_logo.png");

export default class Navbar extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="container pt-3">
        <nav className="navbar navbar-expand-sm navbar-light">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="30" height="30" alt="Strive" className="d-inline-block align-top"/>
            Strive
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-top">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}