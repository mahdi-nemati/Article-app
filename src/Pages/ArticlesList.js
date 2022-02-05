import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);
  // get data from DB when component did mount
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/Articles");
        setArticles(data);
      } catch (error) {
        setErr("somthing went wrong");
      }
    };
    getData();
  }, []);
  // to show Error
  if (err) return <div>{err}</div>;
  return (
    <section>
      <Link to="/add-aricle">Add new article</Link>
      <div>
        {articles ? (
          articles.map((article) => (
            <ul key={article.id}>
              <li>{article.title}</li>
              <li>{article.author}</li>
              <li>{article.body}</li>
            </ul>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ArticlesList;
