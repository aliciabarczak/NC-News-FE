import './App.css';
import Header from "./components/Header.jsx"
import Nav from "./components/Nav.jsx"
import ListOfArticles from "./components/ListOfArticles.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ListOfArticles />
    </div>
  );
}

export default App;
