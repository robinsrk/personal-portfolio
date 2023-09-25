import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cursor
      isGelly={true}
      gellyAnimationAmount={100}
      gellyAnimationDuration={1}
      cursorSize={20}
      cursorInnerColor="black"
      cursorBackgrounColor="white"
    />
    <div data-cursor-color="white">
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
