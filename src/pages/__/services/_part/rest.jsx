import React, { useRef } from "react";
import { Form, InputGroup } from "react-bootstrap";

export const RestResumen = ({ value, children, full }) => {
  children = children ? (
    <div className="align-self-center btn-group">{children}</div>
  ) : null;

  return (
    <div className="media">
      <div className="align-self-center me-2">
        <i className={"fs-1 m-0 fa fa-" + value.icon}></i>
      </div>
      <div className="media-body">
        <div className="h5 m-0 font-weight-bold">{value.name}</div>
        <div className="text-dark">{value.description}</div>
      </div>
      {full && (
        <div className="align-self-center me-2 text-right">
          <div className="h5 m-0 font-weight-bold text-danger">
            {value.method}
          </div>
          <code>{value.url}</code>
        </div>
      )}
      {children}
    </div>
  );
};
