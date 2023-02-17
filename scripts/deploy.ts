import { ethers } from "hardhat";

async function main() {
  // const [owner] = await ethers.getSigners();
  // console.log(owner.address);
  
  // GET THE CONTRACT
  const myNft = await ethers.getContractFactory("EvansNFT");

  // DEPLOY THE CONTRACT
  const myNftDeployed = await myNft.deploy();
  await myNftDeployed.deployed()
  console.log(`NFT deployed to address: ${myNftDeployed.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
