import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Player from "./components/Player";
import Collection from "./components/Collection";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/player">
          <Player />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
