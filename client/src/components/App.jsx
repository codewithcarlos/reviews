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
      listingId: 651186954,
      messages: [],
      values: [],
      reviewerAvatars: [],
      reviewerNames: [],
      reviewDates: [],
      reviewsCount: null,
      imageUrl: null,
      title: null,
      images: []
    };
    this.getListingReviews = this.getListingReviews.bind(this);
    this.changeURL = this.changeURL.bind(this);
  }

  componentDidMount() {
    this.getListingReviews();
    window.addEventListener("itemChanged", event => {
      this.setState({ listingId: Number(event.detail.listingId) }, () =>
        this.getListingReviews()
      );
    });
  }

  getListingReviews() {
    axios
      .get(`/listings/${this.state.listingId}`)
      .then(response => {
        console.log(response.data);
        const messages = [];
        const values = [];
        const reviewerAvatars = [];
        const reviewerNames = [];
        const reviewDates = [];
        const images = [];
        const reviewsCount = response.data[0].reviews_count;
        const imageUrl = response.data[0].image_url;
        const listingId = response.data[0].listing_id;
        const title =
          response.data[0].title.length > 47
            ? response.data[0].title.slice(0, 50) + "..."
            : response.data[0].title;

        response.data.forEach(review => {
          const randomIndex = Math.floor(Math.random() * 10);
          if (randomIndex > 1) review.image_url = null;
          images.push(review.image_url);
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
          reviewDates,
          reviewsCount,
          imageUrl,
          listingId,
          title,
          images
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeURL(e, listing) {
    console.log("the listing is", listing);

    // create and dispatch the event
    var event = new CustomEvent("itemChanged", {
      detail: {
        listingId: listing
      }
    });
    window.dispatchEvent(event);
  }

  render() {
    let listingArr = [651186954, 721236096, 742799622];
    let randomListing = listingArr[Math.floor(Math.random() * 3)];
    let test = `/listings/${randomListing}`;
    return (
      <div className="col-xs-8 pr-xs-8">
        <Link to={test} onClick={e => this.changeURL(e, randomListing)}>
          Home
        </Link>
        <hr />
        <div data-lazy-load-component-trigger=""></div>
        <Switch>
          <Route path="/listings/:listingId">
            <ReviewsContainer
              messages={this.state.messages}
              values={this.state.values}
              reviewerAvatars={this.state.reviewerAvatars}
              reviewerNames={this.state.reviewerNames}
              reviewDates={this.state.reviewDates}
              reviewsCount={this.state.reviewsCount}
              imageUrl={this.state.imageUrl}
              title={this.state.title}
              images={this.state.images}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
