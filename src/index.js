import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // This should render <Body />
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"; //  Make sure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
