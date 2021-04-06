import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewArticle from "./components/NewArticle/NewArticle";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <NewArticle />
            </Route>
            <Route path="article/:id">
              <ArticleDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
