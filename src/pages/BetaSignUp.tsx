import * as React from "react";
import SubscribeForm from "../components/SubscribeForm";
import Jumbotron from "../components/Jumbotron";

const constructionImage = require("../../resources/img/under_construction.jpg");

export default class BetaSignUp extends React.Component {
  public componentDidMount(): void {
    window.fbq("track", "ViewContent", {content_name: "beta_sign_up"});
    window.gtag("config", "UA-58023025-2", {page_path: "/go"});
  }

  public render(): JSX.Element {
    return (
      <Jumbotron
        backgroundImage={constructionImage}
        className="text-light"
        overlayOpacity={0.75}
      >
        <h2>You've caught us before we're ready</h2>
        <p>Leave us your email address to be the first to know when Strive is ready for private beta testing.</p>
        <SubscribeForm/>
      </Jumbotron>
    );
  }
}