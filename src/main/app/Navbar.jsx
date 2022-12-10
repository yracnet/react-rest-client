import React from "react";
import { NavLink } from "react-router-dom";
import logo from "_/images/logo.png";
//import 'popper.js/dist/popper'
//import 'bootstrap/dist/js/bootstrap'

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="/react-rest-client/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Rest Client"
            />
            <b className="h3 font-weight-bold ml-1">Rest Client</b>
          </a>
          <div className="collapse navbar-collapse">
            <nav className="navbar-nav bd-navbar-nav">
              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/request"
              >
                <i className="fa fa-send mr-2" />
                Request
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/service"
              >
                <i className="fa fa-server mr-2" />
                Services
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                activeClassName="active"
                to="/setting"
              >
                <i className="fa fa-cogs mr-2" />
                Settings
              </NavLink>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};
