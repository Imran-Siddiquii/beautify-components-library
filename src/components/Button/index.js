import "./styles.css";
const Button = ({ variant, children }) => {
  return <button className={`${variant}-button buttons`}>{children}</button>;
};

export default Button;
