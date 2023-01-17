import React from "react";
import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <div className="list-group " style={{ width: "18rem" }}>
      <Link
        to="organismes"
        className="list-group-item list-group-item-action list-group-item-primary"
      >
        Organismes
      </Link>
      <Link to="employes" className="list-group-item list-group-item-action">
        Employes
      </Link>
      <Link
        to="formations"
        className="list-group-item list-group-item-action list-group-item-secondary"
      >
        Formations
      </Link>
    </div>
  );
};
