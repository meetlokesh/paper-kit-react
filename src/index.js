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
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Dashboard from "components/Dashboard/Dashboard.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
// others

ReactDOM.render(
  <HashRouter>
    <Switch>
    <Route
        path="/dashboard"
        render={(props) => <Dashboard {...props} />}
      />
      <Route path="/guide" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/dashboard" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
