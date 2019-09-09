import Web3 from "web3";

let web3 = window.web3;
// Is there is an injected web3 instance?
if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  /*
   *  DEV ONLY
   */
  // If no injected web3 instance is detected, fallback to Ganache.
  web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

export default web3;
