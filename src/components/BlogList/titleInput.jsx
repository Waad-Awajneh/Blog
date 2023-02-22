import React from "react";
import { memo } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
function TitleInput({
  blog,
  setNewData,
  close,

  titleRef,
}) {
  return (
    <span>
      <input
        type={"text"}
        defaultValue={titleRef.current}
        onChange={(e) => {
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
export default memo(TitleInput);
