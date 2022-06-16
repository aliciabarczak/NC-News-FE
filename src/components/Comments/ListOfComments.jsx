import {useState, useEffect} from "react";
import {getComments, getArticleById} from "./../../Utils/api.js"
import { useParams } from "react-router-dom";
import PostComment from "./../Comments/PostComment.jsx"
import CommentCard from "./CommentCard"

export default function ListOfComments(){
const [allComments, setAllComments] = useState([]);
const [articleTitle, setArticleTitle] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const { article_id } = useParams(); 
const [deletedCommentMsg, setDeletedCommentMsg ] = useState(false);

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
    <PostComment article_id={article_id} setAllComments={setAllComments} deletedCommentMsg={deletedCommentMsg}/>
    <CommentCard allComments={allComments} setAllComments={setAllComments} deletedCommentMsg={deletedCommentMsg} setDeletedCommentMsg={setDeletedCommentMsg} />
    </div>
    )

}