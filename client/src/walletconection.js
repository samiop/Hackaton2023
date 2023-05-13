import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { axios } from "axios";

const connectWallet = async () =>{
    const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
    const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });
    // TzKT API endpoint
    const tzktApiUrl = "https://api.tzkt.io/v1";

    try {
        // Requesting permission, connect wallet
        Tezos.setWalletProvider(wallet);
        const permissions = await wallet.client.requestPermissions();
    

        // Endpoint to get transaction history for the address
        const endpoint = `${tzktApiUrl}/accounts/${permissions.address}/operations`;

        const params = {
            type: "transaction",  // Only show transaction operations
            limit: 10,  // Limit the number of results to 10
            'sort.desc': "timestamp",  // Sort the results in descending order by timestamp
        };

        // Make the request to the TzKT API
        axios.get(endpoint, {params})
            .then(response => {
                // Get the transaction history from the response
                const transactionHistory = response.data;
                // Print the transaction history
                console.log(transactionHistory);
            })
            .catch(error => {
                // Handle the error
                console.log(`Error getting transaction history for ${permissions.address}: ${error}`);
            });
    } catch (error) {
        console.log("Got error:", error);
    }
}
export default connectWallet;
