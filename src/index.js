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
console.log('%cSTOP!', 'font-size:100px;color:red;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
console.log('%cThis is a browser feature intended for developers not for hackers. ', 'font-size:18px; font-weight: bold;color:black;');