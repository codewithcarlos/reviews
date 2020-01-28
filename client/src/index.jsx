import React from "react";
import ReactDOM from "react-dom";
import ReviewsContainer from "./components/ReviewsContainer.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      values: [],
      reviewerAvatars: [],
      reviewerNames: [],
      reviewDates: []
    };
    this.getListingReviews = this.getListingReviews.bind(this);
  }

  componentDidMount() {
    this.getListingReviews();
  }

  getListingReviews() {
    axios
      .get("/user/124581118")
      .then(response => {
        let messages = [];
        let values = [];
        let reviewerAvatars = [];
        let reviewerNames = [];
        let reviewDates = [];
        console.log(response.data);

        response.data.forEach(review => {
          messages.push(review.message);
          values.push(review.value);
          reviewerAvatars.push(review.reviewerAvatar);
          reviewerNames.push(review.reviewerName);
          reviewDates.push(review.reviewDate);
        });

        this.setState({
          messages,
          values,
          reviewerAvatars,
          reviewerNames,
          reviewDates
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="col-xs-8 pr-xs-8">
        <hr />
        <div data-lazy-load-component-trigger=""></div>
        <ReviewsContainer
          messages={this.state.messages}
          values={this.state.values}
          reviewerAvatars={this.state.reviewerAvatars}
          reviewerNames={this.state.reviewerNames}
          reviewDates={this.state.reviewDates}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
