export default function SortBy() {
    return (
    <form >
    <label> Sort by:
      <select>
        <option>Date</option>
        <option>Comment Count</option>
        <option>Votes</option>
      </select>
    </label>
    <label for="ascending">
    Ascending
    <input type="radio" value="ascending" name="ascending"></input>
    Descending
    <input type="radio" value="discending" name="discending"></input>
    </label>
  </form> 
    
)}