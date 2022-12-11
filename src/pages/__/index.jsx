import { useLoaderData } from "react-router";

import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Badge, Card, ListGroup } from "react-bootstrap";
import Icon from "_/atom/icon";
import Text from "_/atom/text";

const IndexPage = () => {
  return (
    <Card>
      <Card.Body className="m-5">
        <Card.Title as="h1">Welcome to Rest-Client</Card.Title>
        <Card.Text>It is an example/utility app using:</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Icon />
            <Text mx="2">react</Text>
            <Badge>18.X</Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            <Icon />
            <Text mx="2">react-router</Text>
            <Badge>6.X</Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            <Icon />
            <Text mx="2">react-bootstrap</Text>
            <Badge>2.X</Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default IndexPage;
