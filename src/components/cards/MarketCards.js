import "./Index.css";
export const MarketCards = ({ label }) => {
  return (
    <div className="MarketCard-Container">
      <h3 className="MarketCard-Label">label</h3>
      <div className="MarketCard-Content-Container">
        <tr className="MarketCard-Content-Rwo">
          <td>
            <img src="/assets/icons/bitcoin.svg" alt="coin-img" />
            BNB
          </td>
          <td>327.20</td>
          <td>-0.79%</td>
        </tr>
        <tr className="MarketCard-Content-Rwo">
          <td>
            <img src="/assets/icons/bitcoin.svg" alt="coin-img" />
            BNB
          </td>
          <td>327.20</td>
          <td>-0.79%</td>
        </tr>
        <tr className="MarketCard-Content-Rwo">
          <td>
            <img src="/assets/icons/bitcoin.svg" alt="coin-img" />
            BNB
          </td>
          <td>327.20</td>
          <td>-0.79%</td>
        </tr>
      </div>
    </div>
    // check
  );
};
