import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter
} from "reactstrap";

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>
              <h1>Hello</h1>
            </CardTitle>
            <CardSubtitle>
              <h6>Description:</h6>
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            {/*input checkbox here */}
            <p>Done:</p>
            <Button color="danger">
              <i class="fas fa-trash-alt" />
            </Button>
          </CardBody>
          <CardFooter className="text-muted">Created at: 1/2/2019</CardFooter>
        </Card>
      </div>
    );
  }
}

export default Todos;
