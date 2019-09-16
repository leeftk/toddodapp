import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Web3 from 'web3';
import Todo from "./contracts/Todo.json";
import TruffleContract from "truffle-contract";



const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
web3.eth.getAccounts().then(console.log);

console.log(web3.eth.getAccounts())
console.log(web3.eth.accounts[0])
const TODO_LIST_ADDRESS ="0x168d604DFbd265dAf238bCab578c3eaD6126D0F4"
const Todo_abi_address = [
  {
    "constant": true,
    "inputs": [],
    "name": "taskCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_content",
        "type": "string"
      }
    ],
    "name": "createTask",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

class List extends Component {
  
  componentWillMount() {
    this.loadBlockchainData()
  }
  
  async loadBlockchainData() {
    try{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    //load web3 network ID got connect to right blockchain
    const networkId = await web3.eth.net.getId();
    //put that network ID in networks method
    const deployedNetwork = Todo.networks[networkId];
    //create variable for contract 
    const toDo = new web3.eth.Contract(
      Todo.abi,
     TODO_LIST_ADDRESS
    )
    console.log(toDo)
    

  
    const taskCount = await toDo.methods.taskCount().call()
    console.log(taskCount)
    this.setState({taskCount})

   // toDo.methods.createTask("hey girl hey").send()

    console.log(taskCount)


     // console.log(instance)
     } catch (error) {
        // Catch any errors for any of the above operations.
        // alert(
        //   `Failed to load web3, accounts, or contract. Check console for details.`,
        // );
        console.error(error);
      }
    };
  constructor(props) {
    super(props);
    //Sets initial state for the todo list
          this.state = {
            list: ["puta", "wowo", "i figured out how react works", "nice"],
            task: "",
            account: '',
            taskCount: 0
          };
          this.changeText = this.changeText.bind(this);
          
        }

        
 
        //gets the string from the user input
        changeText(event) {
          this.setState({
            name: event.target.value
          });
        }
        //resets the list back to an empty array
        onClearList = () => {
          this.setState({
            list: []
          });
        };
        //adds task from the value given
        addTask = () => {
          this.setState({
            list: [...this.state.list, this.state.name]
          });
          
        };
        // createTask(task){
        //   this.state.instance.methods.createTask("task").send({ from: this.state.accounts[0] });
        //   this.state.instance.methods.createTask("task").call();
        //   //console.log(receipt)
        // }



    
  
  
  render() {
    return (
      <div className="main">
        <Card className="cards">
          <Card.Body className="cardbodies">
            <h1>Things to do:{this.state.account}</h1>
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
