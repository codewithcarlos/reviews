import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.jsx";

import { createBrowserHistory } from "history";

function pathnameHandler() {
  this.oldPathname = window.location.pathname;
  this.Check;

  var that = this;
  var detect = function() {
    if (that.oldPathname != window.location.pathname) {
      console.log("pathname CHANGED - new path" + window.location.pathname);
      that.oldPathname = window.location.pathname;
    }
  };
  this.Check = setInterval(function() {
    detect();
  }, 1000);
}

var pathnameDetection = new pathnameHandler();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
