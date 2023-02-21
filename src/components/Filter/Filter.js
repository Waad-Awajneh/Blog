import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./style.css";
export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q");
  const src = searchParams.get("src");
  const f = searchParams.get("f");
  const ref = useRef({
    q: searchParams.get("q"),
    src: searchParams.get("src"),
    f: searchParams.get("f"),
  });
  //   useEffect(() => {
  //     setSearchParams("?q=ui.dev&src=typed_query&f=live");
  //   }, []);

  //   useEffect(() => {
  //     if (q) setSearchParams(`q=${q}&src=${src}&f=doljdjoek`);
  //   }, [q]);

  const handelChange = (e) => {
    ref.current = { ...ref.current, [e.target.name]: e.target.value };
    setSearchParams(
      `q=${ref.current.q}&src=${ref.current.src}&f=${ref.current.f}`
    );
  };

  console.log({ q, src, f });
  return (
    <div className="container">
      <form>
        {" "}
        {/* { onSubmit={handelSubmit}} */}
        <select name="q" onChange={handelChange}>
          <option>ggg</option>
          <option>tttt</option>
          <option>oooo</option>
          <option>lllll</option>
        </select>
        <input
          // ref={myRef}
          onChange={handelChange}
          type="text"
          name="src"
          placeholder="title"
        />
        <input
          type="text"
          name="f"
          onChange={handelChange}
          placeholder="author"
        />
      </form>
    </div>
  );
}
