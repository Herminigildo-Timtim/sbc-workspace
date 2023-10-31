import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("F4coyXgjxsQGp9M3ZFR71vV8YadsJaz1oSfp2qRgCkfg")
const decoded = base58.decode('H33xDfLVPZK8VtQnw8odLEvUmKDCsQ7nwbJErP6CaVVyBJ5AnNGzrzea2r3tyAPJYKMkScqZvmgizXbBMkmxWrJ')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();
