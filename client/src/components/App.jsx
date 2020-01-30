import React from "react";
import ReviewsContainer from "./ReviewsContainer.jsx";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

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
    window.addEventListener("locationchange", function() {
      console.log("location changed!");
    });
    console.log(this.props);
    this.getListingReviews();
  }

  componentDidUpdate(prevProps) {
    // console.log("Prevprops", prevProps);
    // console.log("Cuurent id", this.props.match.params.id);
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
        <Link to="/listings/124581118">Home</Link>
        <hr />
        <div data-lazy-load-component-trigger=""></div>
        <Switch>
          <Route path="/listings/:id">
            <ReviewsContainer
              messages={this.state.messages}
              values={this.state.values}
              reviewerAvatars={this.state.reviewerAvatars}
              reviewerNames={this.state.reviewerNames}
              reviewDates={this.state.reviewDates}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
