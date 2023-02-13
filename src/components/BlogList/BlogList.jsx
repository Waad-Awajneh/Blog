import React from "react";
import "./style.css";
export default function BlogList({ blogs, loading }) {
  return (
    <div className="BlogList">
      {loading ? (
        <h3 className="loading"> Loading... </h3>
      ) : (
        blogs?.map((blog) => (
          <div key={blog.id} className="blogItem">
            <h3>{blog.title}</h3>
            <p className="author"> BY :{blog.author}</p>
            <p className="description">{blog.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
