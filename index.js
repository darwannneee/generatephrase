import { ethers } from "ethers";
import { generateWallet, restoreWallet } from "@sei-js/core";

function generateEVM() {
    const generateRandom = ethers.Wallet.createRandom()

    const address = generateRandom.address
    const phrase = generateRandom.mnemonic.phrase
    const privateKey = generateRandom.privateKey;
    
    let log = `address = ${address} \n`
    log += `phrase = ${phrase} \n`
    log += `private key = ${privateKey}`
    
    return log;
}

async function generateSEI() {
    // 12 word mnemonic by default
    const generatedWallet = await generateWallet();

    let log = `phrase : ${generatedWallet.mnemonic}`
    return log;
}

export {generateEVM, generateSEI}