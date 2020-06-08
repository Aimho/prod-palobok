import React from "react";
import { Route, Switch, RouteProps } from "react-router-dom";

import Main from "./Main";
import ExampleAxios from "./ExampleAxios";

const Container = () => {
  const routes: RouteProps[] = [
    { path: "/", component: Main, exact: true },
    { path: "/axios", component: ExampleAxios, exact: true },
  ];

  return (
    <Switch>
      {routes.map((props, index) => (
        <Route {...props} key={index} />
      ))}
    </Switch>
  );
};

export default Container;
