import {useState, useEffect} from "react";
import {getArticles} from "./../Utils/api.js"

export default function SortBy({setFetchedArticles}) {
    const [selectedOption, setSelectedOption ] = useState("");
 

    const handleOptions = (event) => {
        setSelectedOption(event.target.value)
    }

    useEffect(() => {
        const path= `?sort_by=${selectedOption}`
        getArticles(path).then(({articles}) => {
            setFetchedArticles(articles);
        })
    }, [selectedOption]);

    return (
    <form className="SortByForm">
    <label className="dropDown"> Sort by:
      <select className="dropDownMenu"
      value={selectedOption}
      onChange={handleOptions}
      >
        <option value="created_at">Date </option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </label>
    <label className="radio">
    <div className="Ascending">
    Ascending
    <input className="radio-btn" type="radio" value="ascending" name="ascending/descending"></input>
    </div>
    <div className="Descending">
    Descending
    <input className="radio-btn" type="radio" value="descending" name="ascending/descending"></input>
    </div>
    </label>
  </form> 
    
)}