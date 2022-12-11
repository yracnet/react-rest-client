const ErrorLayout = (props) => {
  const { code } = props;
  return (
    <div>
      <h1>{code}</h1>
      <p>Not Found</p>
    </div>
  );
};

export default ErrorLayout;
