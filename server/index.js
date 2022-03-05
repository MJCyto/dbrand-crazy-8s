import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer, { renderToString } from "react-dom/server";
import express from "express";

import App from "../src/components/App";
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";
import { allReducers, store } from "../src/redux/store";

const PORT = 3000;
const app = express();

// app.get("/", (req, res) => {
//   const indexFile = path.resolve("./build/index.html");
//
//   fs.readFile(indexFile, "utf8", (err, data) => {
//     if (err) {
//       console.error("Something went wrong:", err);
//       return res.status(500).send("Oops, better luck next time!");
//     }
//
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
//       )
//     );
//   });
// });

//Serve static files
app.use("/static", express.static("static"));

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  // Create a new Redux store instance
  const appStore = createStore(allReducers);

  // Render the component to a string
  const html = renderToString(
    <Provider store={appStore}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
