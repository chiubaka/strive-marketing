import * as React from "react";
import { Navbar } from "../components/Navbar";

export default class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div id="home">
        <Navbar/>
      </div>
    );
  }
}