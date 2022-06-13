import {Link} from "react-router-dom";
import {useState} from "react";

export default function Nav() {

    const [topics, setTopics] = useState([
        {
        "slug": "coding",
        "description": "Code is love, code is life"
        },
        {
        "slug": "football",
        "description": "FOOTIE!"
        }
    ])

    return (
        <nav className="Nav">
            <Link to="/">Home</Link>
            {topics.map(({slug}) => {
                return (
                    <Link to="/">{slug}</Link>
                )
            })
        }

        </nav>
    )
}