import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaWallet, FaTwitter } from 'react-icons/fa';
import connectWallet from './walletconection';


function User() {
  return ( 
    <div className="App">
      <div className="border col-5 container shadow" style={{'borderRadius':'5px 5px 0 0'}}>
        <h2><b>9</b> days left</h2>
      </div>

      <img ng-if="!show_image_above_name() && has_single_image()" className="crisp incentive-banner ng-scope top col-5" ng-src="https://user-assets.out.sh/user-assets/579570/FEjhzxuZTPg0wo4G/where-to.gif" ng-style="{height: imageHeight()}" alt="NFT Giveaway" ng-class="{top: incentive.description}" applyonload src="https://user-assets.out.sh/user-assets/579570/FEjhzxuZTPg0wo4G/where-to.gif"  />
      
      <div className="border col-5 container shadow pt-2" style={{'borderRadius':'0 0 5px 5px'}}>
        <p> Promote your NFTs by giving some free ones away to users who 
        complete meaningful actions that will build awareness and spread the word about your NFTs.</p>
        <div style={{'display': 'flex'}} onClick={connectWallet}>
          <div className="icon col-2">
            <h4><FaWallet /></h4>
          </div>
          <div className="field">
            <h4>Connect your Tezos Wallet</h4>
          </div>
        </div>
        <div style={{'display': 'flex'}}>
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
