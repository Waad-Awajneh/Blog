import React, { useCallback, useRef, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import "./style.css";

import Blog from "./Blog";
import { Helmet } from "react-helmet";

export default function BlogListNew() {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [refresh, setRefresh] = useState(true);
  const refresh = useRef(true);

  const { data: blogs, loading } = useFetch(
    "http://localhost:8000/Blogs",
    refresh.current
  );

  console.log(refresh.current);
  const update = useCallback(
    () => (refresh.current = !refresh.current),
    [refresh.current]
  );

  if (loading) return <h3 className="loading"> Loading... </h3>;
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Estarta Blog</title>
        <link rel="canonical" href="/" />
      </Helmet>
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
          ?.map((blog) => (
            <Blog blog={blog} refresh={update} key={blog.id} />
          ))}
      </div>
    </>
  );
}
