import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard.jsx";
import { getArticles } from "./../Utils/api.js";


export default function ListOfArticles({search}) {
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
    getArticles(search).then(({articles}) => {
        setArticles(articles);
        setIsLoading(false);
    })
}, [search]);

if(isLoading) return <p>...loading</p>
    return (
        <main className="ListOfArticles">
        {articles.map(({article_id, title, author, created_at, comment_count, votes}) => {
            return (
                <ArticleCard
                key = {article_id}
                article_id = {article_id}
                title = {title}
                author = {author}
                created_at = {created_at}
                comment_count = {comment_count}
                votes = {votes} />
            )
        })}
        </main>
    )
}