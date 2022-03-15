import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./components/Navbar.jsx";
import useFetch from "./hooks/useFetch";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          {/* route */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* route */}
          {/* route */}
          <Route path="/create">
            <Create />
          </Route>
          {/* route */}
          {/* route */}
          <Route exact path="/search">
            <Search />
          </Route>
          {/* route */}
          {/* route */}
          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>
          {/* route */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
