import { ethers } from "hardhat";


const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/dxcuNPDT6TMppC6G8uYhS_rYo6eCYV04')

const eventSignature = 'ContractDeployed(string,string,string)'

const filter = {

    topics: [
        ethers.utils.id(eventSignature)
    ]
}

console.log('>>', filter);

async function main() {
    provider.on(filter, async (x: any) => {
        console.log(x)
    })
}


main()