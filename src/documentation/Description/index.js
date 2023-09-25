import "./styles.css";
const Description = ({ heading, description }) => {
  return (
    <div className="description-container">
      <h1>{heading}</h1>
      <p className="description-para">{description}</p>
    </div>
  );
};
export default Description;
