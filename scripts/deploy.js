const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting")  
  const voting = await Voting.deploy()
  console.log("Voting Contract Deployed", await voting.getAddress())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
