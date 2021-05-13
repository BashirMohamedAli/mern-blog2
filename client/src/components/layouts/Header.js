import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="#" className="nav-logo">
          Bashir Mohamed
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-post" className="nav-link">
              Add Post
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
