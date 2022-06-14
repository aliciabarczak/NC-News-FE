import {useState, useEffect} from "react";
import {getComments} from "./../Utils/api.js"
import { useParams } from "react-router-dom";

export default function CommentsCard(){
const [allComments, setAllComments] = useState([]);
const { article_id } = useParams(); 


useEffect(() => {
    getComments(article_id).then(({comments}) => {
        setAllComments(comments)
    })
}, [article_id])

return (
    <>
    <ul className="Comments">
        {allComments.map(({comment_id, body, author, votes, created_at}) => {
            return (
            <section className="Comment">
            <h4><mark>{author}</mark> wrote:</h4>
            <li className="commentText" key={comment_id}>{body}</li>
            <p className="commentDate">date: {created_at.split("T")[0]}</p>
            <b className="commentVote">votes ({votes})</b>
            </section>
            )
        })}
    </ul>
    </>
    )

}