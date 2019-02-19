import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter,
  CustomInput
} from "reactstrap";
import PropTypes from "prop-types";

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mb-2">
        <Card>
          <CardBody>
            <CardTitle>
              <h1>{this.props.header}</h1>
            </CardTitle>
            <CardSubtitle>
              <h3>Description:</h3>
            </CardSubtitle>
            <CardText>
              <h5>{this.props.bodyText}</h5>
            </CardText>
            {/*input checkbox here */}
            <div>
              <CustomInput
                type="switch"
                id={this.props.header}
                name={this.props.header}
                label="Have you finished the task?"
              />
            </div>
            <br />
            <Button color="danger" onClick={this.props.delete}>
              <i class="fas fa-trash-alt" />
            </Button>
          </CardBody>
          <CardFooter className="text-muted">
            Created at: {this.props.createdate}
          </CardFooter>
        </Card>
      </div>
    );
  }
}

Todos.PropTypes = {
  header: PropTypes.string,
  bodyText: PropTypes.string,
  createdate: PropTypes.string,
  delete: PropTypes.func,
  key: PropTypes.number
};

export default Todos;
