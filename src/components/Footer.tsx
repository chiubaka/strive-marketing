import * as React from "react";

export default class Footer extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="footer bg-dark px-3 py-5">
        <div className="container">
          <div className="text-light">
            &copy; Chiubaka Technologies 2017
          </div>
        </div>
      </div>
    );
  }
}