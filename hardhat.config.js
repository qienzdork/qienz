require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');

const { NEXT_PUBLIC_BASE_RPC, DEPLOYER_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.19",
  networks: {
    baseseplia: {
      url: NEXT_PUBLIC_BASE_RPC || "https://sepolia.base.org",
      chainId: 84532,
      accounts: DEPLOYER_PRIVATE_KEY ? [DEPLOYER_PRIVATE_KEY] : [],
    },
  },
};
