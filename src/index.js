/*!

=========================================================
* Hobby-on - v1.3.0
=========================================================
*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/hobby-on.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import ProfilePage from "views/ProfilePage.js";
import LandingPage from "views/LandingPage";
import RegisterPage from "views/RegisterPage.js";
// others

ReactDOM.render(
  <HashRouter>
    <Switch>
    <Route
        exact
        path="/dashboard"
        render={(props) => <LandingPage {...props} />}
      />    

      <Route
        path="/profile"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/dashboard" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
