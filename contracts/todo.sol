pragma solidity >=0.4.21 <0.6.0;

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
        Message storage message  =  _newmessage;
    }
      function getStore() public view returns (string memory){
        return message;
    }
    function addArray(uint number) public{
        adding = number;
    }
    function toDO() public view returns (uint[] memory){
        myArray.push(adding);
        return myArray;
    }
     
    mapping(uint => Task) tasks;
    
    function getTasks() public view returns (Task[] memory){
        return tasks[0];
    }
    
   
}