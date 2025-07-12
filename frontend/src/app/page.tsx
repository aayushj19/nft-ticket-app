'use client';

import { useState } from 'react';
import { ethers, BrowserProvider } from 'ethers';

const contractAddress = '0xf8B036068DF132e26b6f2bba351F5c3bCbCC9f78'; // Deployed contract on Sepolia
const tokenURI = 'ipfs://bafkreignlbdjw4ysawvjqskr7v3qbre6nw6crafc6f4yuf7zvsxm5doyqq'; // Metadata CID

const abi = [
  "function mintTokens(address to, string memory tokenURI) external"
];

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [status, setStatus] = useState('');

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
        setStatus("✅ Wallet Connected");
      } catch (err) {
        console.error(err);
        setStatus("❌ Wallet connection failed.");
      }
    } else {
      alert("🦊 MetaMask is not installed. Please install it to use this DApp.");
    }
  };

  const mintNFT = async () => {
    if (
      typeof window === 'undefined' ||
      !window.ethereum ||
      !ethers.isAddress(walletAddress)
    ) {
      alert("Wallet not connected or address invalid.");
      return;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      setStatus("⏳ Minting...");
      const tx = await contract.mintTokens(walletAddress, tokenURI);
      await tx.wait();

      setStatus("✅ NFT Ticket Minted! Check your wallet.");
    } catch (err) {
      console.error(err);
      setStatus("❌ Minting failed.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold text-center">🎟️ NFT Ticketing DApp</h1>

      <button
        onClick={connectWallet}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
      >
        {walletAddress
          ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
          : 'Connect Wallet'}
      </button>

      <button
        onClick={mintNFT}
        className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white"
      >
        Mint NFT Ticket
      </button>

      {status && <p className="text-lg text-center">{status}</p>}
    </main>
  );
}
