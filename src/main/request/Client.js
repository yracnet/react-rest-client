import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import { Tab, RestTarget, ContentData, ContentRaw, RestService } from '_/components';
import { useForm } from '_/hooks/useForm';
import { transformErrorResponse, transformFetchRequest, transformFetchResponse } from '_/helpers/transform';
import { Fetch } from './client/Fetch';
import { Header } from './client/Header';
import { serviceStore } from '_/store';

//const SERVICE_INIT = {
//  icon: 'calendar',
//  name: '[W-CLOCK] Get Time',
//  description: 'Api para obtener la fecha actual',
//  method: 'GET',
//  target: 'http://worldclockapi.com/api/json/utc',
//  path: '/now',
//  headers: [],
//  contentType: '',
//  content: '',
//  fetch: {}
//}
const SERVICE_INIT = {
  icon: 'server',
  name: '...',
  description: '...',
  method: 'POST',
  target: 'http://localhost:8080/api',
  path: '/status',
  headers: [],
  contentType: '',
  content: '',
  fetch: {}
}
const RESPONSE_INIT = {
  headers: [],
  contentType: '',
  content: '',
  raw: ''
}



export const Client = () => {
  const history = useHistory();
  const { id } = useParams()
  const [service, setService, onServiceChange] = useForm(SERVICE_INIT)
  const [request, setRequest] = useState({})
  const [response, setResponse, onResponseChange] = useForm(RESPONSE_INIT)

  useEffect(() => {
    const request = transformFetchRequest(service);
    setRequest(request)
  }, [service, setRequest])

  useEffect(() => {
    if (id) {
      const data = serviceStore.findId(id)
      setService(data || SERVICE_INIT)
    }
  }, [id, setService])

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { url, ...params } = { ...request }
      if (params.body) {
        params.body = request.content
      }
      const req = new Request(url, params);
      console.debug('Request--->', req);
      const res = await fetch(req)
      console.debug('Response--->', res);
      const response = await transformFetchResponse(res);
      setResponse(response)
    } catch (error) {
      console.debug('Error--->', error);
      const response = transformErrorResponse(error);
      setResponse(response)

    }
  }
  const onSave = () => {
    serviceStore.update(id, service)
  }
  const onSaveCopy = () => {
    const id = serviceStore.create(service)
    history.push('/request/' + id)
  }
  return (
    <form className="card" onSubmit={onSubmit}>
      <div className="card-header">
        <RestService value={service} onChange={onServiceChange}>
          <button className="btn btn-dark p-2"
            onClick={onSave}
            type="button"
            disabled={!id}>
            <i className="fa fa-save mr-2" />
            Save
          </button>
          <button className="btn btn-outline-dark p-2"
            onClick={onSaveCopy}
            type="button">
            <i className="fa fa-save mr-2" />
            Save copy
          </button>
        </RestService>
      </div>
      <div className="card-body">
        <RestTarget value={service} onChange={onServiceChange}>
          <button className="btn btn-primary" type="submit">
            <i className="fa fa-send mr-2" />
            Enviar
          </button>
        </RestTarget>
        <h4 className="card-title">Request</h4>
        <Tab activeName='content' style={{ minHeight: 300 }}>
          <Tab.Item title="Content" name='content'>
            <ContentData value={service} onChange={onServiceChange} />
          </Tab.Item>
          <Tab.Item title="Headers" name='header'>
            <Header value={service} setValue={setService} onChange={onServiceChange} />
          </Tab.Item>
          <Tab.Item title="Fetch" name='fetch'>
            <Fetch value={service} onChange={onServiceChange} />
          </Tab.Item>
          <Tab.Item title="Raw" name='raw'>
            <ContentRaw value={request} />
          </Tab.Item>
        </Tab>
        <h4 className="card-title">Response</h4>
        <Tab activeName='content' style={{ minHeight: 300 }}>
          <Tab.Item title="Content" name='content'>
            <ContentData value={response} onChange={onResponseChange} disabled />
          </Tab.Item>
          <Tab.Item title="Headers" name='header'>
            <Header value={response} disabled />
          </Tab.Item>
          <Tab.Item title="Raw" name='raw'>
            <ContentRaw value={response.raw} />
          </Tab.Item>
        </Tab>
      </div>
    </form>
  );
}
