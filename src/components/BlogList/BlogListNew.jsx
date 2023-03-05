import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import Blog from "./Blog";
import { Helmet } from "react-helmet";
import { getBlogs } from "../../reducers/actions";

export default function BlogListNew() {
  const [searchTerm, setSearchTerm] = useState("");
  const refresh = useRef(true);
  const { blogs, error, loading } = useSelector((state) => state.blogsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch, refresh.current]);

  const update = useCallback(
    () => (refresh.current = !refresh.current),
    [refresh.current]
  );

  const filteredArray = useMemo(
    () =>
      blogs?.filter((blog) =>
        blog.author?.toLowerCase().includes(searchTerm?.toLowerCase())
      ),
    [blogs, searchTerm]
  );

  if (loading) return <h3 className="loading"> Loading... </h3>;
  if (error) return <h3 className="loading"> Error... </h3>;
  return (
    <>
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
        {filteredArray?.map((blog) => (
          <Blog blog={blog} refresh={update} key={blog.id} />
        ))}
      </div>
    </>
  );
}
