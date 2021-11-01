/*
 * Workaround of nodejs 17 bug
 * export NODE_OPTIONS=--openssl-legacy-provider
 * npx hardhat test
 * 
 * Signer in ethers.js is an object that represents an Ethereum account
*/
const { ethers } = require("hardhat");  // By default available in the global scope
const { expect } = require("chai");


describe("ELH Token contract", function () {
    let tok;
    let elhContract;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    // Run before each test, re-deploying the contract every time.
    this.beforeEach(async function() {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        tok = await ethers.getContractFactory("TokenElh");
        elhContract = await tok.deploy();
    });

    // Nested subsections 
    describe("Deployment", function () {
        console.log("Contract address %", elhContract.address);
        
        it("Set the right owner", async function(){
            expect(await elhContract.owner()).to.equal(owner.address);
        });

        it("Assign the total supply of tokens to the owner", async function () {

            const ownerBalance = await elhContract.balanceOf(owner.address);
            console.log(`\tBalance of ${owner.address} ${ownerBalance} ELH`)

            expect(await elhContract.totalSupply()).to.equal(ownerBalance);
        });
    });

    // Transfer from a different source Acc, using connect()

    describe("Transactions", function () {
        it("Transfer tokens between accounts", async function () {
            
            let amount = 10;
            // Transfer 50 tokens from owner to addr1
            await elhContract.transfer(addr1.address, amount);
            let bal = await elhContract.balanceOf(addr1.address);
            expect(bal).to.equal(amount);
            console.log("\nBalance", bal.toString(), elhContract.symbol);

            // Transfer 50 tokens from addr1 to addr2
            await elhContract.connect(addr1).transfer(addr2.address, amount);
            expect(await elhContract.balanceOf(addr2.address)).to.equal(amount);
        });
    });

});
