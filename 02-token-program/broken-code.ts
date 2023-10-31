import * as Web3 from '@solana/web3.js'
import base58 from 'bs58';


async function main() {
    const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
    const decoded = base58.decode("H33xDfLVPZK8VtQnw8odLEvUmKDCsQ7nwbJErP6CaVVyBJ5AnNGzrzea2r3tyAPJYKMkScqZvmgizXbBMkmxWrJ");
    const keyPair = Web3.Keypair.fromSecretKey(decoded);
    const programId = new Web3.PublicKey("EYxV7kbsHS3LqQugfUL8MUETF3cNZfi9pJ3VpqV8kL4d");
    const publicKey = new Web3.PublicKey("F4coyXgjxsQGp9M3ZFR71vV8YadsJaz1oSfp2qRgCkfg");
    
    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId,
    });
    const transaction = new Web3.Transaction().add(instruction);

    const signature = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [keyPair]
    )
    console.log('SIGNATURE', signature)
}

main()
.then(() => process.exit(0))
.catch(err => {
    console.error(err)
});