import { Button } from "../../components/button/Button";
import { DateInput } from "../../components/input/Input";
import { DropDown } from "../../components/dropdown/DropDown";
import { Table } from "../../components/table/CommonTable";
const Coin = [
  { value: "Bitcoin", bool: true },
  { value: "Ethereum", bool: true },
  { value: "Ripple", bool: true },
  { value: "Binance Coin", bool: true },
  { value: "Tron", bool: true },
];

const Type = [
  { value: "Bitcoin", bool: true },
  { value: "Ethereum", bool: true },
  { value: "Ripple", bool: true },
  { value: "Binance Coin", bool: true },
  { value: "Tron", bool: true },
];

const head = ["Date", "Amount", "Address", "Txn Hash"];
export const TransactionHistory = () => {
  return (
    
    <div className="container">
      <div className="Transaction-History-Container">
        <aside>
          <div className="Transaction-History-Sidebar">
            <ul>
              <li>
                <img src="/assets/icons/coin.svg" alt="coin-img" />
                Bitcoin
              </li>
              <li>
                <img src="/assets/icons/coin.svg" alt="coin-img" />
                Bitcoin
              </li>
              <li>
                <img src="/assets/icons/coin.svg" alt="coin-img" />
                Bitcoin
              </li>
              <li>
                <img src="/assets/icons/coin.svg" alt="coin-img" />
                Bitcoin
              </li>
              <li>
                <img src="/assets/icons/coin.svg" alt="coin-img" />
                Bitcoin
              </li>
              <li>
                <img src="/assets/icons/coin.svg" alt="coin-img" />
                Bitcoin
              </li>
              <li>
                <img src="/assets/icons/coin.svg" alt="coin-img" />
                Bitcoin
              </li>
            </ul>
          </div>
        </aside>
        <div className="Wallet-Transfer-History-Right-Container">
          <div className="Wallet-Transfer-History-Btn-Container">
            <Button ClASSS={"blue"}>Deposit History</Button>
            <Button ClASSS={"black"}>Withdraw History</Button>
            <Button ClASSS={"black"}>Transfer History</Button>
            <Button ClASSS={"black"}>Export as Excel</Button>
          </div>
          <div className="Wallet-Transfer-History-drp-dwn-Container">
            <DropDown title={"Coin"} option={Coin} />
            <DropDown title={"Type"} option={Type} />
            <DateInput
              label={"From"}
              placeholder={"mm/dd/yyyy"}
              name={"from"}
            />
            <DateInput label={"To"} placeholder={"mm/dd/yyyy"} name={"to"} />
          </div>
          <div className="Wallet-Transfer-History-Tbl-Head">
            <div>
              <Button ClASSS={"blue"} style={{ minWidth: "128.556px" }}>
                Search
              </Button>
              <Button ClASSS={"black"} style={{ minWidth: "128.556px" }}>
                Reset
              </Button>
            </div>
          </div>
          <Table head={head} />
        </div>
      </div>
    </div>
  );
};
