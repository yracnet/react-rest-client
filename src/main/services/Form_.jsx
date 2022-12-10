import React from "react";
import { useForm } from "_/hooks/useForm";
import { HeaderProps } from "_/components/ConfigProps";
import { ContentData } from "_/components/Content";
import { FetchProps } from "_/components/FetchProps";
import { RestService } from "_/components/RestService";
import { Tab } from "_/components/Tab";
import { RestTarget } from "_/components/RestTarget";

const REQUEST_INIT = {
  name: "",
  description: "",
  method: "GET",
  target: "",
  path: "",
  headers: [],
  contentType: "",
  content: "",
  fetch: {},
};

export const Form = () => {
  const useFormRef = useForm(REQUEST_INIT);
  const [request, , onRequestChange] = useFormRef;
  const onSubmit = async (e) => {};
  return (
    <form className="card" onSubmit={onSubmit}>
      <div className="card-header">
        <RestService value={request} onChange={onRequestChange} />
      </div>
      <div className="card-body">
        <RestTarget value={request} onChange={onRequestChange} />
        <Tab activeName="content" style={{ minHeight: 300 }}>
          <Tab.Item title="Content" name="content">
            <ContentData useFormRef={useFormRef} />
          </Tab.Item>
          <Tab.Item title="Headers" name="header">
            <HeaderProps useFormRef={useFormRef} />
          </Tab.Item>
          <Tab.Item title="Fetch Config" name="fetch">
            <FetchProps useFormRef={useFormRef} />
          </Tab.Item>
        </Tab>
        <button className="btn btn-secondary p-2" type="button">
          <i className="fa fa-trash mr-2" />
          Cancelar
        </button>
        <button className="btn btn-primary p-2" type="button">
          <i className="fa fa-save mr-2" />
          Guardar
        </button>
        <button className="btn btn-danger p-2" type="button">
          <i className="fa fa-trash mr-2" />
          Eliminar
        </button>
      </div>
    </form>
  );
};
