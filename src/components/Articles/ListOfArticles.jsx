import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard.jsx";
import { getArticles } from "./../../Utils/api.js";
import SortBy from "./SortBy.jsx";
import ErrorPage from "../ErrorPage.jsx";

export default function ListOfArticles({ search, user }) {
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [exisitngError, setExisitingError] = useState("");

  useEffect(() => {
    getArticles(search)
      .then(({ articles }) => {
        setFetchedArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setExisitingError(error.response.data);
      });
  }, [search]);

  if (exisitngError) return <ErrorPage error={"404: Not Found"} />;
  if (isLoading) return <p>...loading</p>;
  return (
    <div>
      <SortBy search={search} setFetchedArticles={setFetchedArticles} />
      <main className="ListOfArticles">
        {fetchedArticles.map(
          ({ article_id, title, author, created_at, comment_count, votes }) => {
            return (
              <ArticleCard
                key={article_id}
                article_id={article_id}
                title={title}
                author={author}
                created_at={created_at}
                comment_count={comment_count}
                votes={votes}
              />
            );
          }
        )}
      </main>
    </div>
  );
}
