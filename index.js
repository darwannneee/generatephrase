import { ethers } from "ethers";

function getPhrase() {
    const generateRandom = ethers.Wallet.createRandom()

    const address = generateRandom.address
    const phrase = generateRandom.mnemonic.phrase
    const privateKey = generateRandom.privateKey;
    
    let log = `address = ${address} \n`
    log += `phrase = ${phrase} \n`
    log += `private key = ${privateKey}`
    
    return log;
}

console.log(getPhrase())
export default getPhrase;