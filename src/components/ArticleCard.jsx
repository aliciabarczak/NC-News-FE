export default function ArticleCard({title, author, created_at, comment_count, votes}) {
    return (
        <>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h4>Posted on {created_at}</h4>
        <h5>Likes({votes})</h5>
        <h5>comments({comment_count})</h5>
        </>
    )
}