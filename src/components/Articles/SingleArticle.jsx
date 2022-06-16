import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "./../../Utils/api.js";
import Likes from "./../Likes.jsx"

export default function SingleArticle() {
let { article_id } = useParams(); 

const [singleArticle, setSingleArticle] = useState({});
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  getArticleById(article_id).then(({article}) => {
        setSingleArticle(article);
        setIsLoading(false);  
    })
}, [article_id]);

if(isLoading) return <p>...loading</p>
    return (
      <div className="SingleArticle">
         <h2> {singleArticle.title}</h2>
         <h3>by {singleArticle.author}</h3>
         <h4>Posted on {singleArticle.created_at.split("T")[0]} at {singleArticle.created_at.split("T")[1].split(".")[0]}</h4>
         <p>{singleArticle.body}</p>
         <Likes article_id={article_id} votes={singleArticle.votes}/>
         <h5>Comments({singleArticle.comment_count})</h5>
         <button className="viewAllCommentsBts"><Link className="CommentsButtons" to={`/articles/${article_id}/comments`}>view all</Link></button>
      </div>
    );
  };