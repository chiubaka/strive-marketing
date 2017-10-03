import * as React from "react";

const learnALanguageImage = require("../../resources/img/learn_a_language.jpg");
const runAMarathonImage = require("../../resources/img/run_a_marathon.jpg");
const writeABookImage = require("../../resources/img/write_a_book.jpg");

export default class SampleGoals extends React.Component {
  public render(): JSX.Element {
    return (
      <section id="sample-goals">
        <div className="container">
          <div className="headers text-center mx-auto">
            <h6>Realize your dreams</h6>
            <h2><span className="brand">Strive</span> to accomplish whatever you set your mind to.</h2>
          </div>
          {/*<div className="d-flex flex-row justify-content-md-center">*/}
            {/*<div>*/}
              {/*<img src={learnALanguageImage}/>*/}
              {/*<p>*/}
                {/*<strong><span className="brand">Strive</span> learn a language.</strong> <a href="#">Get started.</a>*/}
              {/*</p>*/}
            {/*</div>*/}
            {/*<div>*/}
              {/*<img src={runAMarathonImage}/>*/}
              {/*<p>*/}
                {/*<strong><span className="brand">Strive</span> to run a marathon.</strong> <a href="#">Get started.</a>*/}
              {/*</p>*/}
            {/*</div>*/}
            {/*<div>*/}
              {/*<img src={writeABookImage}/>*/}
              {/*<p>*/}
                {/*<strong><span className="brand">Strive</span> to write a book.</strong> <a href="#">Get started.</a>*/}
              {/*</p>*/}
            {/*</div>*/}
          {/*</div>*/}
        </div>
        <div id="run-a-marathon" className="sample-goal container-fluid d-table">
          <div className="text-center align-middle d-table-cell">
            <h3><span className="brand">Strive</span> to run a marathon.</h3>
          </div>
        </div>
        <div id="learn-a-language" className="sample-goal container-fluid">
          <p><span className="brand">Strive</span>to learn a language.</p>
        </div>
      </section>
    );
  }
}