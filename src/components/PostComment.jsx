import {useState, useEffect} from "react"
import {postComment} from "./../Utils/api.js"

export default function PostComment({article_id}){
const [body, setBody] = useState("");
const [username, setUsername] = useState("");
const [sucessMessage, setSucessMessage] = useState(false)
const [failMessage, setFailMessage] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, body, username).then(({createdComment}) => {
        setSucessMessage(true)
        setBody("")
        setUsername("")
    }).catch((err) => {
        setSucessMessage(false)
        setFailMessage(true)
        setBody("")
        setUsername("")
    });
}

return (
<div className="postCommentForm">
    <form className="postComment" onSubmit={handleSubmit}>
        <div> {sucessMessage === true
                ? <p className="sPostCommentMsg">Your comment has been posted!</p> 
                : failMessage === true 
                ? <p className="fPostCommentMsg">Invalid username and/or missing comment body</p>
                : null } </div>
        <label><p>Post comment:</p> 
            <input 
                className="postCommentTxtBx" 
                type="text" 
                placeholder="comment..."
                value={body}
                onChange={(event) => {setBody(event.target.value)}}>
            </input>
            <br></br>
            <input 
                className="postCommentUsernameBx" 
                type="text" 
                placeholder="username"
                value={username}
                onChange={(event) => {setUsername(event.target.value)}}>
            </input>
            <button className="submit-btn" type="submit" disabled={sucessMessage === true}>Submit</button>
        </label>
    </form>
    </div>)
}