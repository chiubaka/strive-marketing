import * as React from "react";

export default class Navbar extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="container pt-3">
        <nav className="navbar navbar-expand-sm navbar-light">
          <a className="navbar-brand" href="#">Strive</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}