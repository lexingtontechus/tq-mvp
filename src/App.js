/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//
import * as ROUTES from "constants/routes";
import { withAuthentication } from "components/Session";

// CSS
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import About from "views/About.js";
import Events from "views/Events.js";
import Index from "views/Index.js";

// Clients
//import Display from "views/events/Display.js";
//import DisplayEvents from "views/events/Displayevents.js";

// views require auth
//import Dubai from "views/events/Dubai.js";
//import Display from "views/Display.js";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/about" exact component={About} />
        <Route path="/events" exact component={Events} />
        {/* <Route path="/dubai" exact component={Dubai} />*/}
        {/*<Route path="/display" exact component={Display} />*/}

        <Route path="/" exact component={Index} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default withAuthentication(App);
//export default App;
