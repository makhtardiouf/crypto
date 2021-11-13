var helloTron = artifacts.require("./Hello.sol");

module.exports = function(deployer) {
  deployer.deploy(helloTron);
};
