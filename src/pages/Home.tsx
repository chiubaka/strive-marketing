import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Features from "../components/Features";
import Quote from "../components/Quote";
import SampleGoals from "../components/SampleGoals";
import Method from "../components/Method";
import SubscribeForm from "../components/SubscribeForm";

export default class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div id="home">
        <Navbar/>
        <Jumbotron/>
        <Quote
          text="Make at least one definite move daily toward your goal."
          author="Bruce Lee"
        />
        <Method/>
        <Quote
          text="Action is the foundational key to all success."
          author="Pablo Picasso"
        />
        {/*<SampleGoals/>*/}
        <Features/>
        {/*<Quote*/}
          {/*text="Life isn't about finding yourself. Life is about creating yourself."*/}
          {/*author="George Bernard Shaw"*/}
        {/*/>*/}

        <Footer/>
      </div>
    );
  }
}