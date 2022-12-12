import { Alert, Card, Container, Nav, Tab, Tabs } from "react-bootstrap";
import { Outlet } from "react-router";
import Text from "_/atom/text";
import Icon from "_/atom/icon";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "_/hooks/useForm";
import { paramStore } from "_/store";
import { PropValue } from "_/organism";
import HelpTab from "./_part/help";
import ParamsTab from "./_part/params";
import HeadersTab from "./_part/headers";
import OptionTab from "./_part/options";
import Title from "../../../_/atom/title";

const SettingsPage = () => {
  return (
    <Card>
      <Card.Header>
        <Icon name="cogs" size="1" />
        <Text mx="1" size="5">
          <b>Settings</b>
        </Text>
      </Card.Header>
      <Card.Body>
        <Tabs defaultActiveKey="help" className="m-2">
          <Tab eventKey="help" title={<Title icon="question">Help</Title>}>
            <HelpTab />
          </Tab>
          <Tab eventKey="header" title={<Title icon="bars">Headers</Title>}>
            <HeadersTab />
          </Tab>
          <Tab eventKey="params" title={<Title icon="rss">Params</Title>}>
            <ParamsTab />
          </Tab>
          <Tab eventKey="options" title={<Title icon="list">Options</Title>}>
            <OptionTab />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
};
export default SettingsPage;
