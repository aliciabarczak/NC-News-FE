import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./../Utils/api.js";

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
         <h4>Posted on {singleArticle.created_at}</h4>
         <p>{singleArticle.body}</p>
         <h5>Likes({singleArticle.votes})</h5>
         <h5>Comments({singleArticle.comment_count})</h5>
      </div>
    );
  };