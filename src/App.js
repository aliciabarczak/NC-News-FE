import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import ListOfArticles from "./components/Articles/ListOfArticles.jsx";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import SingleArticle from "./components//Articles/SingleArticle.jsx";
import ListOfComments from "./components/Comments/ListOfComments.jsx";
import { useState } from "react";
import LogInPage from "./components/LogInPage.jsx";
import { UserContext } from "./components/User.js";
import ErrorPage from "./components/ErrorPage";

function App() {
  const { search } = useLocation();
  const [user, setUser] = useState([]);
  console.log(search);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          {typeof user === "string" ? (
            <p className="logInText">
              Logged in as: <mark>{user}</mark>
            </p>
          ) : (
            <div className="logInText">
              <Link to={"/login"}>Log in</Link>
            </div>
          )}
          <Header />
          <Nav />
          <Routes>
            <Route path="/login" element={<LogInPage />} />
            <Route path="/" element={<ListOfArticles />} />
            <Route
              path="/articles"
              element={<ListOfArticles search={search} />}
            />
            <Route path={`/articles${search}`} element={<ListOfArticles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route
              path="/articles/:article_id/comments"
              element={<ListOfComments />}
            />
            <Route path="*" element={<ErrorPage error={"404: Not Found"} />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
