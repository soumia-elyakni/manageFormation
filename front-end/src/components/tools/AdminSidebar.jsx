import React from "react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <div className="list-group">
      <Link
        to="organismes"
        className="list-group-item list-group-item-action list-group-item-primary"
      >
        Organismes
      </Link>
      <Link to="organismes" className="list-group-item list-group-item-action">
        Employes
      </Link>
      <Link
        to="organismes"
        className="list-group-item list-group-item-action list-group-item-secondary"
      >
        Formations
      </Link>
    </div>
  );
};


