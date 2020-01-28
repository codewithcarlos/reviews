import React from "react";
import ReactDOM from "react-dom";
import ReviewsContainer from "./components/ReviewsContainer.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getListingReviews = this.getListingReviews.bind(this);
  }

  componentDidMount() {
    this.getListingReviews();
  }

  getListingReviews() {
    axios
      .get("/user/124581118")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
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
