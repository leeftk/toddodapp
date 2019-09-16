var todo = artifacts.require("todo");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(todo);
};