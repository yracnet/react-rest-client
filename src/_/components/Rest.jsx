import React, { useRef } from "react";

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
          <code>{value.path}</code>
        </div>
      )}
      {children}
    </div>
  );
};

export const RestTarget = ({ value, onChange, parent, children, disabled }) => {
  const methods = ["GET", "POST"];
  parent = parent || parent === 0 ? parent + "." : "";
  return (
    <div className="input-group mb-3 input-group-xs">
      <select
        className="form-select form-select-lg font-weight-bold text-danger"
        name={parent + "method"}
        value={value.method}
        onChange={onChange}
        disabled={disabled}
      >
        {methods.map((it) => (
          <option key={it}>{it}</option>
        ))}
      </select>

      <input
        type="text"
        className="form-control form-control-lg font-weight-bold  text-primary"
        name={parent + "target"}
        value={value.target}
        onChange={onChange}
        disabled={disabled}
      />
      <input
        type="text"
        className="form-control form-control-lg font-weight-bold  text-primary"
        name={parent + "path"}
        value={value.path}
        onChange={onChange}
        disabled={disabled}
      />
      {children}
    </div>
  );
};
