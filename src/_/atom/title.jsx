import Icon from "./icon";
import Text from "./text";

const Title = (props) => {
  const { icon, children } = props;
  return (
    <span>
      <Icon name={icon} />
      <Text mx="1">{children}</Text>
    </span>
  );
};
export default Title;
