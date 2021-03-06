import * as React from "react";
import * as classnames from "classnames";

export interface JumbotronProps {
  backgroundImage: string;
  className?: string;
  overlayOpacity?: number;
}

export default class Jumbotron extends React.Component<JumbotronProps> {
  public render(): JSX.Element {
    const {backgroundImage, className} = this.props;
    const overlayOpacity = this.props.overlayOpacity ? this.props.overlayOpacity : 0;

    return (
      <div
        className={classnames("jumbotron-fluid", className)}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container h-100 d-table">
          <div className="jumbotron-inner d-table-cell align-middle">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}