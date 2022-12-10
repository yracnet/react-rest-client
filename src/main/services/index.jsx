import React from "react";
import { Route, Switch } from "react-router";
import { Form } from "./Form";
import { List } from "./List";

export const ServiceIndex = () => {
  return (
    <div className="card">
      <div className="card-header media">
        <div className="align-self-center me-1 ">
          <i className="h2 m-1 fa fa-server"></i>
        </div>
        <div className="media-body">
          <div className="h5 m-0 font-weight-bold">Services</div>
          <div>Services saved in local storage</div>
        </div>
      </div>
      <div className="card-body">
        <Switch>
          <Route path="/service" component={List} exact />
          <Route path="/service/:id" component={Form} />
        </Switch>
      </div>
    </div>
  );
};
