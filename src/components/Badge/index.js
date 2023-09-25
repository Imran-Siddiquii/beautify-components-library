// import Avatar from "../Avatar";
import "./styles.css";

const Badge = ({ variant, children }) => {
  return (
    <>
      <span className={`badge ${variant}`}>{children}</span>
    </>
  );
};
export default Badge;
