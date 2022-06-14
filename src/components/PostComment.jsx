export default function PostComment(){
return (<>
    <form className="postComment" action="">
        <label><p>Post comment:</p> 
            <input className="postCommentTxtBx" type="text" placeholder="comment..."></input>
            <br></br>
            <input className="postCommentUsernameBx" type="text" placeholder="username"></input>
        </label>
            <br></br>
        <button className="submit-btn" type="submit"> Submit</button>
    </form>
    </>)
}