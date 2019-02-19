import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      date: ""
    };
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <Form className="shadow px-3 pt-3 pb-3">
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
    );
  }
}

export default ToDoForm;
