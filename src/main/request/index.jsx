import React from "react";
import { Route, Switch } from "react-router";
import { Client } from "./Client";

export const RequestIndex = () => {
  return (
    <div>
      <div className="body">
        <Switch>
          <Route path="/request" component={Client} exact />
          <Route path="/request/:id" component={Client} />
        </Switch>
      </div>
    </div>
  );
};
