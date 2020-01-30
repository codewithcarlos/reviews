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
      id: 124581118,
      messages: [],
      values: [],
      reviewerAvatars: [],
      reviewerNames: [],
      reviewDates: []
    };
    this.getListingReviews = this.getListingReviews.bind(this);
    this.changeURL = this.changeURL.bind(this);
  }

  componentDidMount() {
    // this.getListingReviews();
    window.addEventListener("itemChanged", event => {
      this.setState({ id: Number(event.detail.listing_id) }, () =>
        this.getListingReviews()
      );
    });
  }

  getListingReviews() {
    axios
      .get(`/user/${this.state.id}`)
      .then(response => {
        let messages = [];
        let values = [];
        let reviewerAvatars = [];
        let reviewerNames = [];
        let reviewDates = [];
        // console.log(response.data);

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

  changeURL(e, user) {
    console.log("the user is", user);
    // create and dispatch the event
    var event = new CustomEvent("itemChanged", {
      detail: {
        listing_id: user
      }
    });
    window.dispatchEvent(event);
  }

  render() {
    let userArr = [124581118, 234858692, 163513724];
    let randomUser = userArr[Math.floor(Math.random() * 3)];
    let test = `/listings/${randomUser}`;
    return (
      <div className="col-xs-8 pr-xs-8">
        <Link to={test} onClick={e => this.changeURL(e, randomUser)}>
          Home
        </Link>
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
