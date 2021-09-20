import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import BlogPost from "./BlogPost";
import reportWebVitals from './reportWebVitals';
// import Switcher from "./Switcher.js";
// import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BlogPost />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
