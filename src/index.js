import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// Firebase
import App from "App";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "components/Firebase";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import About from "views/About.js";
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Events from "views/Events.js";
import Index from "views/Index.js";


ReactDOM.render(
 
    <App />,
 
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
