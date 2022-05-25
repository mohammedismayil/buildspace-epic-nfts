require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
module.exports = {
  solidity: "0.8.1",
  networks: {
    ropsten: {
      // This value will be replaced on runtime
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      // This value will be replaced on runtime
      url: process.env.STAGING_RINKEYBY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "11VFYSRATJHJ6SMNVYG4UU6MFYU8KF95SV",
  },
};
