import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const appRoot = document.querySelector(".app");
if (appRoot) {
    const reactRoot = ReactDOM.createRoot(appRoot);
    reactRoot.render(<App />);
}
