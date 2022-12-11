import { Card, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router";
import Text from "_/atom/text";
import Icon from "_/atom/icon";
import { NavLink } from "react-router-dom";

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
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link as={NavLink} to="./headers">
              <Icon name="bars" />
              <Text mx="1">Headers</Text>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="./params">
              <Icon name="rss" />
              <Text mx="1">Params</Text>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="./options">
              <Icon name="list" />
              <Text mx="1">Options</Text>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="./">
              <Icon name="question" />
              <Text mx="1">Help</Text>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container>
          <Outlet />
        </Container>
      </Card.Body>
    </Card>
  );
};
export default SettingsPage;
