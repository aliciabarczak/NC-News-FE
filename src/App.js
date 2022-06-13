import './App.css';
import Header from "./components/Header.jsx"
import Nav from "./components/Nav.jsx"
import ListOfArticles from "./components/ListOfArticles.jsx"
import {Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={ <ListOfArticles/>} />
      </Routes>
    </div>
  )
};

export default App;
