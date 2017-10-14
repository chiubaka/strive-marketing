import * as React from "react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

export default class Footer extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="footer bg-dark px-3 py-5">
        <div className="container d-flex flex-row">
          <div className="text-light">
            &copy; Chiubaka Technologies 2017
          </div>
          <div style={{paddingTop: "5px", flexGrow: 1, textAlign: "right"}}>
            <a href="#" data-toggle="modal" data-target="#privacy-policy" title="Privacy Policy">Privacy Policy</a>
          </div>
        </div>
        <PrivacyPolicyModal/>
      </div>
    );
  }
}