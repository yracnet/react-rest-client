import React from "react";
import { Tab } from "_/components";
import { Header } from "./Header";
import { Option } from "./Option";
import { Param } from "./Param";

export const SettingIndex = () => {
  return (
    <div className="card">
      <div className="card-header media">
        <div className="align-self-center me-1 ">
          <i className="h2 m-1 fa fa-cogs"></i>
        </div>
        <div className="media-body">
          <div className="h5 m-0 font-weight-bold">Settings</div>
          <div>Settings Rest Client</div>
        </div>
      </div>
      <div className="card-body">
        <Tab activeName="headers" style={{ minHeight: 300 }}>
          <Tab.Item title="Headers" name="headers">
            <Header />
          </Tab.Item>
          <Tab.Item title="Params" name="params">
            <Param />
          </Tab.Item>
          <Tab.Item title="Options" name="options">
            <Option />
          </Tab.Item>
        </Tab>
      </div>
    </div>
  );
};
