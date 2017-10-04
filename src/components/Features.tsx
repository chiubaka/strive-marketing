import * as React from "react";
import CallToAction from "./CallToAction";

export default class Features extends React.Component {
  public render(): JSX.Element {
    return (
      <section id="features" className="section container list">
        <div className="headers text-center mx-auto mb-5">
          <h6>Features</h6>
          <h2>A software platform for effective self-actualization.</h2>
        </div>
        <div className="d-flex flex-column">
          <div>
            <ul>
              <li>
                <div className="icon-container">
                  <span className="oi oi-list" title="list" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Sample plans for common goals.</p>
                <p>Get started with a curated plan, or draw inspiration from the community.</p>
              </li>
              <li>
                <div className="icon-container">
                  <span className="oi oi-people" title="people" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Built-in accountability.</p>
                <p>Share your goals and your progress with the world, or with just your close friends.</p>
              </li>
              <li>
                <div className="icon-container">
                  <span className="oi oi-compass" title="compass" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Intelligent reminders.</p>
                <p>Ensure you're always in the right place at the right time with location-, time-, and context-based reminders.</p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className="icon-container">
                  <span className="oi oi-task" title="task" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Habit tracking.</p>
                <p>Build and track the habits you need to succeed.</p>
              </li>
              <li>
                <div className="icon-container">
                  <span className="oi oi-lightbulb" title="lightbulb" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Insight generation.</p>
                <p>Learn how you can improve with Strive's automatic analysis of your progress.</p>
              </li>
              <li>
                <div className="icon-container">
                  <span className="oi oi-phone" title="phone" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Mobile support.</p>
                <p>Take Strive with you on your mobile device wherever you go.</p>
              </li>
            </ul>
          </div>

        </div>
        <CallToAction text="Take action"/>
      </section>
    );
  }
}