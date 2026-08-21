import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContentProvider } from "./content";
import "../styles.css";
import "./pages.css";

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode><ContentProvider><BrowserRouter><App/></BrowserRouter></ContentProvider></React.StrictMode>);
