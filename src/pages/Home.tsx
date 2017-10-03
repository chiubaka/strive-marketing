import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Features from "../components/Features";
import Quote from "../components/Quote";
import SampleGoals from "../components/SampleGoals";
import Method from "../components/Method";

export default class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div id="home">
        <Navbar/>
        <Jumbotron/>
        <Method/>
        {/*<SampleGoals/>*/}
        {/*<Quote*/}
          {/*text="If you want something you have never had, you must be willing to do something you have never done."*/}
          {/*author="Thomas Jefferson"*/}
        {/*/>*/}
        {/*<Features/>*/}
        {/*<Quote*/}
          {/*text="Life isn't about finding yourself. Life is about creating yourself."*/}
          {/*author="George Bernard Shaw"*/}
        {/*/>*/}
        {/*<Quote*/}
          {/*text="Action is the foundational key to all success."*/}
          {/*author="Pablo Picasso"*/}
        {/*/>*/}
        <Footer/>
      </div>
    );
  }
}