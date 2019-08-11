import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import web3 from "../web3";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["puta", "wowo", "i figured out how react works", "nice"],
      task: ""
    };
    this.changeText = this.changeText.bind(this);
  }
  
  changeText(event) {
    this.setState({
      name: event.target.value
    });
  }
  onClearList = () => {
    this.setState({
      list: []
    });
  };
  addTask = () => {
    this.setState({
      list: [...this.state.list, this.state.name]
    });
    
  };

  render() {
    return (
      <div className="main">
        <Card className="cards">
          <Card.Body className="cardbodies">
            <h1>Things to do</h1>
            <ol>
              {(this.todos = this.state.list.map(post => <li> {post} </li>))}
            </ol>
            <form>
              <input type="text" id="task" onChange={this.changeText} />
            </form>
          </Card.Body>
        </Card>
        <Button
          className="buttontime"
          variant="primary"
          type="submit"
          onClick={this.addTask}
        >
          {" "}
          Add Task{" "}
        </Button>
        <Button
          className="buttontime"
          variant="primary"
          type="submit"
          onClick={this.onClearList}
        >
          {" "}
          Clear List
        </Button>
      </div>
    );
  }
}

export default List;
