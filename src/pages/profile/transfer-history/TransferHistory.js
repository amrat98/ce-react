import { useState } from "react";
import { Button } from "../../../components/button/Button";
import { Table } from "../../../components/table/CommonTable";
import { Template } from "../../../components/template/Template";
import { CSVLink } from "react-csv";
import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
import "./TransferHistory.css";
const TableHead = ["User ID", "Coin Type", "Status", "Amount", "Create At"];
export const TransferHistory = () => {
  const [data, setData] = useState([
    { name: "John Doe", age: 30, city: "New York" },
    { name: "Jane Doe", age: 25, city: "San Francisco" },
    { name: "Bob Smith", age: 35, city: "Los Angeles" },
  ]);
  return (
    <>
      <Header />
      <div className="Transfer-History-Parent">
        <div className="container">
          <div className="Transfer-History-Btn-Container">
            <Button ClASSS={"blue"} style={{ maxWidth: "191px" }}>
              Deposit History
            </Button>
            <Button ClASSS={"black"} style={{ maxWidth: "191px" }}>
              Withdraw History
            </Button>
          </div>
          <Template>
            <div className="Transfer-History-Table-Container">
              <div className="Transfer-History-Table">
                <span>internal transfer history</span>
                <CSVLink data={data}>
                  <Button ClASSS={"blue"} style={{ minWidth: "335px" }}>
                    Download data in CSV Format
                  </Button>
                </CSVLink>
              </div>
              <Table head={TableHead} />
            </div>
          </Template>
        </div>
      </div>
      <Footer />
    </>
  );
};
