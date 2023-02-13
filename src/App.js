import { useEffect, useState } from "react";
import "./App.css";
import BlogList from "./components/BlogList/BlogList";
import Navbar from "./components/NavBar/Navbar";

function App() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      FetchData();
    }, 2000);
  }, []);

  const FetchData = async () => {
    const res = await fetch("dummyData.json");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
    setLoading(false);
  };
  return (
    <div className="App">
      <Navbar />
      <BlogList loading={loading} blogs={blogs} />
    </div>
  );
}

export default App;
