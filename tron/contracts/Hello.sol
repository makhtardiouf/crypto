// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract Hello {
    string message;

    // Change the value of variable message
    function postMessage(string memory value) public returns (string memory) {
        message = value;
        return message;
    }
    
    // Fetch message
    function getMessage() public view returns (string memory){
        return message;
    }
}
