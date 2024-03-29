import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
//import storeRedux from './store/redux/index'
import { BrowserRouter } from "react-router-dom";
import storeReduxToolkit from "./store/redux-toolkit/index";

ReactDOM.render(
  // <Provider store={storeRedux} ><App /></Provider>
  <BrowserRouter>
    <Provider store={storeReduxToolkit}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
