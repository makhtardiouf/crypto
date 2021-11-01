/**
 * @type import('hardhat/config').HardhatUserConfig
 * For deployment to Ropsten testnet
 */

require("@nomiclabs/hardhat-waffle");

// https://dashboard.alchemyapi.io/apps/6lxqifukq0fm4krg
const ALCHEMY_API_KEY = "bgXAnmgC0swDPXFODOD-KU6yycG_s9TM";
const ROPSTEN_PRIVATE_KEY = "b3174bef28e74922f80f5a5536f76d0ed3aca2171ddda80b9a942d3d15fb9530";

module.exports = {
  solidity: "0.8.8",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/bgXAnmgC0swDPXFODOD-KU6yycG_s9TM`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
