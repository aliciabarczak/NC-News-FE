import { useState } from "react";
import ArticleCard from "./ArticleCard.jsx"


export default function ListOfArticles() {
const [articles, setArticles] = useState([
    {
        "article_id": 34,
        "title": "The Notorious MSG’s Unlikely Formula For Success",
        "topic": "cooking",
        "author": "grumpy19",
        "created_at": "2020-11-22T11:13:00.000Z",
        "votes": 0,
        "comment_count": "11"
        },
        {
        "article_id": 12,
        "title": "The battle for Node.js security has only begun",
        "topic": "coding",
        "author": "tickle122",
        "created_at": "2020-11-15T13:25:00.000Z",
        "votes": 0,
        "comment_count": "7"
        }
])

    return (
        <>
        {articles.map(({article_id, title, author, created_at, comment_count, votes}) => {
            return (
                <ArticleCard
                key = {article_id}
                title = {title}
                author = {author}
                created_at = {created_at}
                comment_count = {comment_count}
                votes = {votes} />
            )
        })}
        </>
    )
}