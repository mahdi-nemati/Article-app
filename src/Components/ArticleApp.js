import { Route, Routes } from "react-router-dom";
import ArticlesList from "../Pages/ArticlesList";
import EditArticle from "../Pages/EditArticle";
import FullArticle from "../Pages/FullArticle";
import NewArticle from "../Pages/NewArticle";

const ArticleApp = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/add-aricle" element={<NewArticle />} />
        <Route path="/article/:id" element={<FullArticle />} />
        <Route path="/article/edit/:id" element={<EditArticle />} />
      </Routes>
    </section>
  );
};

export default ArticleApp;
