import { useContext } from "react"
import { UserContext } from "./../User.js"
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {deleteComment} from "./../../Utils/api.js"

export default function ({allComments, setAllComments}){
const {user} = useContext(UserContext);
const [commentToDelete, setCommentToDelete ] = useState("");
const [deletedCommentMsg, setDeletedCommentMsg ] = useState(false);
const [exisitngComments, setExisitngComments] = useState([]);


useEffect(() => {
    deleteComment(commentToDelete).then(() => {
        setDeletedCommentMsg(true)
        setAllComments((currentComments) => {
            const copyCurrentComments = currentComments;
            currentComments.map((comment, index) => {
                if (commentToDelete === comment.comment_id) {
                    copyCurrentComments.splice(index, 1)
                    setAllComments([...copyCurrentComments])
                }
            })
        })
    })
    }, [commentToDelete])

return (
<>
{(deletedCommentMsg)
    ? <p className="sPostCommentMsg">Your comment has been deleted!</p> 
    : null}
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
            :  null } 
        </div>
        </section>
        )
    })}
</ul>
</>
)}
