import CodeBlock from "./CodeBlock";
import Description from "./Description";
import "../components/Badge/styles.css";
import Badge from "../components/Badge";
const BadgeDoc = () => {
  return (
    <>
      {" "}
      <div className="doc-container">
        <Description
          heading={"Badge Component"}
          description={
            "The Badge component is used to hightlight and display short information, labels or statuses."
          }
        />
        <div className="badge-page">
          <div className="badge-container">
            <Badge variant="success">Success </Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </div>
        <CodeBlock heading={"badge"} />
      </div>
    </>
  );
};
export default BadgeDoc;
