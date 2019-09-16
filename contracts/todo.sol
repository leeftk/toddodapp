pragma solidity >=0.4.21 <0.6.0;

contract Todo{
    uint public taskCount  = 0 ;
    string public test = "test";
   
    struct Task{
        uint id;
        string content;
        bool completed;
    }
    
   mapping(uint => Task) list;

   
   
   function createTask(string memory _content) public {
      //increase task _content
      taskCount++;
      
      //get task from struct and put in in the ta array relative to the task count indexed
      list[taskCount] = Task(taskCount,_content,false);
   }


}
