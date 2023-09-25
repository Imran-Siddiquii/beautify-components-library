import CodeBlock from "./CodeBlock";
import Description from "./Description";
import "../components/Badge/styles.css";
import { Image, RoundImage } from "../components/Image";
const ImageDoc = () => {
  return (
    <>
      {" "}
      <div className="doc-container">
        <Description
          heading={"Image Component"}
          description={
            "The Image component is used to display images with support for fallback."
          }
        />
        <div className="image-page">
          <div className="image-container">
            <Image
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400"
              alt="Sample Image"
              width="250"
              height="150"
            />
            <br />
            <h2>Round Image Components</h2>
            <p className="image-round-description">
              The Image component used to display image in round shape
            </p>
            <RoundImage
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400"
              alt="Round Image"
              size="150px" // Optional: Specify the size of the circular image
            />
          </div>
        </div>
        <CodeBlock heading={"image"} />
      </div>
    </>
  );
};
export default ImageDoc;

{
  /* */
}
