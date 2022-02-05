import { Route, Routes } from "react-router-dom";
import ArticlesList from "../Pages/ArticlesList";
import NewArticle from "../Pages/NewArticle";

const ArticleApp = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/add-aricle" element={<NewArticle />} />
      </Routes>
    </section>
  );
};

export default ArticleApp;
