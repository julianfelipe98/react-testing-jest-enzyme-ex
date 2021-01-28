import React from "react";
import ReactDOM from "react-dom";
import CounterComponent from "./CounterComponent";
// import FirstComponent from "./FirstComponent";
import './index.css'
const divRoot = document.querySelector("#root");

// ReactDOM.render(<FirstComponent greeting="Julian Castellanos"/>, divRoot);

ReactDOM.render(<CounterComponent value={123}/>, divRoot);
