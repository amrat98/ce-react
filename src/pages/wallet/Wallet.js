import { Button } from "../../components/button/Button";
import { Table } from "../../components/table/CommonTable";
import { Input } from "../../components/input/Input";
import { DropDown } from "../profile/kyc/DropDown";
const Head = [
  "Currency",
  "Available Balance",
  "Withdraw Fund",
  "Deposit Fund",
  "Locked Balance",
  "Action",
];
export const Wallet = () => {
  return (
    <div className="Wallet-Container">
      <div className="container">
        <div className="Wallet-Overview-Container">
          <div className="Wallet-Overview-Nav-Container">
            <h3>Wallet overview</h3>
            <div className="Wallet-Overview-Nav-Btn-Container">
              <Button ClASSS={"black"}>Deposit</Button>
              <Button ClASSS={"black"}>Withdraw</Button>
              <Button ClASSS={"black"}>Transfer</Button>
              <Button ClASSS={"black"}>Transaction History</Button>
            </div>
          </div>
          <div className="Wallet-Overview-Amount-Container">
            <span>
              Current Value
              <br />
              $0
            </span>
            <span>
              Invested Amount
              <br />
              $0
            </span>
            <span>
              Available Fund
              <br />
              $0
            </span>
          </div>
          <div className="Wallet-Overview-Table-Container">
            <h3 className="Wallet-Overview-Table-head">Fiat Wallet</h3>
            <Table head={Head} />
          </div>
          <div className="Wallet-Overview-Search-Container">
            <h3 className="Wallet-Overview-Table-head">Fiat Wallet</h3>
            {/* <div>
                <DropDown/>
            </div> */}
          </div>
          <div className="Wallet-Overview-Table-Container">
            <h3 className="Wallet-Overview-Table-head">Fiat Wallet</h3>
            <Table head={Head} />
          </div>
        </div>
      </div>
    </div>
  );
};
