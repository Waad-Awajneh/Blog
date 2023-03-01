import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList/BlogList";

import Navbar from "./components/NavBar/Navbar";

const BlogListNew = lazy(() => import("./components/BlogList/BlogListNew"));
const CreateBlog = lazy(() => import("./components/CreateBlog/CreateBlog"));
const SingleBlog = lazy(() => import("./components/SingleBlog/SingleBlog"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));
const Filter = lazy(() => import("./components/Filter_test/Filter"));
function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={"loading ,,,,, "}>
        <Routes>
          {/* <Route path="/" element={<BlogList />} /> */}
          <Route path="/" element={<BlogListNew />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/SingleBlog/:id" element={<SingleBlog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/search" element={<Filter />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
