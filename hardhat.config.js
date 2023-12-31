require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
        url: "https://eth-goerli.g.alchemy.com/v2/moPSFn9gZemW8sZq-X8lOWkqTqmyTxAb",
        accounts: ["3cd8fbb84d3646cac54e78052941d70227ba0ef22766d525932099b85969be22"]
      }
  }
};
