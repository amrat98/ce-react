import { useState } from "react";

export const UserProfile = () => {
  const [viewType, setViewType] = useState("table");
  return (
    <div style={{ background: "#000" }}>
      <div className="container">
        <div style={{ height: "382px" }}>
          <div
            className="Nft-MarketPlace-Image-Container"
            style={{ background: "url(/assets/images/image_164.webp)" }}
          >
            <div className="Nft-User-Profile-Circle">
              <img src="/assets/images/Profile.png" alt="" />
            </div>
          </div>
        </div>
        <div className="join-detail-container">
          <p>Joined February 2022</p>
          <p>Noble: Season One Artwork approved by Grifter Six Labs.</p>
        </div>
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
              <img src="/assets/icons/Blue-Down-Chevron.svg" alt="" />
            </div>
            <div style={{ gap: "20px" }}>
              <span>Best Offers</span>
              <img src="/assets/icons/Blue-Down-Chevron.svg" alt="" />
            </div>
            <div style={{ gap: "20px" }}>
              <span>Best Offers</span>
              <img src="/assets/icons/Blue-Down-Chevron.svg" alt="" />
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
        <div className="Nft-UserProfile-Container">
          <div>
            <div className="Left-Collection-Conrtainer">
              <h3>Collections</h3>
              <div className="nft-search-bar">
                <img src="/assets/icons/blue-search.svg" alt="" />
                <input placeholder="Search by name" />
              </div>
              <h3>
                <span>Collections</span>
                <span>Value</span>
              </h3>
              <div className="Left-Collection-Row">
                <div className="Left-Collection-Row-Left">
                  <div className="Left-Collection-Row-Left-First-Child">
                    <img src="/assets/images/dummy.webp" alt="" />
                  </div>
                  <div className="Left-Collection-Row-Left-First-Second-Child">
                    <h3>Player #2039</h3>
                    <p>Squid Game Players</p>
                  </div>
                </div>
                <div className="Left-Collection-Row-Right">
                  <h3>Player #2039</h3>
                  <p>Squid Game Players</p>
                </div>
              </div>
              <div className="Left-Collection-Row">
                <div className="Left-Collection-Row-Left">
                  <div className="Left-Collection-Row-Left-First-Child">
                    <img src="/assets/images/dummy.webp" alt="" />
                  </div>
                  <div className="Left-Collection-Row-Left-First-Second-Child">
                    <h3>Player #2039</h3>
                    <p>Squid Game Players</p>
                  </div>
                </div>
                <div className="Left-Collection-Row-Right">
                  <h3>Player #2039</h3>
                  <p>Squid Game Players</p>
                </div>
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
    </div>
  );
};
