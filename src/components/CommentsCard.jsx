import {useState, useEffect} from "react";
import {getComments, getArticleById} from "./../Utils/api.js"
import { useParams } from "react-router-dom";
import PostComment from "./PostComment.jsx"

export default function CommentsCard(){
const [allComments, setAllComments] = useState([]);
const [articleTitle, setArticleTitle] = useState({});
const { article_id } = useParams(); 
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
    getComments(article_id).then(({comments}) => {
        setAllComments(comments)
        setIsLoading(false);  
    })
}, [article_id])

useEffect(() => {
    getArticleById(article_id).then(({article}) => {
        setArticleTitle(article.title); 
      })
  }, [article_id]);

if(isLoading) return <p>...loading</p>
return (
    <div className="CommentCard">
    <h3>All Comments for:</h3>
    <h2 className="CommentsCardHeader">{articleTitle}</h2>
    <PostComment />
    <ul className="Comments">
        {allComments.map(({comment_id, body, author, votes, created_at}) => {
            return (
            <section className="Comment" key={comment_id}>
            <h4><mark>{author}</mark> wrote:</h4>
            <li className="commentText" key={comment_id}>{body}</li>
            <p className="commentDate">date: {created_at.split("T")[0]}</p>
            <b className="commentVote">votes ({votes})</b>
            </section>
            )
        })}
    </ul>
    </div>
    )

}