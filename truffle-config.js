module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // match any network id
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
