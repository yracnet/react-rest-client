import { Card } from "react-bootstrap";
import { Outlet } from "react-router";
import Text from "_/atom/text";
import Icon from "_/atom/icon";

const ServicePage = () => {
  return (
    <Card>
      <Card.Header>
        <Icon name="server" size="1" />
        <Text mx="1" size="5">
          <b>Services</b>
        </Text>
      </Card.Header>
      <Card.Body>
        <Outlet />
      </Card.Body>
    </Card>
  );
};
export default ServicePage;
