import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config";
import TodoList from "./TodoList";
import Navbar from "./nav";
//import ButtonPlus from './button'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    console.log("Address:", this.state.account);
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
    this.setState({ todoList });
    console.log("taskcount:", this.state.taskCount);
    console.log("Tasks:", this.state.tasks);
    const taskCount = await todoList.methods.taskCount().call();
    this.setState({ taskCount });
    for (var i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call();
      this.setState({
        tasks: [...this.state.tasks, task]
      });
    }
    this.setState({ loading: false });
  }
  createTask(content) {
    this.setState({ loading: true });
    this.state.todoList.methods
      .createTask(content)
      .send({ from: this.state.account, gas: "2000000" })
      .once("receipt", receipt => {
        this.setState({ loading: false });
      });
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      taskCount: 0,
      tasks: []
      //loading: true
    };
    this.createTask = this.createTask.bind(this);
  }

  render() {
    return (
      <div className="main">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <main
              role="main"
              className="col-lg-12 d-flex justify-content-center"
            >
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <TodoList
                  tasks={this.state.tasks}
                  createTask={this.createTask}
                />
              )}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
