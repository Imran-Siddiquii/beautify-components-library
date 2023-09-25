import "./styles.css";
import React from "react";
import Badge from "../Badge"; // Import the Badge component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// card with badge
const CardBadge = ({ badgeText, badgeVariant, heading, paragraph }) => {
  return (
    <>
      <div>
        <div className="card">
          <Badge variant={badgeVariant}>{badgeText}</Badge>
          <div className="card-content">
            <h3 className="card-heading">{heading}</h3>
            <p className="card-paragraph">{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

// card with cancel button
const DismissalCard = ({ heading, paragraph, onDismiss }) => {
  return (
    <div className="dismissal-card">
      <button className="dismissal-button" onClick={onDismiss}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};
// text only card
const TextOnlyCard = ({ paragraph }) => {
  return (
    <div className="card">
      <p className="card-paragrap">{paragraph}</p>
    </div>
  );
};

// overlay Text on image card
const OverlayTextCard = ({ imageUrl, heading, text }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="overlay">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

// varital card
const VerticalImageCard = ({ imageUrl, heading, text }) => {
  return (
    <div className="vertical-image-card">
      <img src={imageUrl} alt="Card" className="card-image-vartical" />
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

// horizontal card

const HorizontalCard = ({ imageUrl, heading, text }) => {
  return (
    <div className="horizontal-card">
      <img src={imageUrl} alt="Card" className="card-image-horizontal" />
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export {
  DismissalCard,
  CardBadge,
  TextOnlyCard,
  OverlayTextCard,
  VerticalImageCard,
  HorizontalCard
};
