import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Features from "../components/Features";
import Quote from "../components/Quote";
import SampleGoals from "../components/SampleGoals";
import Method from "../components/Method";
import SubscribeForm from "../components/SubscribeForm";
import { Link } from "react-router-dom";

const welcomeImage = require("../../resources/img/start_your_journey.jpg");

export default class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div id="home">
        <Jumbotron backgroundImage={welcomeImage}>
          <div className="pl-3">
          <h1 className="brand text-uppercase font-italic font-weight-bold">Strive</h1>
          <h2 className="tagline font-weight-light">To be your best.</h2>
          <Link to="/go"><button type="button" className="btn call-to-action px-5 py-3 mt-3">Start your journey</button></Link>
          </div>
        </Jumbotron>
        <Quote
          text="Make at least one definite move daily toward your goal."
          author="Bruce Lee"
        />
        <Method/>
        <Quote
          text="Action is the foundational key to all success."
          author="Pablo Picasso"
        />
        <Features/>
        <Footer/>
      </div>
    );
  }
}