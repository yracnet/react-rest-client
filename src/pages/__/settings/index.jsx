import { Alert, Card, Container } from "react-bootstrap";
import Icon from "_/atom/icon";
import Text from "_/atom/text";

const IndexPage = () => {
  return (
    <Container className="m-3">
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
export default IndexPage;
