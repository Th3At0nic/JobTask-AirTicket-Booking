import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";

function App() {
  return (
    <section>
      <Router>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
