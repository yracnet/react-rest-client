import { Button, ButtonGroup, Card, ListGroup } from "react-bootstrap";
import Text from "_/atom/text";
import Icon from "_/atom/icon";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestResumen } from "_/organism";
import { serviceStore } from "_/store";

const ServiceListPage = () => {
  const [value, setValue] = useState([]);
  const onRemoveClick = (it) => {
    serviceStore.remove(it.id);
    const value = serviceStore.values();
    setValue(value);
  };
  const onReloadClick = () => {
    const value = serviceStore.values();
    setValue(value);
  };
  useEffect(onReloadClick, [setValue]);
  return (
    <div>
      {value?.map((it, ix) => (
        <div key={it.id} className="p-2 my-1 border rounded border-dark">
          <RestResumen value={it} full>
            <Link to={"/request/" + it.id} className="btn btn-outline-primary">
              <i className="fa fa-play me-1" />
              Run
            </Link>
            <button
              onClick={(e) => onRemoveClick(it)}
              className="btn btn-outline-danger"
            >
              <i className="fa fa-trash me-1" />
              Remove
            </button>
          </RestResumen>
        </div>
      ))}
    </div>
  );
};

const ServiceListPage2 = () => {
  return (
    <div>
      <Card className="my-2">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Icon name="calendar" />
            <Text as="b" mx="1">
              [W-CLOCK] Get Time
            </Text>
            <p>Api para obtener la fecha actual</p>
            <Text as="b" size="2" color="danger">
              GET
            </Text>
            <Text color="danger">http://server.com/now</Text>
            <ButtonGroup>
              <Button variant="outline-primary">
                <Icon name="play" />
                <Text mx="1">Run</Text>
              </Button>
              <Button variant="outline-danger">
                <Icon name="trash" />
                <Text mx="1">Remove</Text>
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <Icon name="calendar" />
            <Text as="b" mx="1">
              [W-CLOCK] Get Time Bolivia
            </Text>
            <p>Api para obtener la fecha actual</p>
            <Text as="b" size="2" color="danger">
              POST
            </Text>
            <Text color="danger">http://server.com/now?c=BO</Text>
            <ButtonGroup>
              <Button variant="outline-primary">
                <Icon name="play" />
                <Text mx="1">Run</Text>
              </Button>
              <Button variant="outline-danger">
                <Icon name="trash" />
                <Text mx="1">Remove</Text>
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};
export default ServiceListPage;
