import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Views/Home";
import Search from "./Views/Search";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
