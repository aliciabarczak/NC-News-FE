export default function ArticleCard({title, author, created_at, comment_count, votes}) {
    return (
        < div className="ArticleCard">
            <section className="cardText">
                <h2>{title}</h2>
                <h3>by {author}</h3>
                <h4>Posted on {created_at.split("T")[0]}</h4>
                <h5>Likes({votes})</h5>
                <h5>Comments({comment_count})</h5>
        </section>
        </div>
    )
}