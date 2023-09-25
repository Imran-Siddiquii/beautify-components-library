import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

const Alert = ({ type, message, icon }) => {
  const alertClass = `alert ${type || "info"}`;
  const icons = {
    info: faInfoCircle,
    success: faCheckCircle,
    warning: faExclamationTriangle,
    error: faTimesCircle
  };

  return (
    <div className={alertClass}>
      {icon ? (
        <div className="alert-icon">
          <FontAwesomeIcon icon={icons[type || "info"]} />
        </div>
      ) : null}
      <div className="alert-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
