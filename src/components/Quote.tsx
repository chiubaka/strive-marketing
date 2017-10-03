import * as React from "react";

export interface QuoteProps {
  text: string;
  author: string;
}

export default class Quote extends React.Component<QuoteProps> {
  public render(): JSX.Element {
    return (
      <section className="quote section text-light">
        <div className="container">
          <h4>"{this.props.text}"</h4>
        </div>
      </section>
    );
  }
}