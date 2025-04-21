module.exports = {
  compilers: {
    solc: {
      version: "0.8.29", // Must match your pragma
      settings: {
        optimizer: {
          enabled: true, // Optional: Reduces gas costs
          runs: 200,
        },
      },
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, // Default Ganache port
      network_id: "*",
    },
  },
};