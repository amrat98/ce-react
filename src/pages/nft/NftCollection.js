import { useState } from "react";
const collectionDrpDwn = ["7 days", "24 Hours", "1 Day", "7 Days"];
export const NftCollection = () => {
  const [changeDrpDwn, setChangeDrpDwn] = useState(false);
  const [tapButton, setTapButton] = useState(1);

  return (
    <div style={{ background: "#000" }}>
      <div className="container">
        <div className="Tap-Btn-Parent-Container">
          <div>
            <h1 className="Nft-Heading">Collections</h1>
            <div className="Nft-Tap-Container">
              <button
                className={
                  tapButton === 1
                    ? "nft-active-btn tapButton"
                    : "tapButton transparentBg"
                }
                onClick={() => setTapButton(1)}
              >
                Trending
              </button>
              <button
                className={
                  tapButton === 2
                    ? "nft-active-btn tapButton"
                    : "tapButton transparentBg"
                }
                onClick={() => setTapButton(2)}
              >
                Top
              </button>
            </div>
          </div>
          <div className="Tap-Btn-Parent-Right-Child">
            <button>1H</button>
            <button>6H</button>
            <button>24H</button>
            <button>7D</button>
            <div onClick={() => setChangeDrpDwn(!changeDrpDwn)}>
              All Chain{" "}
              {changeDrpDwn && (
                <div className="Nft-Collection-DrpDwn">
                  {collectionDrpDwn?.map((data, index) => (
                    <p
                      key={index}
                      onClick={() => {
                        setChangeDrpDwn(!changeDrpDwn);
                      }}
                    >
                      {data}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="NftMarketPlace-Table-Container">
          <table className="NftMarketPlace-Table">
            <thead className="NftMarketPlace-Table-head">
              <tr>
                <th>Collections</th>
                <th>%Change</th>
                <th>Floor Price</th>
                <th>Volume</th>
                <th>Sale</th>
              </tr>
            </thead>
            <tbody className="NftMarketPlace-Table-body">
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="NftMarketPlace-Table-Td-Container">
                    <div>
                      <img src="/assets/images/dummy.webp" alt="" />
                    </div>
                    <div>
                      <h3>Player #2039</h3>
                      <p>Squid Game Players</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="_change-cont">
                    <p>5%</p>
                    <button>Sell</button>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
                <td>
                  <div className="NftMarketPlace-Table-container">
                    <p>0x23...3f67</p>
                    <span>Owner</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
