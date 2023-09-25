import CodeBlock from "./CodeBlock";
import Description from "./Description";
import "../components/Button/styles.css";
import Button from "../components/Button";
const ButtonDoc = () => {
  return (
    <>
      <div className="doc-container">
        <Description
          heading={"Button Component"}
          description={
            "The Button component provide varioud styles for different actions."
          }
        />
        <div className="button-page">
          <div className="button-container">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>
        <CodeBlock heading={"button"} />
      </div>
    </>
  );
};
export default ButtonDoc;

{
  /* */
}
