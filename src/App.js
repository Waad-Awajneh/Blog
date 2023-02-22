import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList/BlogList";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import Filter from "./components/Filter_test/Filter";
import Navbar from "./components/NavBar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import SingleBlog from "./components/SingleBlog/SingleBlog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/SingleBlog/:id" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/search" element={<Filter />} />
      </Routes>
    </div>
  );
}

export default App;
