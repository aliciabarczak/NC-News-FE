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
    <ul>
        {allComments.map(({comment_id, body}) => {
            return <li key={comment_id}>{body}</li>
        })}
    </ul>
    </>
    )

}