import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "./../Utils/api.js";

export default function Nav() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="Nav">
      <Link className="navLinks" to="/">
        Home
      </Link>
      {topics.map(({ slug }, index) => {
        return (
          <Link className="navLinks" to={`articles?topic=${slug}`} key={index}>
            {slug}
          </Link>
        );
      })}
    </nav>
  );
}
