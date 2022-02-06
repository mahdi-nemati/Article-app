import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { http } from "../Services/HttpService";
const FullArticle = () => {
  const [article, setArticle] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await http.get(
          `/Articles/${id}`
        );
        setArticle([data]);
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <section class="mt-20 md:mt-28 lg:mt-32 flex justify-center text-base sm:text-lg md:text-xl lg:text-2xl">
      <div>
        {article ? (
          article.map((a) => (
            <ul key={a.id} class="bg-sky-200 p-3 sm:p-4 md:p-5 lg:p-6 lg:rounded-md rounded-sm flex flex-col justify-center items-center">
              <p>Title : </p>
              <li class="font-bold">{a.title}</li>
              <p>Author :</p>
              <li class="font-bold">{a.author}</li>
              <p>Content :</p>
              <li class="font-bold">{a.body}</li>
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
