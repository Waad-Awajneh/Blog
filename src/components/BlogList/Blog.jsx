import React, { memo, useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import TitleInput from "./titleInput";

function Blog({ blog, refresh }) {
  // console.log(`blog rerendered${blog.id}`);

  const [dataToEdit, setDataToEdit] = useState(false);
  const [newData, setNewData] = useState(blog);

  useEffect(() => {
    if (newData) handelSubmit();
  }, [newData]);

  const handelSubmit = async () => {
    try {
      await fetch(`http://localhost:8000/Blogs/${newData?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const close = () => setDataToEdit(false);

  const save = (CurrentTitle) =>
    setNewData((prev) => ({ ...prev, title: CurrentTitle }));

  return (
    <div key={blog?.id} className="blogItem">
      {dataToEdit ? (
        <TitleInput title={newData?.title} close={close} save={save} />
      ) : (
        <span className="title">
          <Link to={`/SingleBlog/${blog?.id}`}>
            <h3>{newData?.title}</h3>
          </Link>
          <AiFillEdit
            onClick={() => {
              setDataToEdit(true);
            }}
          />
        </span>
      )}
      <p className="author"> BY :{blog?.author}</p>
      <p className="description">{blog?.description}</p>
    </div>
  );
}
export default memo(Blog);
