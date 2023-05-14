import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { FaWallet, FaTwitter } from 'react-icons/fa';
import connectWallet from './walletconection';
import { AiFillCheckCircle } from 'react-icons/ai';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { authentification } from './firebase-config';
import { TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from "axios";

import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";
// import { TezosToolkit } from "@taquito/taquito";
// import { BeaconWallet } from "@taquito/beacon-wallet";


const config ={
    headers:{
      'content-type': 'multipart/form-data'
  
  }
  }
const AddUserToDataBase = (username) => {
    console.log(username);
    
    axios
      .post(`http://localhost:5000/api/twitter/${username}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
  
      }).catch((err)=>{
        console.log(err);
      });
  };

const AddWallet = (wallet) => {
    console.log(wallet);
    
    axios
      .post(`http://localhost:5000/api/wallet/${wallet}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
  
      }).catch((err)=>{
        console.log(err);
      });
  };




const signInWithTwitter =() =>{
const provider = new TwitterAuthProvider();
signInWithPopup(authentification,provider)
.then((re)=>{
    console.log(re._tokenResponse);
    console.log(re._tokenResponse.screenName);
    AddUserToDataBase(re._tokenResponse.screenName)


}).catch((err)=>{
    console.log(err);
})

}

async function wallet_check(){
  const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
  const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

  Tezos.setWalletProvider(wallet);

  // The following code should always be run during pageload if you want to show if the user is connected.
  const activeAccount = await wallet.client.getActiveAccount();
  console.log('actrive', activeAccount)
  if (activeAccount) {
    // User already has account connected, everything is ready
    // You can now do an operation request, sign request, or send another permission request to switch wallet
    return true;
  } else {
    // The user is not connected. A button should be displayed where the user can connect to his wallet.
    console.log("Not connected!");
    return false;
  }
}














function User() {
      const [account, setAccount] = useState(false)

  useEffect(()=> {
     const check = async ()=>{
      let wc = await wallet_check()
      setAccount(wc)
      console.log({wc});
    }
    check()
  },[account])
  return ( 

    <div className="App">
      <div className="border col-5 container shadow" style={{'borderRadius':'5px 5px 0 0'}}>
        <h2><b>9</b> days left</h2>
      </div>

      <img ng-if="!show_image_above_name() && has_single_image()" className="crisp incentive-banner ng-scope top col-5" ng-src="https://user-assets.out.sh/user-assets/579570/FEjhzxuZTPg0wo4G/where-to.gif" ng-style="{height: imageHeight()}" alt="NFT Giveaway" ng-class="{top: incentive.description}" applyonload src="https://user-assets.out.sh/user-assets/579570/FEjhzxuZTPg0wo4G/where-to.gif"  />
      
      <div className="border col-5 container shadow pt-2" style={{'borderRadius':'0 0 5px 5px'}}>
        <p> Promote your NFTs by giving some free ones away to users who 
        complete meaningful actions that will build awareness and spread the word about your NFTs.</p>
     
          {account ? (
          <div style={{'display': 'flex'}} onClick={connectWallet}>
            <div className="icon col-2" style={{'background-color':'green'}}>
              <h4><AiFillCheckCircle /></h4>
            </div>
            <div className="field">
              <h4>Your wallet is connected</h4>
            </div>
          </div>
        ):(
          <div style={{'display': 'flex'}} onClick={connectWallet}>
            <div className="icon col-2">
              <h4><FaWallet /></h4>
            </div>
            <div className="field">
              <h4>Connect your Tezos Wallet</h4>
            </div>
          </div>
        )}
        
        <div style={{'display': 'flex'}} onClick={signInWithTwitter}>
          <div className="icon col-2" style={{'background-color': '#00BFFF'}}>
            <h4><FaTwitter /></h4>
          </div>
          <div className="field">
            <h4>Sign in with Twitter account</h4>
          </div>
        </div>
        <div className='footer'>
          <p>Terms & Conditions | © NFT Creator</p>
        </div>
      </div>





</div>



 
  );
}

export default User;
