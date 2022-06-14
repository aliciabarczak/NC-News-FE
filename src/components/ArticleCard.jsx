import { Link } from "react-router-dom";
import CommentsCard from "./CommentsCard.jsx"

export default function ArticleCard({article_id, title, author, created_at, comment_count, votes}) {
    return (
        < div className="ArticleCard">
            <section className="cardText">
                <h2>{title}</h2>
                <h3>by {author}</h3>
                <h4>Posted on {created_at.split("T")[0]}</h4>
                <Link to={`/articles/${article_id}`}>View Article</Link>
                <h5>Likes({votes})</h5>
                <h5>Comments({comment_count})</h5>
                <button className="viewAllCommentsBts"><Link className="CommentsButtons" to={`/articles/${article_id}/comments`}>view all</Link></button>
                <button ><Link to={`/articles/${article_id}/comments`}>post</Link></button>
        </section>
        </div>
    )
}