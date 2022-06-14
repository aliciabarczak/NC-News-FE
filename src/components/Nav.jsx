import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { getTopics } from "./../Utils/api.js"

export default function Nav() {
const [topics, setTopics] = useState([])
    useEffect(() => {
        getTopics().then(({topics}) => {
            setTopics(topics)
        })
    }, [])

    return (
        <nav className="Nav">
            <Link to="/">Home</Link>
            {topics.map(({slug}, index) => {
                return (
                    <Link to={`articles?topic=${slug}`} key={index}>{slug}</Link>
                )
            })
        }
        </nav>
    )
}