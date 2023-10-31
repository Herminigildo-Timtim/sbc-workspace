import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('F4coyXgjxsQGp9M3ZFR71vV8YadsJaz1oSfp2qRgCkfg');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()