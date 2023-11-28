export const UserProfile = () => {
  return (
    <div className="P2P-User-Profile-Container">
      <div className="P2P-Dash-User-Profile-Container">
        <div className="P2P-Dash-User-Container">
          <div className="P2P-User-Circle">U</div>
          <div className="User-Verify-Parent-Container">
            <div className="User-Verify-Cotainer">
              <span className="p2p-userName">Umair1251</span>
              <span>
                <img src="/assets/icons/verified.svg" alt="verify" />
                Verified
              </span>
            </div>
            <div className="User-Join-Dtl-Container">
              <p>Joined on 2022-08-19</p>
              <p>Deposit 5,000.00 BUSD</p>
            </div>
            <div className="p2p-user-auth">
              <p>
                <img src="/assets/icons/verified.svg" alt="verify" />
                <span>Email</span>
              </p>
              <p>
                <img src="/assets/icons/verified.svg" alt="verify" />
                <span>SMS</span>
              </p>
              <p>
                <img src="/assets/icons/verified.svg" alt="verify" />
                <span>KYC Verified</span>
              </p>
            </div>
          </div>
        </div>
        <div className="Dash-Box-P2P-Parent">
          <div className="Dash-Box-P2P">
            <p>Trades</p>
            <span>945</span>
            <h3>
              <span>Buy</span> / <span>Sell</span>
            </h3>
          </div>
          <div className="Dash-Box-P2P">
            <p>Trades</p>
            <span>945</span>
            <h3>
              <span>Buy</span> / <span>Sell</span>
            </h3>
          </div>
          <div className="Dash-Box-P2P">
            <p>Trades</p>
            <span>945</span>
            <h3>
              <span>Buy</span> / <span>Sell</span>
            </h3>
          </div>
          <div className="Dash-Box-P2P">
            <p>Trades</p>
            <span>945</span>
            <h3>
              <span>Buy</span> / <span>Sell</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
