import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import TodoList from "./CardList";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      date: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.title);
    console.log(this.state.desc);
    console.log(this.state.date);
    let itemsCopy = this.state.items.slice();
    itemsCopy.push({
      header: this.state.title,
      bodyText: this.state.desc,
      createdate: this.state.date
    });

    //resetting form and populating the cardList section
    this.setState(
      {
        items: itemsCopy,
        title: "",
        desc: "",
        date: ""
      },
      () => console.log(this.state.items)
    );
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState(
      {
        [name]: e.target.value
      },
      // debugging purposes
      () => console.log(this.state.date)
    );
  }

  removeItem(index) {
    let itemsCopy = this.state.items.slice();
    itemsCopy.splice(index, 1);

    this.setState({
      items: itemsCopy
    });
  }

  render() {
    return (
      <div>
        <Form className="shadow px-3 pt-3 pb-3" onSubmit={this.handleSubmit}>
          <h1 className="text-center">TODO LIST</h1>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Text Area</Label>
            <Input
              type="textarea"
              name="desc"
              id="description"
              placeholder="Write some desc"
              value={this.state.desc}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="creationDate">Creation Date:</Label>
            <Input
              type="date"
              name="date"
              id="creationDate"
              placeholder="date placeholder"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="primary">
            <i class="fas fa-plus-circle" /> Add
          </Button>
        </Form>
        <br />
        <TodoList todolist={this.state.items} remove={this.removeItem} />
      </div>
    );
  }
}

export default ToDoForm;
