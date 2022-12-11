// const CN = ["mx", "my", "ms", "me"];
const CN = Object.entries({
  mx: "mx",
  my: "my",
  ms: "ms",
  me: "me",
}).map((it) => ({ k: it[0], c: it[1] }));

const Icon = (props) => {
  const { name: n, family: f, size: s } = props;
  let cn = CN.map((it) => ({ ...it, v: props[it.k] }))
    .filter((it) => it.v)
    .map((it) => `${it.c}-${it.v}`)
    .join(" ");
  return <i className={`${f} ${f}-${n} ${f}-${s}x ${cn}`} />;
};
Icon.defaultProps = {
  name: "check",
  family: "fa",
  size: 1,
  mx: 0,
  my: 0,
  ms: 0,
  me: 0,
};
export default Icon;
