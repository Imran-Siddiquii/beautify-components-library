import "./styles.css";
const Heading = ({ variant, children }) => {
  const Tag = variant || "h5";
  return <Tag>{children}</Tag>;
};

export default Heading;

// <div className="heading-page">
//   <div className="heading-container">
//   </div>
// </div>
