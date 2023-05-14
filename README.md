# General information
"Truly Know Your Customer", aims to offer companies operating in the field of blockchain a better knowledge of their future customers.

Our approach is based on a simple and effective process. On the one hand, companies or project leaders define the specific parameters of their target customers, such as NFT holders, game enthusiasts, DeFi enthusiasts, etc.

At the same time, users wishing to access exclusive benefits, such as whitelisting and participation in airdrops, initially provide their wallet and Twitter account. Thanks to our artificial intelligence, we classify customers according to their profile. In particular, we examine wallet-related interactions, such as transactions with challenge or NFT protocols, the length of time NFTs are held before they are put on sale, etc.

As for the part related to Twitter, we analyze interactions such as tweets, retweets, likes, followers and people followed, in order to better understand the interests and preferences of users.

All this information is then stored in our database. If we find a match between the profile of the users and the criteria defined by the companies, we are able to export the corresponding addresses for registration on Whitelist or distribution of airdrops.

Our "Truly Know Your Customer" solution thus offers companies a better understanding of their customers, allowing them to target their product or service offer in a more precise and relevant manner.
# walletconection.js

**Connect Wallet and Get Transaction History with TzKT API using Taquito**

This is a JavaScript code snippet that allows you to connect to a Tezos wallet using the @taquito/taquito and @taquito/beacon-wallet libraries, and get the transaction history of the connected wallet address using the TzKT API with axios.

**Prerequisites**

Before you can use this code, you need to have the following:

- A web3-enabled wallet that supports the Tezos network, such as the Beacon wallet.
- A TzKT API endpoint URL.
- A JavaScript environment, such as Node.js or a web browser, with the following dependencies installed:
  - @taquito/taquito
  - @taquito/beacon-wallet
  - axios

**Usage**

To use this code, you can copy and paste the code into your JavaScript project and call the **connectWallet()** function to connect to the wallet and get the transaction history.

This code initializes the **TezosToolkit** object with the Mainnet node URL, creates a **BeaconWallet** object, and connects to the wallet using the **requestPermissions()** method. After the wallet is connected, the code retrieves the wallet's address and constructs the endpoint URL to get the transaction history using the TzKT API. The code then sends a GET request to the endpoint URL using **axios** with the specified query parameters and logs the transaction history to the console.

You can customize the **params** object to filter the transaction history according to your needs, and you can also modify the code to perform other operations with the Tezos network using **@taquito/taquito**.

# Dashboard.js

**Admin Dashboard**

This React code displays a table of **data** objects containing Twitter handles, wallet addresses, and their respective statuses. The user can filter the data based on the status and select specific data objects using checkboxes.

The data used in the table is pre-defined in the data array, but it can be replaced with data retrieved from a database or an API.

**Filtering Data**

The **selectedStatus** state variable keeps track of the selected filter option, and the **filteredData** variable is updated with the filtered data objects based on the selected option.

To change the filter option, the user can select an option from the **select** dropdown menu. The **handleStatusChange** function updates the **selectedStatus** state with the selected option.

**Selecting Data**

Each data object in the table has a checkbox that the user can select to perform an action on. The **select** property in the data objects is used to control the state of the checkboxes.

The handleSelectChange function updates the state of the select property when a checkbox is selected or deselected.

**Modifying Data**

The table displays data that can be modified or deleted based on the actions taken by the user. For instance, the user can delete selected data objects by clicking on the "Delete" button.

The current code is using pre-defined data, but instead of **const data** variable, it can be connected to Flask server to fetch data using Python script that will do the scrapping of criteria as per the admin requirement.

# App.js

**Project Overview**

This code contains the main page of a web application built using React. The application allows users to view data related to Twitter handles and associated wallet addresses. Additionally, there is an admin page that provides various options for managing the data displayed to users.

**App Component**

This component is the entry point of the application and sets up the routing between the two main pages. It uses the **BrowserRouter** and **Routes** components from the **react-router-dom** library to create two routes: one for the main page and one for the admin page (write "/admin" in the end of URL).

**Dashboard Component**

This component is the admin page of the application and displays a table of data related to Twitter handles and wallet addresses. It uses the **useState** hook to manage the state of the table data and the **selectedStatus** variable, which is used to filter the data by status. It also defines two functions to handle changes to the table data and filter settings, respectively.

**User Component**

This component is the main page of the application and displays a simple form for users to enter their Twitter handle and wallet address. It does not use any state management and simply renders the form on the page.

**Running the Application**

The **ReactDOM.createRoot** function is used to render the **App** component to the **root** element in the HTML document. This is done using the **render** method of the **root** object.

# User.js

**Description**

This code is a React component that displays a page where users can connect their Tezos wallet and sign in with their Twitter account. If the user's wallet is already connected, a "Your wallet is connected" message is displayed. Otherwise, a "Connect your Tezos Wallet" button is displayed.

**Functionality**

When the **User** component is rendered, it calls the **wallet\_check()** function, which checks whether the user's wallet is already connected. If the wallet is connected, the component displays a "Your wallet is connected" message and a green checkmark. If the wallet is not connected, the component displays a "Connect your Tezos Wallet" button.

The component also displays a "Sign in with Twitter account" button, and a footer with "Terms & Conditions" and a copyright.

**Reload on Connect/Disconnect**

When the user connects or disconnects their wallet, they should reload the page to see the updated status. This is because the **wallet\_check()** function is called during page load and does not automatically update when the wallet connection changes.

# Server (other)
We used mongodb(nosql ) and linked it with nodejs through reactjs so that the admin will visualise all the data of the user(id,username,wallet,status) status is like a criteria which will allow the admin in his backoffice part to match the users with the criteria he used so that he will eventually whitlist the required users for nft giveaway for example.

However our database is a  loacal one, we wanted to make it on cloud however due to lack of time we couldn't manage to 

On the nodejs part we used many api's :
delete function: on the backoffice part to delete certain users that will be automatically disqualified if he doesn't match the criterias
getall: to retrieve all the users that are in the database and that managed to get connected 
twitter: username put in the database
wallet: wallet put in the database



We used also a twitter api dev that we used through firebase linked to a react frontend with a configuration firebase file 


ALso we used ngrok.com pour avoir un moyen rapide to have the fastest way to deploy our site on the internet
Deploy code from client
