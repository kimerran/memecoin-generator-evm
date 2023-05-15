// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MemeCoin is ERC20 {
    event ContractDeployed(string name, string symbol, string id);
    constructor(
        string memory name,
        string memory symbol,
        string memory id,
        uint256 supply,
        address owner
    ) ERC20(name, symbol) {
        _mint(owner, supply);
        emit ContractDeployed(name, symbol, id);
    }
}
