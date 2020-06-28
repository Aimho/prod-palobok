import React from "react";
import { Route, Switch, RouteProps } from "react-router-dom";

import Main from "./Main";
import Brand from "./Brand";
import Product from "./Product";
import News from "./News";

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
  { path: ["/brand", "/brand/:type"], component: Brand, exact: true },
  { path: ["/product", "/product/:type"], component: Product, exact: true },
  {
    path: ["/news", "/news/:type", "/news/:type/:id"],
    component: News,
    exact: true,
  },
];
