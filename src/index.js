import React from "react";
import ReactDOM from "react-dom";
import Todos from "./components/Card";
import TodoForm from "./components/Form";
import { Container } from "reactstrap";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Container className="App">
        <TodoForm />
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
