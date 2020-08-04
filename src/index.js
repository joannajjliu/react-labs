import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import NavBar from "./components/general/NavBar";
import App from "./App";
import MoviesHome from "./components/movies/MoviesHome";
import { Game } from "./components/tictactoe/Game";
import { NoMatch } from "./components/general/NoMatch";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/movies">
        <MoviesHome />
      </Route>
      <Route path="/tictactoe">
        <Game />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
