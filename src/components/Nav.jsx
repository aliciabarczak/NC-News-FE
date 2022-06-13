import {Link} from "react-router-dom";
export default function Nav() {
    return (
        <nav className="Nav">
            <Link to="/">Home</Link>
            <p>Topic 1</p>
            <p>Topic 2</p>
            <p>Topic 3</p>
        </nav>
    )
}