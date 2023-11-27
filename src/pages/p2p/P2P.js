import { useState } from "react";
import { PaymentMethod } from "./PaymentMethod";
import { BankTransfer } from "./BankTransfer";
import { P2PDashBoard } from "./Dashboard";
import { PostAdd } from "./PostAdd";
import { DropDown } from "../../components/dropdown/DropDown";
import { Input } from "../../components/input/Input";
import { DateInput } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./index.css";
import { Table } from "../../components/table/CommonTable";
const Nav = ["P2P", "Post Your Add", "Add Payment Method", "P2P Dashboard"];
const Coin = ["USDT", "BTC", "BUSD", "BNB", "ETH", "ADA"];
const TableHead = [
  "Advertise",
  "Price",
  "Limit/Available",
  "Payments",
  "Trade",
];
export const P2P = () => {
  const [selectNav, setSelectNav] = useState(Nav[0]);
  const [selectSubNav, setSelectSubNav] = useState(Coin[0]);
  const [selectBtn, setSelectBtn] = useState(0);
  return (
    <>
      <Header />
      <div className="P2P-Container">
        <div className="P2P-About-Container">
          <h1>Buy and Sell Crypto with Your Preferred Payment Methods</h1>
          <p>
            Buy and sell Crypto safely and easily on NORDEK P2P. Find the best
            offer below and buy and sell USDT <br /> with Your Preferred Payment
            Methods today.
          </p>
        </div>
        <div className="P2P-Nav-Container">
          <div className="container">
            <nav>
              <ul className="P2P-Nav-List">
                {Nav.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectNav(item)}
                    className={
                      selectNav === item ? "P2P-Nav-Active" : "P2P-Nav-Disable"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="container">
          {selectNav === "P2P" && (
            <>
              <div className="P2P-Sub-Nav-Container">
                <div className="P2P-Sub-Nav-Btn-Box">
                  <button
                    className={
                      selectBtn === 0
                        ? "P2P-Sub-Nav-Btn-Select-btn"
                        : "P2P-Sub-Nav-Btn-UnSelect-btn"
                    }
                    onClick={() => setSelectBtn(0)}
                  >
                    Buy
                  </button>
                  <button
                    className={
                      selectBtn === 1
                        ? "P2P-Sub-Nav-Btn-Select-btn"
                        : "P2P-Sub-Nav-Btn-UnSelect-btn"
                    }
                    onClick={() => setSelectBtn(1)}
                  >
                    Sell
                  </button>
                </div>
                <nav>
                  <ul className="P2P-Nav-List">
                    {Coin.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => setSelectSubNav(item)}
                        className={
                          selectSubNav === item
                            ? "P2P-Nav-Active"
                            : "P2P-Nav-Disable"
                        }
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="P2P-drpDwn-Container">
                <div className="P2P-drpDwn-lefT">
                  <DropDown title={"Amount"} />
                  <DropDown title={"Fiat"} />
                  <DropDown title={"Payment Method"} />
                  <Input
                    label={"Country"}
                    placeholder={"Country List"}
                    name={"CountryList"}
                  />
                </div>
                <div className="P2P-drpDwn-right">
                  <Button ClASSS={"blue"}>SEARCH</Button>
                  <Button ClASSS={"black"}>Reset</Button>
                </div>
              </div>
              <div className="P2P-Search-Input-Container">
                <div className="P2P-Search-Input-Left">
                  <DateInput label={"from"} />
                  <DateInput label={"to"} />
                  <Button
                    ClASSS={"blue"}
                    style={{ maxWidth: "128.556px", marginLeft: "19px" }}
                  >
                    Search
                  </Button>
                </div>
                <div className="P2P-Search-Input-Right">
                  <Input placeholder={"Search Coin"} />
                </div>
              </div>
              <div className="P2P-Search-Table">
                <Table head={TableHead} />
              </div>
            </>
          )}

          {selectNav === "Post Your Add" && <PostAdd />}
          {selectNav === "Add Payment Method" && <PaymentMethod />}
          {selectNav === "P2P Dashboard" && <P2PDashBoard />}
          {/* <BankTransfer />
          
          <PostAdd /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
