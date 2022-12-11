const CN = ["mx", "my", "ms", "me"];
const Text = (props) => {
  const { as: AS, size: s, color: c, children } = props;
  let cn = CN.filter((k) => props[k])
    .map((k) => `${k}-${props[k]}`)
    .join(" ");
  return <AS className={`fs-${s} text-${c} ${cn}`}>{children}</AS>;
};
Text.defaultProps = {
  as: "span",
  family: "fa",
  size: 0,
  mx: 0,
  my: 0,
  ms: 0,
  me: 0,
};
export default Text;
