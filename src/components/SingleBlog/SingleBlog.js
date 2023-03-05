import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlog, getSingleBlog } from "../../reducers/actions";
import "./style.css";
import * as CONSTANTS from "../../reducers/constant";

export default function SingleBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    singleBlog: blog,
    error,
    loading,
  } = useSelector((state) => state.blogsReducer);

  useEffect(() => {
    dispatch(getSingleBlog(id));
    return () => {
      dispatch({ type: CONSTANTS.CLEAN });
    };
  }, [dispatch]);

  const handleDelete = async () => {
    dispatch(deleteBlog(id));
    navigate("/");
  };

  if (loading) return <h3 className="loading"> Loading... </h3>;
  if (error) return <div className="error">Error...</div>;
  return (
    <div className="blogItem">
      <h3>{blog?.title}</h3>
      <p className="author"> BY :{blog?.author}</p>
      <p className="description">{blog?.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
