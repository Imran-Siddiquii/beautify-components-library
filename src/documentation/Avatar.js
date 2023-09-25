import Avatar from "../components/Avatar";
import CodeBlock from "./CodeBlock";
import Description from "./Description";
import "./styles.css";
const AvatarDoc = () => {
  return (
    <div className="doc-container">
      <Description
        heading={"Avatar Component"}
        description={
          "The Avatar component display an image representing a user or entity, along with name."
        }
      />
      <div className="avatar-page">
        <div className="content-container">
          <div className="avatar-container">
            <Avatar src="./Avatar.png" size="small" name="John" />
            <Avatar src="./Avatar.png" size="medium" name="John" />
            <Avatar src="./Avatar.png" size="large" name="John" />
          </div>
        </div>
      </div>
      <CodeBlock heading={"avatar"} />
    </div>
  );
};
export default AvatarDoc;
