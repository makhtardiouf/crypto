const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {
    mainnet: {
      // Don't put your private key here:
      privateKey: process.env.PRIVATE_KEY_MAINNET,
      /*
        Create a .env file (it must be gitignored) containing something like

          export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

        Then, run the migration with:

          source .env && tronbox migrate --network mainnet
          source .env && tronbox migrate --network shasta
          
        */
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: "38bd85cfe293f074602abc264045215a7c19afbd6fe81b3c70269b3bd1ce8750",
      userFeePercentage: 50,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey: process.env.PRIVATE_KEY_NILE,
      userFeePercentage: 100,
      feeLimit: 1000 * 1e6,
      fullHost: 'https://api.nileex.io',
      network_id: '3'
    },
    development: {
      // For trontools/quickstart docker image
      privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0',
      userFeePercentage: 0,
      feeLimit: 1000 * 1e6,
      fullHost: 'http://127.0.0.1:9090', //+ port,
      network_id: '9'
    },
    compilers: {
      solc: {
        version: '0.8.6'
      }
    }
  },
  // solc compiler optimize
  solc: {
  //   optimizer: {
  //     enabled: true,
  //     runs: 200
  //   },
  //   evmVersion: 'istanbul'
  }
}
