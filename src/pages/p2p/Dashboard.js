import { useState } from "react";
import { Button } from "../../components/button/Button";
import { DropDown } from "../../components/dropdown/DropDown";
import { DateInput } from "../../components/input/Input";
import { Table } from "../../components/table/CommonTable";
import { UserProfile } from "./UserProfile";
const Coin = [
  { value: "Bitcoin", bool: true },
  { value: "Ethereum", bool: true },
  { value: "Ripple", bool: true },
  { value: "Binance Coin", bool: true },
  { value: "Tron", bool: true },
];
const head = [
  "S.No",
  "Advertisement Status",
  "Trade Type",
  "Payment Type",
  "Fiat",
  "Coin",
  "Equation",
  "created At",
  "Action",
];
export const P2PDashBoard = () => {

  return (
    <div className="P2P-Dashboard-Container">
      <div className="P2P-Dashboard-Head-Container">
        <h1>Dashboard</h1>
        <p>
          On this page you can view and manage your advertisements and trade
        </p>
      </div>
      <UserProfile/>
      <div className="P2P-Dashboard-Btn-Container">
        <div className="P2P-Dashboard-Btn-Left-Box">
          <Button ClASSS={"blue"}>MY ADVERTISEMENT</Button>
          <Button ClASSS={"black"}>COMPLETED TRADES</Button>
          <Button ClASSS={"black"}>CANCELLED TRADES</Button>
        </div>
        <div className="P2P-Dashboard-Btn-Right-Box">
          <Button ClASSS={"black"}>Download Data in CSV Format</Button>
        </div>
      </div>
      <div className="P2P-Dashboard-Table-Container">
        <h4>All Active Trades</h4>
        <div className="P2P-Dashboard-DrpDwn-Container">
          <div className="P2P-Dashboard-DrpDwn-Left">
            <DropDown title={"Coin"} option={Coin} />
            <DropDown title={"Type"} option={Coin} />
            <DateInput label={"From"} placeholder={"mm/dd/yyyy"} />
            <DateInput label={"To"} placeholder={"mm/dd/yyyy"} />
          </div>
          <div className="P2P-Dashboard-DrpDwn-Right">
            <Button ClASSS={"blue"}>Search</Button>
          </div>
        </div>
        <Table head={head} />
      </div>
    </div>
  );
};
