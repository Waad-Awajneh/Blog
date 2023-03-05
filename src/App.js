import "./App.css";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import store from "./store/store";

const BlogListNew = lazy(() => import("./components/BlogList/BlogListNew"));
const CreateBlog = lazy(() => import("./components/CreateBlog/CreateBlog"));
const SingleBlog = lazy(() => import("./components/SingleBlog/SingleBlog"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Suspense fallback={"loading .... "}>
          <Routes>
            <Route path="/" element={<BlogListNew />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/SingleBlog/:id" element={<SingleBlog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
