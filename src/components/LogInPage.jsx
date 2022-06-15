import {getUsers} from "./../Utils/api.js";
import {useState, useEffect} from "react";

export default function({user, setUser}) {

    const [checkUsername, setCheckUsername] = useState([])
    const [sucessMessage, setSucessMessage] = useState(false)
    const [failMessage, setFailMessage] = useState(false)
    const [allUsernames, setAllUsernames] = useState([])
    const [fetchUsers, setFetchUsers] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setFetchUsers(true)
       if (allUsernames.map(({username}) => username).includes(checkUsername)) {
            setUser(checkUsername)
            setSucessMessage(true)
            setCheckUsername("")
    } else {
        setSucessMessage(false)
        setFailMessage(true)
        setCheckUsername("")
        }
    }
    
    useEffect(() => {
        getUsers().then(({usernames}) => {
            setAllUsernames(usernames)
        })
    }, [fetchUsers])

    return <form onSubmit={handleSubmit}>
        <div> {sucessMessage === true
                ? <p className="sPostCommentMsg">Logged in as {user}!</p> 
                : failMessage === true 
                ? <p className="fPostCommentMsg">Invalid Username</p>
                : null } </div>
        <p>Enter your username:</p>
        <label> 
        <input 
        type="text" 
        placeholder="username"
        value={checkUsername}
        onChange={(event) => {setCheckUsername(event.target.value)}}></input>
        <button className="submit-btn" type="submit">Submit</button>
        </label>
    </form>
}