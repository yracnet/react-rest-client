import { Alert, Card, Container } from "react-bootstrap";
import Icon from "_/atom/icon";
import Text from "_/atom/text";

const HelpTab = () => {
  return (
    <Container className="p-2">
      <Alert variant="info">
        <p>Settings Rest Client</p>
        <ul>
          <li>Headers: Default headers to attach in all request</li>
          <li>Params: Enviroment variables used in all input text</li>
        </ul>
      </Alert>
    </Container>
  );
};
export default HelpTab;
