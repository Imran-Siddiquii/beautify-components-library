import CodeBlock from "./CodeBlock";
import Description from "./Description";
import "../components/Heading/styles.css";
import Heading from "../components/Heading";
const HeadingDoc = () => {
  return (
    <>
      <div className="doc-container">
        <Description
          heading={"Heading Component"}
          description={
            "The Heading used to render semantic HTML heading elements."
          }
        />
        <div className="heading-page">
          <div className="heading-container">
            <Heading variant="h6">
              (H6) I am in love with reactjs and nextjs
            </Heading>
            <Heading variant="h5">
              (H5) I am in love with reactjs and nextjs
            </Heading>
            <Heading variant="h4">
              (H4) I am in love with reactjs and nextjs
            </Heading>
            <Heading variant="h3">
              (H3) I am in love with reactjs and nextjs
            </Heading>
            <Heading variant="h2">
              (H2) I am in love with reactjs and nextjs
            </Heading>
            <Heading variant="h1">
              (H1) I am in love with reactjs and nextjs
            </Heading>
          </div>
        </div>
        <CodeBlock heading={"heading"} />
      </div>
    </>
  );
};
export default HeadingDoc;
