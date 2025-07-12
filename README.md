## 🎟️ NFT Ticketing DApp

This project is a decentralized application (DApp) that allows users to mint **NFT-based event tickets** on the Ethereum Sepolia testnet. Each ticket is a unique ERC-721 token with metadata and image hosted on IPFS.

## 🚀 Features

- Connect your MetaMask wallet
- Mint a VIP ticket NFT with a single click
- Token metadata hosted on IPFS
- Smart contract deployed on Sepolia testnet
- Built with Next.js, Tailwind CSS, and Ethers.js

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Smart Contract**: Solidity, Hardhat, OpenZeppelin ERC721
- **Blockchain**: Sepolia Testnet
- **Storage**: IPFS via Pinata

## 📦 Smart Contract

```solidity
function mintTokens(address to, string memory tokenURI) external;
```

## Contract Address: 0xf8B036068DF132e26b6f2bba351F5c3bCbCC9f78

## 🧑‍💻 Local Development
1.Clone the repo

```bash
git clone https://github.com/aayushj19/nft-ticket-app.git
cd nft-ticket-app
```


2.Install dependencies

```bash
cd frontend
npm install
```

3.Run the app

```bash
npm run dev
```
4. Live Demo
[https://nft-mining.vercel.app/]

### 🔐 Wallet & Network Requirements
- MetaMask installed
- Switch to Sepolia testnet
- Have test ETH (get from a Sepolia faucet)

### 📄 License
MIT License

 ## Author:- Aayush [www.linkedin.com/in/aayushj19]
