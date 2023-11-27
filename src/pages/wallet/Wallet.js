import { useState } from "react";
import { Button } from "../../components/button/Button";
import { Table } from "../../components/table/CommonTable";
import { Input } from "../../components/input/Input";
import { DropDown } from "../../components/dropdown/DropDown";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Deposit } from "./Deposit";
import { Withdraw } from "./Withdraw";
import { TransactionHistory } from "./TransactionHistory";
import { WalletTransfer } from "./Transfer";
import "./Index.css";
const Head = [
  "Currency",
  "Available Balance",
  "Withdraw Fund",
  "Deposit Fund",
  "Locked Balance",
  "Action",
];

export const Wallet = () => {
  const [tab, setTab] = useState(0);
  const handleButtonClick = (value) => {
    setTab(value);
  };
  return (
    <>
      <Header />
      <div className="Wallet-Container">
        <div className="container">
          <div className="Wallet-Overview-Container">
            <div className="Wallet-Overview-Nav-Container">
              <h3
                className="Wallet-Overview-Table-head"
                style={{ margin: "0px" }}
              >
                Wallet overview
              </h3>
              <div className="Wallet-Overview-Nav-Btn-Container">
                <Button ClASSS={"black"} onClick={() => handleButtonClick(1)}>
                  Deposit
                </Button>
                <Button ClASSS={"black"} onClick={() => handleButtonClick(2)}>
                  Withdraw
                </Button>
                <Button ClASSS={"black"} onClick={() => handleButtonClick(3)}>
                  Transfer
                </Button>
                <Button ClASSS={"black"} onClick={() => handleButtonClick(4)}>
                  Transaction History
                </Button>
              </div>
            </div>
            {tab === 0 && (
              <>
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
                  <h3
                    className="Wallet-Overview-Table-head"
                    style={{ margin: "0px" }}
                  >
                    Fiat Wallet
                  </h3>
                  <div>
                    <Input placeholder={"Search Coin"} />
                    <DropDown />
                  </div>
                </div>
                <div className="Wallet-Overview-Table-Container">
                  <Table head={Head} />
                </div>
              </>
            )}

            {tab === 1 && (
              <>
                <Deposit />
              </>
            )}
            {tab === 2 && (
              <>
                <Withdraw />
              </>
            )}
            {tab === 3 && (
              <>
                <WalletTransfer />
              </>
            )}
            {tab === 4 && (
              <>
                <TransactionHistory />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
