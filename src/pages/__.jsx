import { Outlet } from "react-router";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "_/images/logo.png";
import "./__.scss";
import Icon from "_/atom/icon";
import Text from "_/atom/text";
const MainPage = () => {
  return (
    <>
      <Navbar as="header" bg="white">
        <Container>
          <Navbar.Brand as={NavLink} to="./">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Rest Client"
            />
            <Text as="b" mx="1">
              Rest Client
            </Text>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="./request/">
              <Icon name="send" />
              <Text mx="1">Request</Text>
            </Nav.Link>
            <Nav.Link as={NavLink} to="./services/">
              <Icon name="server" />
              <Text mx="1">Services</Text>
            </Nav.Link>
            <Nav.Link as={NavLink} to="./settings/">
              <Icon name="cogs" />
              <Text mx="1">Settings</Text>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container as="main" className="mt-2">
        <Outlet />
      </Container>
      <Navbar as="footer" bg="white">
        <Container>
          <a href="https://hiskasoft.com" className="mx-auto text-primary">
            Copyright © 2022 - HiskaSoft
          </a>
        </Container>
      </Navbar>
    </>
  );
};
export default MainPage;
