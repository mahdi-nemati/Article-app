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
  }, [articles]);
  // to show Error
  if (err) return <div>{err}</div>;
  // deleting selected article from DB
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3001/Articles/${id}`);
  };
  return (
    <section>
      <Link to="/add-aricle">Add new article</Link>
      <div>
        {articles ? (
          articles.map((article) => (
            <div key={article.id}>
              <Link to={`/article/${article.id}`}>
                <ul>
                  <li>{article.title}</li>
                  <li>{article.author}</li>
                </ul>
              </Link>
              <button onClick={() => deleteHandler(article.id)}>Delete</button>
              <Link to={`/article/edit/${article.id}`}>Edit</Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ArticlesList;
