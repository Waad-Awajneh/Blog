import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
export default function TitleInput({
  blog,
  setNewData,
  close,
  // setTitle,
  // title,
  titleRef,
}) {
  return (
    <span>
      <input
        type={"text"}
        defaultValue={titleRef.current}
        onChange={(e) => {
          // setTitle(e.target.value);
          titleRef.current = e.target.value;
        }}
      />
      <AiOutlineCloseCircle
        onClick={() => {
          close(blog?.id);
        }}
        className="check"
      />
      <AiOutlineCheckCircle
        id="close"
        onClick={() => {
          setNewData({ ...blog, title: titleRef.current });
          close(blog?.id);
        }}
      />
    </span>
  );
}
