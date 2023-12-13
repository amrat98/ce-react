import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { NftMarketPlaceCard } from "../../components/cards/NftCards";
import { BidCard } from "../../components/cards/NftBidCard";
import { AuctionCard } from "../../components/cards/AuctionCard";
import "./Nft.css";
import { useState } from "react";
const discoverButton = [
  "All Categories",
  "Art",
  "Celebrities",
  "Gaming",
  "Sport",
  "Music",
  "Crypto",
];

const collectionDrpDwn = ["7 days", "24 Hours", "1 Day", "7 Days"];
export const Nft = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectColl, setSelectColl] = useState(collectionDrpDwn[0]);
  const [openDrpDwn, setOpnDrpDwn] = useState(false);
  const [changeDrpDwn, setChangeDrpDwn] = useState(false);
  const [tapButton, setTapButton] = useState(1);
  return (
    <>
      <Header />
      <div style={{ paddingTop: "89px", background: "#000" }}>
        <div className="container">
          <div className="Nft-Parent-Container">
            <div>
              <h1 className="Nft-Heading">NFT Marketplace</h1>
              <div className="NftMarketPlaceCard-Grid">
                <NftMarketPlaceCard />
                <NftMarketPlaceCard />
                <NftMarketPlaceCard />
                <NftMarketPlaceCard />
              </div>
              <p className="View-More-Text">View More..</p>
            </div>
            <div>
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
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="hot-aution-head-container">
                <h1 className="Nft-Heading">
                  Top Collections in{" "}
                  <span className="Collections-head">
                    {selectColl}
                    {openDrpDwn && (
                      <div className="Nft-Collection-DrpDwn">
                        {collectionDrpDwn?.map((data, index) => (
                          <p
                            key={index}
                            onClick={() => {
                              setSelectColl(data);
                              setOpnDrpDwn(!openDrpDwn);
                            }}
                          >
                            {data}
                          </p>
                        ))}
                      </div>
                    )}
                  </span>{" "}
                  <img
                    src="/assets/icons/Blue-Down-Chevron.svg"
                    alt=""
                    onClick={() => setOpnDrpDwn(!openDrpDwn)}
                    style={
                      openDrpDwn
                        ? { transform: "rotate(180deg)" }
                        : { transform: "rotate(0deg)" }
                    }
                  />
                </h1>
                <button className="nft-btn">All</button>
              </div>
              <div className="NftMarketPlaceCard-Grid">
                <NftMarketPlaceCard />
                <NftMarketPlaceCard />
                <NftMarketPlaceCard />
                <NftMarketPlaceCard />
              </div>
            </div>
            <div>
              <div className="hot-aution-head-container">
                <h1 className="Nft-Heading">
                  <span className="hot-aution-head">Hot </span>Auctions
                </h1>
                <button className="nft-btn">All</button>
              </div>
              <div className="NftMarketPlaceCard-Grid">
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
              </div>
            </div>
            <div>
              <h1 className="Nft-Heading">Discover more NFTs</h1>
              <div className="NftMarketPlaceCard-Filter-Container">
                <div>
                  {discoverButton?.map((data, index) => (
                    <button
                      key={index}
                      className={`${
                        index === activeBtn
                          ? "nft-btn nft-active-btn"
                          : "nft-btn"
                      }`}
                      onClick={() => setActiveBtn(index)}
                    >
                      {data}
                    </button>
                  ))}
                </div>
                <div>
                  <img src="/assets/icons/hierarchical-icon.svg" alt="" />
                  <span>All Filters</span>
                </div>
              </div>
              <div className="NftMarketPlaceCard-Grid">
                <BidCard />
                <BidCard />
                <BidCard />
                <BidCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
