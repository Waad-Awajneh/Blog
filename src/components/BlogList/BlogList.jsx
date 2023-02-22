import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./style.css";
import { AiFillEdit } from "react-icons/ai";
import TitleInput from "./titleInput";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const titleRef = useRef();
  const [refresh, setRefresh] = useState(true);
  const [newData, setNewData] = useState(null);
  const [dataToEdit, setDataToEdit] = useState([]);

  const { data: blogs, loading } = useFetch("http://localhost:8000/Blogs", [
    refresh,
  ]);

  useEffect(() => {
    if (newData) handelSubmit();
  }, [newData]);

  const handelSubmit = async () => {
    try {
      await fetch(`http://localhost:8000/Blogs/${newData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
    } catch (error) {
      console.log(error);
    }
    setRefresh(!refresh);
  };

  function close(blog_id) {
    setDataToEdit((prev) => {
      let retArray = prev?.filter((id) => id != blog_id);
      return retArray == "" ? [] : retArray;
    });
  }

  if (loading) return <h3 className="loading"> Loading... </h3>;
  return (
    <div className="BlogList">
      <input
        type={"text"}
        placeholder="Search... "
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {blogs
        ?.filter((blog) =>
          blog.author?.toLowerCase().includes(searchTerm?.toLowerCase())
        )
        ?.map((blog, i) => (
          <div key={blog?.id} className="blogItem">
            {!dataToEdit?.includes(blog?.id) ? (
              <span className="title">
                <Link to={`/SingleBlog/${blog?.id}`}>
                  <h3>{blog?.title}</h3>
                </Link>
                <AiFillEdit
                  onClick={() => {
                    setDataToEdit((prev) => [...prev, blog?.id]);
                    titleRef.current = blog?.title;
                  }}
                />
              </span>
            ) : (
              <TitleInput
                blog={blog}
                setNewData={setNewData}
                close={close}
                titleRef={titleRef}
              />
            )}
            <p className="author"> BY :{blog?.author}</p>
            <p className="description">{blog?.description}</p>
          </div>
        ))}
    </div>
  );
}
