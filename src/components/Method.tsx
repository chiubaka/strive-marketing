import * as React from "react";
import CallToAction from "./CallToAction";

export default class Method extends React.Component {
  public render(): JSX.Element {
    return (
      <section id="method" className="container list">
        <div className="headers text-center mx-auto mb-5">
          <h6>Method</h6>
          <h2>A research-backed approach to accomplishing any goal.</h2>
        </div>
        <div className="d-flex flex-column">
          <div>
            <ul>
              <li>
                <div className="icon-container">
                  <span className="oi oi-eye" title="eye" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Vision.</p>
                <p>Let Strive help you identify and keep track of your goals and your vision for yourself.</p>
              </li>
              <li>
                <div className="icon-container">
                  <span className="oi oi-calendar" title="calendar" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Plan.</p>
                <p>Use Strive's advanced tools to break your goals into actionable plans and make consistent progress every day.</p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className="icon-container">
                  <span className="oi oi-task" title="task" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Execute.</p>
                <p>Turn your vision into reality with Strive's execution system based on Getting Things Done.</p>
              </li>
              <li>
                <div className="icon-container">
                  <span className="oi oi-graph" title="graph" aria-hidden="true"></span>
                </div>
                <p className="font-weight-bold">Reflect.</p>
                <p>Continuously improve or get back on track with insights from Strive's granular metrics.</p>
              </li>
            </ul>
          </div>
        </div>
        <CallToAction text="Make your move"/>
      </section>
    );
  }
}