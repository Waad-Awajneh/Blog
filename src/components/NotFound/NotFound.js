import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function NotFound() {
  return (
    <div className="Container">
      <h3 className="NotFound"> 404 </h3>
      <Link to={"/"}>
        <button>Go Home</button>
      </Link>
    </div>
  );
}
