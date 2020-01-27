import React from "react";
import ReactDOM from "react-dom";
import ReviewsContainer from "./components/ReviewsContainer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-xs-8 pr-xs-8">
        <hr />
        <div data-lazy-load-component-trigger=""></div>
        <ReviewsContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
