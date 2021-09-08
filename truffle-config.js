var HDWalletProvider = require("truffle-hdwallet-provider");
  const MNEMONIC = 'YOUR WALLET KEY';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/e1c1766ff1094be687df3b73baefaf27")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }

  },
  // Configure your compilers
  compilers: {
    solc: {
     version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
     solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
    }
  },
};
