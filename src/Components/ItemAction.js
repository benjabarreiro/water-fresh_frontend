import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemAction({ children, action, icon }) {
  return (
    <div className="add-item-container" onClick={action}>
      <FontAwesomeIcon className="add-icon" icon={icon} />
      <div className="add-item-overlay"></div>
      {children}
    </div>
  );
}
