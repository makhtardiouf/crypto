
// https://hardhat.org/tutorial/deploying-to-a-live-network.html
// npx hardhat run scripts/deploy.js --network ropsten

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("TokenElh");
    const elhContract = await Token.deploy();

    elhContract.transfer("0x0Bcb51ab3B1FEEdA022293d78e8158387a21d29e", 10);
    console.log("Contract address:", elhContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
