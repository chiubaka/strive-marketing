import * as React from "react";

export default class SubscribeForm extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"/>
        <div id="mc_embed_signup">
          <form action="//chiubaka.us16.list-manage.com/subscribe/post?u=34526005c6aa16832885c42f7&amp;id=83fab75ec9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">Be the first to try Strive in private beta.</label>
              <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required/>
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_34526005c6aa16832885c42f7_83fab75ec9" tabIndex={-1} value=""/></div>
                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}