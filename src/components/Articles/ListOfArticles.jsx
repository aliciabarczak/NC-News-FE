import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard.jsx";
import { getArticles } from "./../../Utils/api.js";
import SortBy from "./SortBy.jsx"


export default function ListOfArticles({search, user}) {
const [fetchedArticles, setFetchedArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    getArticles(search).then(({articles}) => {
        setFetchedArticles(articles);
        setIsLoading(false);
    })
}, [search]);

if(isLoading) return <p>...loading</p>
    return ( 
    <div>
        <SortBy search={search} setFetchedArticles={setFetchedArticles}/>
        <main className="ListOfArticles">
        {fetchedArticles.map(({article_id, title, author, created_at, comment_count, votes}) => {
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
    </div>)
}