import "./styles.css";

const Text = ({ variant, children }) => {
  const className = `Text ${variant || "small"}`;

  return <p className={className}>{children}</p>;
};

export default Text;
