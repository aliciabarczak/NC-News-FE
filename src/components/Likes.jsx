import {patchLikes} from "./../Utils/api.js";
import {useState} from "react";

export default function Likes({article_id, votes}) {
    const [likesChanges, setLikesChanges] = useState(0)
    const handleLike = (event) => {
        patchLikes(article_id, 1).then(() => {
            setLikesChanges((currentLikes) => currentLikes + 1)
            console.log(likesChanges)
            
        }).catch((err) => {
            console.dir(err);
        })
    }

    return (
        <>
    <h5>Likes({votes + likesChanges})</h5>
    <button onClick={handleLike}>Like This Article</button>
    </>
    )
}