import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let containerId = 'anti-spam-challenge';

ReactDOM.render(<App containerId={containerId} />, document.querySelector('#' + containerId));