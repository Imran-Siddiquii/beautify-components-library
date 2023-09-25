import CodeBlock from "./CodeBlock";
import Description from "./Description";
import "../components/Heading/styles.css";
import {
  CardBadge,
  DismissalCard,
  HorizontalCard,
  OverlayTextCard,
  TextOnlyCard,
  VerticalImageCard
} from "../components/Card";
const CardDoc = () => {
  return (
    <>
      <div className="doc-container">
        <Description
          heading={"Card Component"}
          description={
            "Card is flexible component used to group and display content in a clear and concise format."
          }
        />
        <div className="heading-page">
          <div className="heading-container">
            <h2>Card With Badge Components </h2>
            <CardBadge
              badgeVariant="error"
              badgeText="New"
              heading="Card Heading"
              paragraph="This is the card content."
            />
            <h2 className="card-dismissal-heading">
              Card With Dismissal Components{" "}
            </h2>
            <DismissalCard
              heading="Dismissal Card"
              paragraph="This is a dismissal card with a close button."
              onDismiss={() => {
                // Handle dismissal logic here
                console.log("Dismissed!");
              }}
            />
            <h2 className="card-dismissal-heading">
              Card With Text Overlay Components
            </h2>
            <OverlayTextCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDd7xgO-h6KO_2tckWEey3MRaPWvG2FpD9nO1agLun&s"
              heading="Image Card Heading"
              text="This is the card content with an image and overlay."
            />
            <h2 className="card-dismissal-heading">
              Card With Only Text Components
            </h2>
            <TextOnlyCard paragraph="This is the card content with only text." />
            <h2 className="card-dismissal-heading">Vartical Card Components</h2>
            <VerticalImageCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDd7xgO-h6KO_2tckWEey3MRaPWvG2FpD9nO1agLun&s"
              heading="Vertical Card Heading"
              text="This is the card content with a vertical layout."
            />
            <h2 className="card-dismissal-heading">
              Horizontal Card Components
            </h2>
            <HorizontalCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDd7xgO-h6KO_2tckWEey3MRaPWvG2FpD9nO1agLun&s"
              heading="Horizontal Card Heading"
              text="This is the card content with a horizontal layout."
            />
          </div>
        </div>

        <CodeBlock heading={"card"} />
      </div>
    </>
  );
};
export default CardDoc;
