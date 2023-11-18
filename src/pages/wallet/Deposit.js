import { DropDown } from "../../components/dropdown/DropDown";
import { Button } from "../../components/button/Button";
import { CopyInput } from "../../components/input/InputBoxWithIcons";
import "./Index.css";
const Coin = [
  { value: "Bitcoin", bool: true },
  { value: "Ethereum", bool: true },
  { value: "Ripple", bool: true },
  { value: "Binance Coin", bool: true },
  { value: "Tron", bool: true },
];

const Network = [
  { value: "Network 1", bool: true },
  { value: "Network 2", bool: true },
  { value: "Network 3", bool: true },
  { value: "Network 4", bool: true },
  { value: "Network 5", bool: true },
];
export const Deposit = () => {
  return (
    <div className="Wallet-Btm-Container" style={{ background: "#000" }}>
      <div className="Wallet-Form-Box">
        <h1 className="Wallet-Form-head">Deposit Crypto</h1>
        <DropDown title={"Select Coin:"} option={Coin} />
        <DropDown title={"Select Network:"} option={Network} />
        <CopyInput
          label={"Address:"}
          placeholder={"Enter your Address"}
          name={"Address"}
        />
        <div>
          <div className="Wallet-Extra-Info-Container">
            <div>
              <h4>Expected arrival</h4>
              <p>Expected arrival</p>
            </div>
            <div>
              <h4>Expected Unlock</h4>
              <p>12 Network confirmations</p>
            </div>
          </div>
          <div className="Wallet-Extra-Info-Container">
            <div>
              <h4>Minimum Deposit</h4>
              <p>0.000001 BTC</p>
            </div>
          </div>
        </div>
        <Button ClASSS={"blue"} style={{ maxWidth: "103px" }}>
          Back
        </Button>
      </div>
      <div className="Wallet-Content-Box">
        <h1 className="Wallet-Form-head">Deposit hasn't arrived?</h1>
        <p>
          If you encounter the following problems during the deposit process,
          you can go to Deposit Status Query to search for your current deposit
          status or retrieve your assets via self service application.
        </p>
        <ul>
          <li>
            <img src="/assets/icons/triangle.svg" alt="traingle" />
            Deposit has not arrived after a long
          </li>
          <li>
            <img src="/assets/icons/triangle.svg" alt="traingle" />
            Didn't enter MEMO/Tag correctly
          </li>
          <li>
            <img src="/assets/icons/triangle.svg" alt="traingle" />
            Deposited unlisted coins
          </li>
        </ul>
      </div>
    </div>
  );
};
