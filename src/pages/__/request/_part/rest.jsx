import React, { useRef } from "react";
import { Form, InputGroup } from "react-bootstrap";

const ICONS = [
  "globe",
  "institution",
  "rocket",
  "send-o",
  "hashtag",
  "linux",
  "android",
  "qrcode",
  "download",
  "upload",
  "bomb",
  "bug",
  "cloud",
  "code",
  "cube",
  "database",
  "exchange",
  "expeditedssl",
  "flash",
  "gg",
  "link",
  "paw",
  "pie-chart",
  "share-alt",
  "sign-in",
  "sign-out",
  "slack",
  "support",
  "list-ul",
  "server",
  "tasks",
  "terminal",
  "thumb-tack",
  "usb",
  "user-secret",
];

export const RestService = ({ value, onChange, parent, children }) => {
  const ref = useRef();
  children = children ? (
    <div className="media-right align-self-center btn-group">{children}</div>
  ) : null;
  parent = parent || parent === 0 ? parent + "." : "";
  const onToggleClick = (e) => {
    ref.current.classList.toggle("show");
  };

  return (
    <div className="media media-xs">
      <div className="btn-group" role="group">
        <div className="btn dropdown-toggle" onClick={onToggleClick}>
          <i className={"fs-1 m-0 fa fa-" + value.icon}></i>
        </div>
        <div className="dropdown-menu" ref={ref} style={{ width: 550 }}>
          {ICONS.map((it) => (
            <label
              key={it}
              className={
                "a service-icon " + (it === value.icon ? "active" : "")
              }
            >
              <input
                name={parent + "icon"}
                value={it}
                onChange={onChange}
                type="radio"
              />
              <i className={"fa fa-" + it}></i>
            </label>
          ))}
        </div>
      </div>
      <div className="media-body me-2">
        <input
          name={parent + "name"}
          value={value.name}
          onChange={onChange}
          className="form-control form-control-md font-weight-bold"
        />
        <textarea
          name={parent + "description"}
          value={value.description}
          onChange={onChange}
          className="form-control form-control-sm"
        />
      </div>
      {children}
    </div>
  );
};

export const RestTarget = ({ value, onChange, parent, children, disabled }) => {
  const methods = ["GET", "POST"];
  parent = parent || parent === 0 ? parent + "." : "";
  return (
    <InputGroup>
      <Form.Select
        name={parent + "method"}
        value={value.method}
        onChange={onChange}
        disabled={disabled}
        className="w-10"
      >
        {methods.map((it) => (
          <option key={it}>{it}</option>
        ))}
      </Form.Select>
      <Form.Control
        name={parent + "url"}
        value={value.url}
        onChange={onChange}
        disabled={disabled}
        className="w-75"
      />
      {children}
    </InputGroup>
  );
};
