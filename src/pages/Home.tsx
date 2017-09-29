import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

export default class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div id="home">
        <Navbar/>
        <Jumbotron/>
        <Footer/>
      </div>
    );
  }
}