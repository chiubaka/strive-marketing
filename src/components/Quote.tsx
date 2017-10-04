import * as React from "react";

export interface QuoteProps {
  text: string;
  author: string;
}

export default class Quote extends React.Component<QuoteProps> {
  public render(): JSX.Element {
    return (
      <section className="quote section text-light">
        <div className="container mx-auto text-center px-5">
          <span className="quote-text">"{this.props.text}"</span>
          <span className="author text-right w-100 d-inline-block">&mdash; {this.props.author}</span>
        </div>
      </section>
    );
  }
}