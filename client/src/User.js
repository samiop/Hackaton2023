import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






function User() {
  return (
    <div className="App">
     

     <div className="square-row__row">
        <div className="color-square red-square span6" ng-class="{span4: !campaign.hide_total_entries, span6: campaign.hide_total_entries}">
          <span className="square-describe" id="current-entries">
            <span className="status ng-binding" ng-class="getContestantEntriesStatusClass()">
              0
            </span>
            <span className="description ng-binding">Your Entries</span>
          </span>
        </div>
        {/* ngIf: !campaign.hide_total_entries */}
        <div className="color-square purple-square span6" ng-class="{span4: !campaign.hide_total_entries, span6: campaign.hide_total_entries}">
          <div className="square-divider" />
          <span className="square-describe ng-scope" data-ends={1684677612} data-starts={1642942800} gl-countdown ng-class="{'one-line': isEnded()}">
            <span className="status ng-binding">
              9
            </span>
            <span className="description ng-binding" ng-show="isStarted() || isTestMode()">
              Days
              {/* ngIf: !isEnded() && isStarted() */}<span ng-if="!isEnded() && isStarted()" className="ng-binding ng-scope">
                Left
              </span>{/* end ngIf: !isEnded() && isStarted() */}
              {/* ngIf: !isEnded() && !isStarted() */}
            </span>
            {/* ngIf: !isStarted() && !isTestMode() */}
          </span>
        </div>
      </div>

     <img ng-if="!show_image_above_name() && has_single_image()" className="crisp incentive-banner ng-scope top" ng-src="https://user-assets.out.sh/user-assets/579570/FEjhzxuZTPg0wo4G/where-to.gif" ng-style="{height: imageHeight()}" alt="NFT Giveaway" ng-class="{top: incentive.description}" applyonload src="https://user-assets.out.sh/user-assets/579570/FEjhzxuZTPg0wo4G/where-to.gif" style={{height: '283px'}} />
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div>

{/* <FontAwesomeIcon icon="fa-brands fa-square-twitter" /> */}
<i className="fas fa-wallet" ></i>

</div>


     
    </div>
  );
}

export default User;
