import './App.css';
import Header from "./components/Header.jsx"
import Nav from "./components/Nav.jsx"
import ListOfArticles from "./components/ListOfArticles.jsx"
import {Routes, Route, useLocation} from "react-router-dom";
import SingleArticle from "./components/SingleArticle.jsx"
import CommentsCard from "./components/CommentsCard.jsx"

function App() {
  const {search} = useLocation()

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={ <ListOfArticles/>} />
        <Route path="/articles" element={ <ListOfArticles search={search}/>} />
        <Route path={`/articles${search}`} element={ <ListOfArticles />} />
        <Route path="/articles/:article_id" element={ <SingleArticle/>} />
        <Route path="/articles/:article_id/comments" element={ <CommentsCard />}/>
      </Routes>
    </div>
  )
};

export default App;
