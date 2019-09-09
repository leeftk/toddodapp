pragma solidity >=0.4.21 <0.6.0;

contract Todo{
    uint taskcount  = 0;
   
    struct Task{
        uint taskcount;
        string content;
        bool completed;
    }
    
   mapping(uint => Task) list;
   
   function createTask(string memory _content) public {
      //increase task _content
      taskcount++;
      
      
      
      //get task from struct and put in in the taks array relative to the task count indexed
      list[taskcount] = Task(taskcount,_content,false);
   }

}
