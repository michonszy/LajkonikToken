const hre = require("hardhat");

async function main() {
  const [sender] = await hre.ethers.getSigners();
  const receiverAddress = "0xf6DA7Cc5620A74266fc72A872D3b0C8AA762265f"; // to jest portfel Krzyska

  const token = await hre.ethers.getContractAt(
    "LajkonikToken",
    "0x06238a47B790c246f8Fd917261ff96fabeEB61bD"
  );

  const tx = await token.transfer(receiverAddress, hre.ethers.parseUnits("100", 18));
  await tx.wait();

  console.log(`✅ Transferred 100 LJK to ${receiverAddress}`);
}

main().catch(console.error);
