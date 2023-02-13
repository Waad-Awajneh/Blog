import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <nav>
      <h1 className="logo">Estarta Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="create">
          <button>Create Blog</button>
        </Link>
      </div>
    </nav>
  );
}
