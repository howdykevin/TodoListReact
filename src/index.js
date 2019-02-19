import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./components/Form";
import { Container } from "reactstrap";

import "./styles.scss";

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
