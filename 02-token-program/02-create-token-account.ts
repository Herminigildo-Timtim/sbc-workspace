import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("F4coyXgjxsQGp9M3ZFR71vV8YadsJaz1oSfp2qRgCkfg")
const decoded = base58.decode('H33xDfLVPZK8VtQnw8odLEvUmKDCsQ7nwbJErP6CaVVyBJ5AnNGzrzea2r3tyAPJYKMkScqZvmgizXbBMkmxWrJ')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "JDH8jBEcmX112R2fhnRGcaM4Nq7TnmnkBf8Lgk6kSWw2"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();