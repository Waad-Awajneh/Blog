import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./style.css";
export default function BlogList() {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/Blogs");
  return (
    <div className="BlogList">
      {loading ? (
        <h3 className="loading"> Loading... </h3>
      ) : (
        blogs?.map((blog) => (
          <div key={blog?.id} className="blogItem">
            <Link to={`/SingleBlog/${blog?.id}`}>
              <h3>{blog?.title}</h3>
              <p className="author"> BY :{blog?.author}</p>
              <p className="description">{blog?.description}</p>
            </Link>{" "}
          </div>
        ))
      )}
    </div>
  );
}
