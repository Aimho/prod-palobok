import React from "react";
import { Route, Switch, RouteProps } from "react-router-dom";

import Main from "./Main";

const Container = () => (
  <Switch>
    {routes.map((props, index) => (
      <Route {...props} key={index} />
    ))}
  </Switch>
);

export default Container;

/** route settings */
export const routes: RouteProps[] = [
  { path: "/", component: Main, exact: true },
];
