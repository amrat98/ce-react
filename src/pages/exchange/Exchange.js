import { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import "./Index.css";
const LeftNavOpt = ["BUSD", "USDT", "BNB", "BTC"];
const BtmTableOpt = [
  "Open Orders (19)",
  "Complete Order",
  "Order History",
  "Fund",
];
const TableHead = [
  "Pair",
  "Price",
  "Amount",
  "Total",
  "Order Status",
  "Order Side",
  "Order Type",
  "Filled %",
  "Date & Time",
  "Action",
];
export const Exchange = () => {
  const [selectOpt, setSelectOpt] = useState(0);
  const [selectBtn, setSelectBtn] = useState(0);
  const [selectBmBtn, setSelectBtmBtn] = useState(0);
  return (
    <>
      <Header />
      <div style={{ background: "#000" }}>
        <div className="Exchange-Page-Container">
          <div className="Exchange-Left-Box">
            <h1 className="Exchange-Box-Head">Select Market</h1>
            <div className="Exchange-Left-Nav-Container">
              <img src="/assets/icons/star.svg" alt="Star" />
              <ul className="Exchange-Left-Box-Nav">
                {LeftNavOpt.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectOpt(index)}
                    className={
                      selectOpt === index
                        ? "Exchange-Active"
                        : "Exchange-InActive"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="Exchange-Left-Listed-Container">
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
              <div className="Exchange-Listed-Coins-Box">
                <p>
                  <img src="/assets/icons/star.svg" alt="star" />
                  <img src="/assets/icons/bitcoin.svg" alt="coin" />
                  <span>Bitcoin</span>
                  <span>BTC</span>
                </p>
                <p>
                  <span>$60.962</span>
                  <span>-1.52%</span>
                </p>
              </div>
            </div>
          </div>
          <div className="Exchange-Center-Box"></div>
          <div className="Exchange-Right-Box">
            <div className="Exchange-Right-Head-Box">
              <h1 className="Exchange-Box-Head">Order Book</h1>
              <div className="Order_Book_Container">
                <img src="/assets/icons/red_green.svg" alt="" />
                <img src="/assets/icons/red_green.svg" alt="" />
                <img src="/assets/icons/red_green.svg" alt="" />
              </div>
            </div>
            <div className="Exchange-Right-Table-Container">
              <table>
                <thead>
                  <tr>
                    <th>Price(USDT)</th>
                    <th>Amount(BTC)</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Exchange-Righ_btm">
              <ul className="Exchange-Righ_btm_Ul">
                <li
                  className={
                    selectBtn === 0
                      ? "Exchange-Righ_btm_Select"
                      : "Exchange-Righ_btm_UnSelect"
                  }
                  onClick={() => setSelectBtn(0)}
                >
                  Market Trades
                </li>
                <li
                  className={
                    selectBtn === 1
                      ? "Exchange-Righ_btm_Select"
                      : "Exchange-Righ_btm_UnSelect"
                  }
                  onClick={() => setSelectBtn(1)}
                >
                  My Trades
                </li>
              </ul>
            </div>
            <div className="Exchange-Right-Table-Container">
              <table>
                <thead>
                  <tr>
                    <th>Price(USDT)</th>
                    <th>Amount(BTC)</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                  <tr>
                    <td>41379.68</td>
                    <td>0.00029</td>
                    <td>289.49199</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="Exchange-Btm-Table-Container">
          <div className="Exchange-Btm-Table-Nav-Btn">
            <ul>
              {BtmTableOpt?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSelectBtmBtn(index)}
                  className={
                    index === selectBmBtn
                      ? "Exchange-Btm-Table-Nav-Btn-Active"
                      : "Exchange-Btm-Table-Nav-Btn-InActive"
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <table>
            <thead>
              <tr>
                {TableHead?.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BTC</td>
                <td>41.322.22</td>
                <td>$41.322.22</td>
                <td>0.00012</td>
                <td>Pending</td>
                <td>254036521.00</td>
                <td>Buy</td>
                <td>254036521.00</td>
                <td>21-Mar-2022</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>41.322.22</td>
                <td>$41.322.22</td>
                <td>0.00012</td>
                <td>Pending</td>
                <td>254036521.00</td>
                <td>Buy</td>
                <td>254036521.00</td>
                <td>21-Mar-2022</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>41.322.22</td>
                <td>$41.322.22</td>
                <td>0.00012</td>
                <td>Pending</td>
                <td>254036521.00</td>
                <td>Buy</td>
                <td>254036521.00</td>
                <td>21-Mar-2022</td>
                <td>Pending</td>
              </tr>

              <tr>
                <td>BTC</td>
                <td>41.322.22</td>
                <td>$41.322.22</td>
                <td>0.00012</td>
                <td>Pending</td>
                <td>254036521.00</td>
                <td>Buy</td>
                <td>254036521.00</td>
                <td>21-Mar-2022</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>41.322.22</td>
                <td>$41.322.22</td>
                <td>0.00012</td>
                <td>Pending</td>
                <td>254036521.00</td>
                <td>Buy</td>
                <td>254036521.00</td>
                <td>21-Mar-2022</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>41.322.22</td>
                <td>$41.322.22</td>
                <td>0.00012</td>
                <td>Pending</td>
                <td>254036521.00</td>
                <td>Buy</td>
                <td>254036521.00</td>
                <td>21-Mar-2022</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>41.322.22</td>
                <td>$41.322.22</td>
                <td>0.00012</td>
                <td>Pending</td>
                <td>254036521.00</td>
                <td>Buy</td>
                <td>254036521.00</td>
                <td>21-Mar-2022</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  );
};
