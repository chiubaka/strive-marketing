import * as React from "react";

export default class SubscribeForm extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  public onSubmit(): void {
    window.fbq("track", "Lead");
    window.gtag("event", "click", {event_category: "button", event_label: "Beta SignUp"})
  }

  public render(): JSX.Element {
    return (
      <div>
        <div id="mc_embed_signup">
          <form action="//chiubaka.us16.list-manage.com/subscribe/post?u=34526005c6aa16832885c42f7&amp;id=83fab75ec9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll" className="form-group">
              <input type="email" name="EMAIL" className="email form-control" id="mce-EMAIL" placeholder="Enter email address" required/>
              <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_34526005c6aa16832885c42f7_83fab75ec9" tabIndex={-1} value=""/></div>
            </div>
            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="btn call-to-action" onClick={this.onSubmit}>Be the first to Strive</button>
          </form>
        </div>
      </div>
    );
  }
}