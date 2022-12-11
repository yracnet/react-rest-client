import { Card, Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Text from "_/atom/text";
import Icon from "_/atom/icon";

const RequestPage = () => {
  return (
    <Card>
      <Card.Header>
        <Icon name="send" size="1" />
        <Text mx="1" size="5">
          <b>Request</b>
        </Text>
      </Card.Header>
      <Card.Body>
        <Container>
          <Outlet />
        </Container>
      </Card.Body>
    </Card>
  );
};
export default RequestPage;
