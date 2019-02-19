import React from "react";
import ReactDOM from "react-dom";
import Todos from "./components/Card";

import "./styles.css";

function App() {
  return <Todos />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
