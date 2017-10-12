import * as React from "react";
import { Link } from "react-router-dom";

interface CallToActionProps {
  text: string;
}

export default class CallToAction extends React.Component<CallToActionProps> {
  public render(): JSX.Element {
    return (
      <div className="call-to-action container mx-auto">
        <Link to="/go"><button className="btn call-to-action mx-auto">{this.props.text}</button></Link>
      </div>
    );
  }
}