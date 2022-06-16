import './App.css';
import Header from "./components/Header.jsx"
import Nav from "./components/Nav.jsx"
import ListOfArticles from "./components/ListOfArticles.jsx"
import {Routes, Route, useLocation, Link} from "react-router-dom";
import SingleArticle from "./components/SingleArticle.jsx"
import CommentsCard from "./components/CommentsCard.jsx"
import {useState} from "react";
import LogInPage from "./components/LogInPage.jsx"
import { UserContext } from "./components/User.js"


function App() {
  const {search} = useLocation()
  const [user, setUser] = useState([])

  return (
    <div>
    <UserContext.Provider value={{user, setUser}} >
    <div className="App">
      <Header />
      {typeof user === "string" ? <p className="logInText">Logged in as <mark>{user}</mark></p> : <button className="logInBtn"><Link to={"/login"}>Log In</Link></button>}
      <Nav />
      <Routes>
        <Route path="/" element={ <ListOfArticles/>} />
        <Route path="/articles" element={ <ListOfArticles search={search} />} />
        <Route path={`/articles${search}`} element={ <ListOfArticles />} />
        <Route path="/articles/:article_id" element={ <SingleArticle/>} />
        <Route path="/articles/:article_id/comments" element={ <CommentsCard />}/>
        <Route path="/login" element={ <LogInPage />}/> 
      </Routes>
    </div>
    </UserContext.Provider >
    </div>
  )
};

export default App;
