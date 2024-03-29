import { useEffect } from "react";
import { useForm } from "_/hooks/useForm";
import { optionStore } from "_/store";
import { PropValues } from "_/organism";

const OptionTab = () => {
  const [value, setValue, onChange] = useForm([]);
  useEffect(() => {
    const value = optionStore.values();
    setValue(value);
  }, [setValue]);
  const onSubmit = async (e) => {
    e.preventDefault();
    optionStore.bulk(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <PropValues value={value} setValue={setValue} onChange={onChange} />
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

export default OptionTab;
