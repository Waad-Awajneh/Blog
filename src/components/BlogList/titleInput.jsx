import React, { useRef } from "react";
import { memo } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
function TitleInput({ title, close, save }) {
  const titleRef = useRef(title);

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
          close();
        }}
        className="check"
      />
      <AiOutlineCheckCircle
        id="close"
        onClick={() => {
          close();
          save(titleRef.current);
        }}
      />
    </span>
  );
}
export default memo(TitleInput);
