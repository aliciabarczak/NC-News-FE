import './App.css';
import Header from "./components/Header.jsx"
import Nav from "./components/Nav.jsx"
import ListOfArticles from "./components/ListOfArticles.jsx"
import {Routes, Route, useLocation, Link} from "react-router-dom";
import SingleArticle from "./components/SingleArticle.jsx"
import CommentsCard from "./components/CommentsCard.jsx"
import {useState} from "react";
import LogInPage from "./components/LogInPage.jsx"


function App() {
  const {search} = useLocation()
  const [user, setUser] = useState([])

  return (
    <div className="App">
      <Header />
      {typeof user === "string" ? <p className="logInText">Logged in as <mark>{user}</mark></p> : <button className="logInBtn"><Link to={"/login"}>Log In</Link></button>}
      <Nav />
      <Routes>
        <Route path="/" element={ <ListOfArticles/>} />
        <Route path="/articles" element={ <ListOfArticles search={search} user={user}/>} />
        <Route path={`/articles${search}`} element={ <ListOfArticles />} />
        <Route path="/articles/:article_id" element={ <SingleArticle/>} />
        <Route path="/articles/:article_id/comments" element={ <CommentsCard />}/>
        <Route path="/login" element={ <LogInPage user={user} setUser={setUser} />}/> 
      </Routes>
    </div>
  )
};

export default App;
