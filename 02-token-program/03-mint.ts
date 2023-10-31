import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('H33xDfLVPZK8VtQnw8odLEvUmKDCsQ7nwbJErP6CaVVyBJ5AnNGzrzea2r3tyAPJYKMkScqZvmgizXbBMkmxWrJ');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('JDH8jBEcmX112R2fhnRGcaM4Nq7TnmnkBf8Lgk6kSWw2'), //mint //01-create-token-mint
        new Web3.PublicKey('2ASEPw3hHH1YpKtFKefWDmTiB4mUnGqM3Y9RGWxyTHRF'), //owner//02-create-token-account
        new Web3.PublicKey('F4coyXgjxsQGp9M3ZFR71vV8YadsJaz1oSfp2qRgCkfg'), //authority//public
        100000000000, //amount
    )
    console.log('mint Token ', mintToken)

}
main()