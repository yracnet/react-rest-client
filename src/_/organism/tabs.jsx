import { useState } from "react";

export const XTab = ({ children = [], activeName: init, ...props }) => {
  const [activeName, setActiveName] = useState(init);
  let navLinks = children.map((item) => {
    let { title, name } = item.props;
    let active = activeName === name ? "active" : "";
    return (
      <span
        className={"a nav-link " + active}
        href={"#" + name}
        key={name}
        onClick={(e) => setActiveName(name)}
      >
        {title}
      </span>
    );
  });
  let navContents = children.map((item) => {
    let { name, children } = item.props;
    let active = activeName === name ? "show active" : "";
    return (
      <div className={"tab-pane fade " + active} key={name}>
        {children}
      </div>
    );
  });
  return (
    <div {...props}>
      <div className="nav nav-tabs">{navLinks}</div>
      <div className="tab-content px-1 py-2">{navContents}</div>
    </div>
  );
};
export const Item = ({ name, activeName, children }) => {
  let active = activeName === name ? "show active" : "";
  return <div className={"tab-pane fade " + active}>{children}</div>;
};
XTab.Item = Item;
