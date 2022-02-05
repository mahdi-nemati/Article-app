import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const FullArticle = () => {
  const [article, setArticle] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/Articles/${id}`
        );
        setArticle([data]);
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <section>
      <div>
        {article ? (
          article.map((a) => (
            <ul key={a.id}>
              <li>{a.title}</li>
              <li>{a.author}</li>
              <li>{a.body}</li>
            </ul>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default FullArticle;
