require('dotenv').config()
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  },
  networks: {
    mumbai: {
      accounts: {mnemonic: process.env.MNEMONIC || ''},
      url: process.env.JSON_RPC_URL
    },
  }
};

export default config;
