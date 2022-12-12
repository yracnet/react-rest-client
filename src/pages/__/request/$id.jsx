import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContentData, ContentRaw } from "_/organism";
import { useForm } from "_/hooks/useForm";
import {
  transformErrorResponse,
  transformFetchRequest,
  transformFetchResponse,
} from "_/helpers/transform";
import { Fetch } from "./_part/fetch";
import { Header } from "./_part/header";
import { RestTarget, RestService } from "./_part/rest";
import { serviceStore } from "_/store";
import { Card, Tab, Tabs } from "react-bootstrap";
import Title from "_/atom/title";

const SERVICE_INIT = {
  icon: "server",
  name: "...",
  description: "...",
  method: "POST",
  url: "http://localhost:8080/api/status",
  headers: [],
  contentType: "",
  content: "",
  fetch: {},
};
const RESPONSE_INIT = {
  headers: [],
  contentType: "",
  content: "",
  raw: "",
};

const RequestPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setService, onServiceChange] = useForm(SERVICE_INIT);
  const [request, setRequest] = useState({});
  const [response, setResponse, onResponseChange] = useForm(RESPONSE_INIT);

  useEffect(() => {
    const request = transformFetchRequest(service);
    setRequest(request);
  }, [service, setRequest]);

  useEffect(() => {
    if (id) {
      const data = serviceStore.findId(id);
      setService(data || SERVICE_INIT);
    }
  }, [id, setService]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { url, ...params } = transformFetchRequest(service);
      if (["HEAD", "GET"].indexOf(params.method) === -1) {
        params.body = service.content;
      } else {
        params.body = undefined;
      }
      const req = new Request(url, params);
      console.debug("Request--->", req);
      const res = await fetch(req);
      console.debug("Response--->", res);
      const response = await transformFetchResponse(res);
      setResponse(response);
    } catch (error) {
      console.debug("Error--->", error);
      const response = transformErrorResponse(error);
      setResponse(response);
    }
  };
  const onSave = () => {
    serviceStore.update(id, service);
  };
  const onSaveCopy = () => {
    const id = serviceStore.create(service);
    //console.log(">>>", navigate);
    navigate("/request/" + id);
  };
  return (
    <form onSubmit={onSubmit}>
      <Card>
        <Card.Header>
          <RestService value={service} onChange={onServiceChange}>
            <button
              className="btn btn-dark p-2"
              onClick={onSave}
              type="button"
              disabled={!id}
            >
              <i className="fa fa-save me-2" />
              Save
            </button>
            <button
              className="btn btn-outline-dark p-2"
              onClick={onSaveCopy}
              type="button"
            >
              <i className="fa fa-save me-2" />
              Save copy
            </button>
          </RestService>
        </Card.Header>
        <Card.Body>
          <RestTarget value={service} onChange={onServiceChange}>
            <button className="btn btn-primary" type="submit">
              <i className="fa fa-send me-2" />
              Enviar
            </button>
          </RestTarget>
          <Card.Title>Request</Card.Title>
          <Tabs activeName="content">
            <Tab eventKey="content" title={<Title icon="edit">Content</Title>}>
              <ContentData value={service} onChange={onServiceChange} />
            </Tab>
            <Tab eventKey="header" title={<Title icon="list">Headers</Title>}>
              <Header
                value={service}
                setValue={setService}
                onChange={onServiceChange}
              />
            </Tab>
            <Tab eventKey="fetch" title={<Title icon="send">Fetch</Title>}>
              <Fetch value={service} onChange={onServiceChange} />
            </Tab>
            <Tab eventKey="raw" title={<Title icon="file-o">Raw</Title>}>
              <ContentRaw value={request} />
            </Tab>
          </Tabs>
          <Card.Title>Response</Card.Title>
          <Tabs activeName="content">
            <Tab eventKey="content" title={<Title icon="edit">Content</Title>}>
              <ContentData
                value={response}
                onChange={onResponseChange}
                disabled
              />
            </Tab>
            <Tab eventKey="header" title={<Title icon="list">Headers</Title>}>
              <Header value={response} disabled />
            </Tab>
            <Tab eventKey="raw" title={<Title icon="file-o">Raw</Title>}>
              <ContentRaw value={response.raw} />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </form>
  );
};

export default RequestPage;
