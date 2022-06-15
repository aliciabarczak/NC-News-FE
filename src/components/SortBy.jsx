export default function SortBy() {
    return (
    <form className="SortByForm">
    <label className="dropDown"> Sort by:
      <select className="dropDownMenu">
        <option>Date</option>
        <option>Comment Count</option>
        <option>Votes</option>
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