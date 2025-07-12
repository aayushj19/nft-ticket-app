// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TicketNFT is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;
    uint256 public maxTickets;

    constructor(uint256 _maxTickets) ERC721("EventTicket", "ETK") {
        maxTickets = _maxTickets;
    }

    function mintTokens(address to,string memory tokenURI) external onlyOwner{
        require(nextTokenId<maxTickets,"All tickets sold");
        uint256 tokenId = nextTokenId;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        nextTokenId++;
    }
}
