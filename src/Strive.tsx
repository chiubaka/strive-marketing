import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BetaSignup from "./pages/BetaSignup";

export default class Strive extends React.Component {
  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/go" component={BetaSignup}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}