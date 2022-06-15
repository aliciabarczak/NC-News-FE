import {useState, useEffect} from "react";
import {getArticles} from "./../Utils/api.js"

export default function SortBy({setFetchedArticles}) {
    const [selectedOption, setSelectedOption ] = useState("sort_by=created_at");
    const [radioOption, setRadioOption ] = useState("asc");
 
    useEffect(() => {
    const path = `?sort_by=${selectedOption}` 
    console.log(path);
        getArticles(path).then(({articles}) => {
            setFetchedArticles(articles);
        })
    }, [selectedOption]);

    useEffect(() => {
        const path = `?order=${radioOption}`
        console.log(path);
            getArticles(path).then(({articles}) => {
                setFetchedArticles(articles);
            })
        }, [radioOption]);

    return (
    <form className="SortByForm">
    <label className="dropDown"> Sort by:
      <select className="dropDownMenu"
      value={selectedOption}
      onChange={(event) => {setSelectedOption(event.target.value)}}
      >
        <option value="created_at">Date </option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </label>
    <label className="radio">
    <div className="Ascending">
    Ascending
    <input 
        className="radio-btn" 
        type="radio" 
        value="asc" 
        name="ascending/descending"
        onChange={(event) => {setRadioOption(event.target.value)}}
        ></input>
    </div>
    <div className="Descending">
    Descending
    <input 
    className="radio-btn" 
    type="radio" 
    value="desc" 
    name="ascending/descending"
    onChange={(event) => {setRadioOption(event.target.value)}}></input>
    </div>
    </label>
  </form> 
    
)}