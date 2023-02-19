import { useNavigate, useParams } from "react-router-dom";

import useFetch from "../../Hooks/useFetch";
import "./style.css";

export default function SingleBlog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:8000/Blogs/${id}`);
  console.log("CJBJBJBBJB");
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:8000/Blogs/${id}`, { method: "DELETE" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
