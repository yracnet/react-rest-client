import { PropValue } from "_/organism";

export const Header = ({ value, setValue, onChange, ...props }) => {
  const setHeaders = (headers) => {
    setValue({ ...value, headers });
  };
  return (
    <PropValue
      value={value.headers}
      setValue={setHeaders}
      onChange={onChange}
      parent="headers"
      {...props}
    />
  );
};
