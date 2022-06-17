import {useState, useEffect } from "react";
import {useSearchParams} from "react-router-dom"
import {getArticles} from "./../../Utils/api.js"

export default function SortBy({setFetchedArticles}) {
    const [selectedOption, setSelectedOption ] = useState("created_at");
    const [radioOption, setRadioOption ] = useState("asc");
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");
    
    useEffect(() => {
    const path = `?sort_by=${selectedOption}` 
        getArticles(path).then(({articles}) => {
            setFetchedArticles(articles);
            setIsLoading(false);
        })
    }, [selectedOption]);

    useEffect(() => {
        const path = `?order=${radioOption}`
            getArticles(path).then(({articles}) => {
                setFetchedArticles(articles);
                setIsLoading(false);
            })
        }, [radioOption]);

    if(isLoading) return <p>...loading</p>
    return (
    <form className="SortByForm">
    <label className="dropDown"> Sort by:
      <select className="dropDownMenu"
      value={selectedOption}
      onChange={(event) => {setSelectedOption(event.target.value); setSearchParams({sort_by: `${event.target.value}`})}}
      >
        <option value="created_at">Date </option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </label>
    <label className="radio">
    <div className="Descending">
    Descending
    <input 
    className="radio-btn" 
    type="radio" 
    value="desc" 
    name="ascending/descending"
    onClick={(event) => {setRadioOption(event.target.value); setSearchParams({order: `${event.target.value}`})}}></input>
    </div>
    <div className="Ascending">
    Ascending
    <input 
        className="radio-btn" 
        type="radio" 
        value="asc" 
        name="ascending/descending"
        onClick={(event) => {setRadioOption(event.target.value); setSearchParams({order: `${event.target.value}`})}}
        ></input>
    </div>
    </label>
  </form> 
    
)}
