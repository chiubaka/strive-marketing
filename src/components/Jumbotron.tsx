import * as React from "react";

const welcomeImage = require("../../resources/img/start_your_journey.jpg");

export default class Jumbotron extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="jumbotron-fluid">
        <div className="container h-100 d-table">
          <div className="jumbotron-inner d-table-cell pl-3 align-middle">
            <h1 className="brand text-uppercase font-italic font-weight-bold">Strive</h1>
            <h2 className="tagline font-weight-light">To be your best.</h2>
            <button type="button" className="btn call-to-action px-5 py-3 mt-3">Start your journey</button>
          </div>
        </div>
      </div>
    );
  }
}