// SPDX-License-Identifier: GPL-3.0
/*
 * ELH Smart Contract
 * Ref https://hardhat.org/tutorial/writing-and-compiling-contracts.html
*/
pragma solidity >=0.8.9;
//import "hardhat/console.sol";
// Main building block for Smart Contract

contract TokenElh {

    string public name = "Elhadji's Token";
    string public symbol = "ELH";

    uint public totalSupply = 1000;

    // An address type variable is used to store ethereum accounts
    address public owner;

    // Map balances to accounts
    mapping(address => uint) balances;

    /**
     * Contract initialization.
     *
     * The `constructor` is executed only once when the contract is created.
     */
     constructor() {
        // The totalSupply is assigned to transaction sender,
        // which is the account that is deploying the contract
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
        //console.log("Owner address:", owner);
     }

    /**
     * A function to transfer tokens.
     *
     * The `external` modifier makes a function *only* callable from outside
     * the contract.
     */
    function transfer(address to, uint amount) external {
        address from = msg.sender;
        //console.log("\tSending %s \n\tfrom %s \n\tto %s", amount, from, to);

        require(balances[from] >= amount, "Balance is insufficient");

        // Transfer
        balances[from] -= amount;
        balances[to] += amount;
        
        // Could simply use owner.transfer() ?
    }

    /**
     * Read only function to retrieve the token balance of a given account.
     *
     * The `view` modifier indicates that it doesn't modify the contract's
     * state, which allows us to call it without executing a transaction.
     */
    function balanceOf(address account) external view returns (uint) {
        return balances[account];
    }

}