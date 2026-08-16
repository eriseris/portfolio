import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { ContentProvider } from "./content";
import "../styles.css";
import "./pages.css";

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode><ContentProvider><HashRouter><App/></HashRouter></ContentProvider></React.StrictMode>);
