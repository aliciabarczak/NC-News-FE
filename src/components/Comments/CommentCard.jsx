import { useContext } from "react"
import { UserContext } from "./../User.js"
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {deleteComment} from "./../../Utils/api.js"

export default function ({allComments}){

const {user} = useContext(UserContext);
const [commentToDelete, setCommentToDelete ] = useState("");
const [deletedCommentMsg, setDeletedCommentMsg ] = useState("")

  useEffect(() => {
    deleteComment(commentToDelete).then((sucessMsg) => {
        setDeletedCommentMsg(sucessMsg)
    }).catch((err) => {
        console.log(err)
    })
}, [commentToDelete])

return (
<ul className="Comments">
    {allComments.map(({comment_id, body, author, votes, created_at}) => {
        return (
        <section className="Comment" key={comment_id}>
        <h4><mark>{author}</mark> wrote:</h4>
        <li className="commentText" key={comment_id}>{body}</li>
        <p className="commentDate">date: {created_at.split("T")[0]}</p>
        <b className="commentVote">votes ({votes})</b>
        <div>
        {author === user
            ? <button className="deleteCommentBtn" onClick={() => {setCommentToDelete(comment_id)}}>delete</button> 
            : (deletedCommentMsg) 
            ? <p className="sDeletedCommentMsg">{deletedCommentMsg}</p> 
            :  null } 
        </div>
        </section>
        )
    })}
</ul>
)}
