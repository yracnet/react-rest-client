import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { RestService, RestTarget } from "_/components";
import { useForm } from "_/hooks/useForm";
import { serviceStore } from "_/store";

const SERVICE_INIT = {
  id: 0,
  icon: "flash",
  name: "*",
  descripcion: "*",
  target: "http://localhost:8080/api",
  path: "/auth/status",
};

export const Form = () => {
  const history = useHistory();
  const { id } = useParams();
  const [value, setValue, onChange] = useForm(SERVICE_INIT);
  useEffect(() => {
    const data = serviceStore.findId(id);
    if (data) {
      setValue(data);
    }
  }, [id, setValue]);
  const onSubmit = (e) => {
    e.preventDefault();
    serviceStore.update(id, value);
    history.goBack();
  };
  return (
    <form className="card" onSubmit={onSubmit}>
      <div className="card-header">
        <RestService value={value} onChange={onChange} />
      </div>
      <div className="card-body">
        <RestTarget value={value} onChange={onChange}></RestTarget>
      </div>
      <div className="card-footer btn-group">
        <Link to="/service" className="btn btn-secundary">
          <i className="fa fa-times mr-1" />
          Cancel
        </Link>
        <span className="w-50"></span>
        <button className="btn btn-outline-primary" type="submit">
          <i className="fa fa-pencil mr-1" />
          Save
        </button>
      </div>
    </form>
  );
};
