import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { allReducers, store } from "./redux/store";
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";

// Create Redux store with state injected by the server
const appStore = createStore(allReducers, window.__PRELOADED_STATE__);

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// ReactDOM.render(
ReactDOM.hydrate(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
