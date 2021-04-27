var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'decade coach book riot wheel latin hawk black legal right list inject';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/9ca7a6f83bc94761b6e320e114008256")
      },
      network_id: 3,
    },
    develop: {
      port: 8545
    }
  }
};
