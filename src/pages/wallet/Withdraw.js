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
export const Withdraw = () => {
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
              <h4>BTC Balace</h4>
              <p>Expected arrival</p>
            </div>
            <div>
              <h4>Minimum withdrawal</h4>
              <p>Amount</p>
            </div>
          </div>
          <div className="Wallet-Extra-Info-Container">
            <div>
              <h4>Network Fee</h4>
              <p>0.001 BTC - 0.2233 BTC</p>
            </div>
            <div>
              <h4>24 remaining limit</h4>
              <p>8,000,000.00 BUSD/ 80000 BUSD</p>
            </div>
          </div>
        </div>
        <Button ClASSS={"blue"} style={{ maxWidth: "103px" }}>
          Back
        </Button>
      </div>
      <div className="Wallet-Content-Box">
        <h1 className="Wallet-Form-head">Withdraw</h1>
        <p>
          Please cross-check the destination address. Withdrawals to smart
          contract Addresses, payment or participation in ICOs/Airdrops are not
          supportyed and will be lost forever. Withdrawl request cannot be
          cancelled after submission.
        </p>
      </div>
    </div>
  );
};
