import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewArticle from "./components/NewArticle/NewArticle";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={NewArticle} />
            <Route path="/articles/:id" component={ArticleDetails} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
