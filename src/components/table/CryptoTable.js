import { useState } from "react";
import { Button } from "../button/Button";
import "./cryptoTable.css";
const navigation = ["Spot", "Future", "Gainers", "New", "24th Vol"];
export const CryptoStatsTable = ({ data }) => {
  const [activeNav, setActiveNav] = useState(navigation[0]);
  return (
    <>
      <div className="crypto-table-container">
        <div className="container">
          <div className="crypto-table-main-container">
            <nav>
              <ul className="table-nav">
                {navigation.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => setActiveNav(item)}
                      className={
                        item === activeNav
                          ? "table-nav-active"
                          : "table-nav-inactive"
                      }
                      style={{cursor: "pointer"}}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <table className="crypto-table">
              <thead>
                <tr>
                  <th className="crypto-name">Name</th>
                  <th className="crypto-price">Price</th>
                  <th className="crypto-change">24h Change</th>
                  <th className="crypto-market-stats">Market Stats</th>
                  <th className="crypto-action">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="crypto-name">{item.name}</td>
                    <td className="crypto-price">{item.price}</td>
                    <td className="crypto-change">{item.change}</td>
                    <td className="crypto-market-stats">
                      <img src={item.marketStats} />{" "}
                    </td>
                    <td className="crypto-action">
                      <Button ClASSS={"blue"}>{item.action}</Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
