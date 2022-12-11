import { useEffect } from "react";
import { useForm } from "_/hooks/useForm";
import { paramStore } from "_/store";
import { PropValue } from "_/organism";

const SettingParamsPage = () => {
  const [value, setValue, onChange] = useForm([]);
  useEffect(() => {
    const value = paramStore.values();
    setValue(value);
  }, [setValue]);
  const onSubmit = async (e) => {
    e.preventDefault();
    paramStore.bulk(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <PropValue value={value} setValue={setValue} onChange={onChange} />
      <button
        className="align-self-center btn btn-sm btn-primary"
        type="submit"
      >
        <i className="fa fa-save me-2" />
        Guardar
      </button>
    </form>
  );
};

export default SettingParamsPage;
