import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../Providers/SignupProvider";
const ArticlesList = () => {
  const signup = useSignup();
  const navigate = useNavigate();
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
    if (!signup) navigate("/signup");
    axios.delete(`http://localhost:3001/Articles/${id}`);
  };
  return (
    <section
      class="mt-24 md:mt-28 lg:mt-36 flex flex-col justify-center items-center
     text-base sm:text-lg md:text-xl lg:text-2xl
     pl-3 pr-3 w-full
     "
    >
      <div class="md:mb-4 w-full flex sm:w-10/12 md:w-9/12 items-center justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl">
        <p>Articles !</p>
        <Link
          to="/add-aricle"
          class="text-sky-600 bg-slate-200 border border-sky-600 pl-2 pr-2 rounded-md"
        >
          Add New Article
        </Link>
      </div>
      <div class="flex justify-center flex-col mt-5 w-full sm:w-10/12 md:w-9/12">
        {articles ? (
          articles.map((article) => (
            <div key={article.id} class="flex justify-between w-full bg-sky-200 p-2 rounded-md mb-3">
              <Link to={`/article/${article.id}`} class="w-3/6">
                <ul class="flex justify-between w-full">
                  <li>{article.title}</li>
                  <li>{article.author}</li>
                </ul>
              </Link>
              <div class="w-2/6 flex justify-between">
                <button onClick={() => deleteHandler(article.id)} 
                class="outline-none border rounded-md border-black pl-1 pr-1"
                >
                  Delete
                </button>
                <Link
                class="outline-none border rounded-md border-sky-600 bg-sky-400 text-white pl-1 pr-1" 
                to={`/article/edit/${article.id}`}>Edit</Link>
              </div>
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
