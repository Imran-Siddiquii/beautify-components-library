import "./styles.css";
const CodeBlock = ({ heading }) => {
  return (
    <div className="codeblock-container">
      <h2>How to use {heading} component?</h2>
      <div className="codeblock">
        {heading === "avatar" ? (
          <>
            <p>{`<Avatar src="./Avatar.png" size="small" name="John" />`}</p>
            <p>{`<Avatar src="./Avatar.png" size="medium" name="John" />`}</p>
            <p>{`  <Avatar src="./Avatar.png" size="large" name="John" />
`}</p>
          </>
        ) : null}

        {heading === "alert" ? (
          <>
            <p>
              {`<Alert type="info" message="This is an info message." />
            `}
            </p>
            <p>
              {`<Alert type="success" message="Success! Operation completed." />`}
            </p>
            <p>
              {`<Alert type="warning" message="Warning: Proceed with caution." />`}
            </p>
            <p>
              {`<Alert type="error" message="Error: Something went wrong." />`}
            </p>
            <h3>Alert with icons</h3>
            <p>
              {`<Alert icon type="info" message="This is an info message." />`}
            </p>
            <p>
              {`<Alert
                icon
                type="success"
                message="Success! Operation completed."
              />`}
            </p>
            <p>
              {`<Alert
                icon
                type="warning"
                message="Warning: Proceed with caution."
              />`}
            </p>
            <p>
              {`<Alert icon type="error" message="Error: Something went wrong." />`}
            </p>
          </>
        ) : null}

        {heading === "badge" ? (
          <>
            <p>{`<Badge variant="success"> Success </Badge>`}</p>
            <p>{`<Badge variant="warning"> Warning </Badge>`}</p>
            <p>{`<Badge variant="error"> Error </Badge>`}</p>
          </>
        ) : null}
        {heading === "button" ? (
          <>
            <p>{`<Button variant="primary"> Primary </Button>`}</p>
            <p>{`<Button variant="secondary"> Secondary </Button>`}</p>
            <p>{`<Button variant="danger"> Danger </Button>`}</p>
          </>
        ) : null}

        {heading === "card" ? (
          <>
            <h4>Card With Badge Components </h4>
            <p>{`<CardBadge
              badgeVariant="error"
              badgeText="New"
              heading="Card Heading"
              paragraph="This is the card content."
            />`}</p>
            <h4 className="card-dismissal-heading">
              Card With Dismissal Components
            </h4>
            <p>{`<DismissalCard
              heading="Dismissal Card"
              paragraph="This is a dismissal card with a close button."
              onDismiss={() => {}}
            />`}</p>
            <h4 className="card-dismissal-heading">
              Card With Text Overlay Components
            </h4>
            <p>{`<OverlayTextCard
              imageUrl="https://unsplash.com/images/stock/high-resolution"
              heading="Image Card Heading"
              text="This is the card content with an image and overlay."
            />`}</p>
            <h4 className="card-dismissal-heading">
              Card With Only Text Components
            </h4>
            <p>{`<TextOnlyCard paragraph="This is the card content with only text." />`}</p>
            <h4 className="card-dismissal-heading">Vartical Card Components</h4>
            <p>{`<VerticalImageCard
              imageUrl="https://unsplash.com/images/stock/high-resolution"
              heading="Vertical Card Heading"
              text="This is the card content with a vertical layout."
            />`}</p>
            <h4 className="card-dismissal-heading">
              Horizontal Card Components
            </h4>
            <p>{`<HorizontalCard
              imageUrl="https://unsplash.com/images/stock/high-resolution"
              heading="Horizontal Card Heading"
              text="This is the card content with a horizontal layout."
            />`}</p>
          </>
        ) : null}
        {heading === "heading" ? (
          <>
            <p>
              {` <Heading variant="h6"> (H6) I am in love with reactjs and nextjs</Heading>`}
            </p>
            <p>
              {`<Heading variant="h5"> (H5) I am in love with reactjs and nextjs</Heading>`}
            </p>
            <p>
              {`<Heading variant="h4"> (H4) I am in love with reactjs and nextjs</Heading>`}
            </p>
            <p>
              {`  <Heading variant="h3"> (H3) I am in love with reactjs and nextjs</Heading>`}
            </p>
            <p>
              {` <Heading variant="h2"> (H2) I am in love with reactjs and nextjs</Heading>`}
            </p>
            <p>
              {` <Heading variant="h1"> (H1) I am in love with reactjs and nextjs</Heading>`}
            </p>
          </>
        ) : null}
        {heading === "text" ? (
          <>
            <p>{`<Text variant="small"> I am in love with reactjs and nextjs </Text>`}</p>
            <p>{`<Text variant="large"> I am in love with reactjs and nextjs </Text>`}</p>
            <p>{`<Text variant="extra-large">
              I am in love with reactjs and nextjs
            </Text>`}</p>
            <p>{`<Text variant="large-2x">
              I am in love with reactjs and nextjs
            </Text>`}</p>
            <p>{`<Text variant="large-3x">
              I am in love with reactjs and nextjs
            </Text>`}</p>
            <p>{`<Text variant="large-4x">
               I am in love with reactjs and nextjs
            </Text>`}</p>
            <p>{`<Text variant="large-5x">
               I am in love with reactjs and nextjs
            </Text>`}</p>
            <p>{`<Text variant="large-5x">
              I am in love with reactjs and nextjs
            </Text>`}</p>
          </>
        ) : null}
        {heading === "image" ? (
          <>
            <p>{` <Image
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg"
              alt="Sample Image"
              width="250"
              height="150"
            />`}</p>
            <h4>Round Image Components</h4>

            <p>{`<RoundImage
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg"
              alt="Round Image"
              size="150px"
            />`}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CodeBlock;
