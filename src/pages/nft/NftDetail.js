import { useState } from "react";
export const NftDetail = () => {
  const [viewType, setViewType] = useState("table");
  return (
    <div style={{ background: "#000" }}>
      <div className="container">
        <div style={{ height: "382px" }}>
          <div
            className="Nft-MarketPlace-Image-Container"
            style={{ background: "url(/assets/images/image_164.webp)" }}
          >
            <div className="timer-box"></div>
            <div className="heart-box"></div>
            <ul className="NftDetail-Ul">
              <li>
                <span>486 ETH</span>
                <span>Total Volume</span>
              </li>
              <li>
                <span>0.082 ETH</span>
                <span>Floor Price</span>
              </li>
              <li>
                <span>0.075 WETH</span>
                <span>Best Offer</span>
              </li>
              <li>
                <span>11%</span>
                <span>Listed</span>
              </li>
              <li>
                <span>1,158 (27%)</span>
                <span>Owners (Unique)</span>
              </li>
            </ul>
          </div>
        </div>

        <ul className="NftDetail-btm-Ul">
          <li>
            <span>486 ETH</span>
            <span>Total Volume</span>
          </li>
          <li>
            <span>0.082 ETH</span>
            <span>Floor Price</span>
          </li>
          <li>
            <span>0.075 WETH</span>
            <span>Best Offer</span>
          </li>
          <li>
            <span>11%</span>
            <span>Listed</span>
          </li>
        </ul>
        <p className="NftDetail-btm-Para">
          <span>Description:</span>
          Lorem ipsum dolor sit amet consectetur. Nisl neque non neque fermentum
          lacus mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla.
          Senectus et lorem Lorem ipsum dolor sit amet consectetur. Nisl neque
          non neque fermentum lacus mattis bibendum. Sed nibh dolor aliquet
          maecenas urna nulla. Senectus et lorem Lorem ipsum dolor sit amet
          consectetur. Nisl neque non neque fermentum lacus mattis bibendum. Sed
          nibh dolor aliquet maecenas urna nulla. Senectus et lorem Lorem ipsum
          dolor sit amet consectetur. Nisl neque non neque fermentum lacus
          mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla. Senectus
          et lorem less..
        </p>

        <div className="nft-Filter-Container">
          <div>
            <div>
              <img src="/assets/icons/hierarchical-icon.svg" alt="" />
              <span>All Filters</span>
            </div>
            <div>
              <img src="/assets/icons/blue-search.svg" alt="" />
              <input placeholder="Search by name" />
            </div>
          </div>
          <div>
            <div style={{ gap: "20px" }}>
              <span>Best Offers</span>
              <img src="/assets/icons/hierarchical-icon.svg" alt="" />
            </div>
            <div>
              <img
                src="/assets/icons/hierarchical-icon.svg"
                alt=""
                onClick={() => setViewType("table")}
              />
            </div>
            <div>
              <img
                src="/assets/icons/hierarchical-icon.svg"
                alt=""
                onClick={() => setViewType("grid")}
              />
            </div>
          </div>
        </div>
        {viewType === "table" ? (
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
              </tbody>
            </table>
          </div>
        ) : (
          <div className="NftMarketPlaceCard-Grid">
            <div className="nft-detail-card">
              <div
                style={{
                  backgroundImage: "url(/assets/images/image_164.webp)",
                }}
              ></div>
              <div className="nft-detail-card-content">
                <div>
                  <span>Robbies Earn</span>
                  <span>0.124 ETH</span>
                </div>
                <button>#1234</button>
              </div>
            </div>
            <div className="nft-detail-card">
              <div
                style={{
                  backgroundImage: "url(/assets/images/image_164.webp)",
                }}
              ></div>
              <div className="nft-detail-card-content">
                <div>
                  <span>Robbies Earn</span>
                  <span>0.124 ETH</span>
                </div>
                <button>#1234</button>
              </div>
            </div>
            <div className="nft-detail-card">
              <div
                style={{
                  backgroundImage: "url(/assets/images/image_164.webp)",
                }}
              ></div>
              <div className="nft-detail-card-content">
                <div>
                  <span>Robbies Earn</span>
                  <span>0.124 ETH</span>
                </div>
                <button>#1234</button>
              </div>
            </div>
            <div className="nft-detail-card">
              <div
                style={{
                  backgroundImage: "url(/assets/images/image_164.webp)",
                }}
              ></div>
              <div className="nft-detail-card-content">
                <div>
                  <span>Robbies Earn</span>
                  <span>0.124 ETH</span>
                </div>
                <button>#1234</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
