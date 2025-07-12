const hre = require("hardhat");

async function main() {
  const maxTickets = 100;

  const TicketNFT = await hre.ethers.getContractFactory("TicketNFT");
  const ticketNFT = await TicketNFT.deploy(maxTickets);
  await ticketNFT.waitForDeployment(); // ✅ For Hardhat >= 2.22.0

  const address = await ticketNFT.getAddress(); // ✅ Use getAddress() instead of .address

  console.log("✅ TicketNFT deployed to:", address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
