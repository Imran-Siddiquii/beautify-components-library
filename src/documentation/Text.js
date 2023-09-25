import CodeBlock from "./CodeBlock";
import Description from "./Description";
import "../components/Heading/styles.css";
import Text from "../components/Text";
const TextDoc = () => {
  return (
    <>
      <div className="doc-container">
        <Description
          heading={"Text Component"}
          description={
            "Text is used to render text and paragraphs within and interface."
          }
        />
        <div className="text-page">
          <div className="text-container">
            <Text variant="small">
              (Small) I am in love with reactjs and nextjs
            </Text>
            <Text variant="large">
              (Large) I am in love with reactjs and nextjs
            </Text>
            <Text variant="extra-large">
              (Extra Large Text) I am in love with reactjs and nextjs
            </Text>
            <Text variant="large-2x">
              (large-2x) I am in love with reactjs and nextjs
            </Text>
            <Text variant="large-3x">
              (large-3x) I am in love with reactjs and nextjs
            </Text>
            <Text variant="large-4x">
              (large-4x) I am in love with reactjs and nextjs
            </Text>
            <Text variant="large-5x">
              (large-5x) I am in love with reactjs and nextjs
            </Text>
            <Text variant="large-5x">
              (large-6x) I am in love with reactjs and nextjs
            </Text>
          </div>
        </div>
        <CodeBlock heading={"text"} />
      </div>
    </>
  );
};
export default TextDoc;
