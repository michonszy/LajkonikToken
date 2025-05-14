const hre = require("hardhat");

async function main() {
  const LajkonikToken = await hre.ethers.getContractFactory("LajkonikToken");
  const token = await LajkonikToken.deploy("1000000");
  await token.waitForDeployment();

  console.log(`✅ LajkonikToken deployed to: ${await token.getAddress()}`);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
