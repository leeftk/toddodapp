pragma solidity ^0.4.24;

contract String{
    uint[] myArray;
    string message;
    uint adding;
    uint[] public taskcount = 0;
       
    struct Task{
        uint taskcount;
        string name;
    }
      function setStore(string _newmessage) public{
        message = _newmessage;
    }
      function getStore() public view returns (string){
        return message;
    }
    function addArray(uint number) public{
        adding = number;
    }
    function toDO() public view returns (uint[]){
        myArray.push(adding);
        return myArray;
    }
     
    mapping(uint => Task) tasks;
    
    function getTasks() public view returns (){
        return tasks[0];
    }
    
   
}