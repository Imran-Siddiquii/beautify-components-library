import Alert from "../components/Alert";
import CodeBlock from "./CodeBlock";
import Description from "./Description";
import "./styles.css";
const AlertDoc = () => {
  return (
    <div className="doc-container">
      <Description
        heading={"Alert Component"}
        description={
          "The Alert component is used to display various type of messages with different statuses."
        }
      />
      <div className="alert-container">
        <Alert type="info" message="This is an info message." />
        <Alert type="success" message="Success! Operation completed." />
        <Alert type="warning" message="Warning: Proceed with caution." />
        <Alert type="error" message="Error: Something went wrong." />

        <h3 className="alert-icon">Alert with icons</h3>
        <Alert icon type="info" message="This is an info message." />
        <Alert icon type="success" message="Success! Operation completed." />
        <Alert icon type="warning" message="Warning: Proceed with caution." />
        <Alert icon type="error" message="Error: Something went wrong." />
      </div>
      <CodeBlock heading={"alert"} />
    </div>
  );
};
export default AlertDoc;
