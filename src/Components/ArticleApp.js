import { Route, Routes } from "react-router-dom";
import ArticlesList from "../Pages/ArticlesList";

const ArticleApp = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<ArticlesList/>} />
      </Routes>
    </section>
  );
};

export default ArticleApp;
