import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
export default function CreateBlog() {
  const navigate = useNavigate();
  const myRef = useRef({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    author: "",
  });
  const handelChange = (e) => {
    myRef.current = { ...myRef.current, [e.target.name]: e.target.value };
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(myRef);
    fetch("http://localhost:8000/Blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myRef.current),
    });
    navigate("/");
  };

  return (
    <div className="container">
      <h3>Create A New Blog</h3>
      <form onSubmit={handelSubmit}>
        <input
          onChange={(e) => handelChange(e)}
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          type="text"
          name="author"
          onChange={handelChange}
          placeholder="author"
        />
        <textarea
          rows={5}
          type="text"
          name="description"
          placeholder="description"
          onChange={handelChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
