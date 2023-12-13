import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { NftMarketPlaceCard } from "../../components/cards/NftCards";
import { BidCard } from "../../components/cards/NftBidCard";
import { AuctionCard } from "../../components/cards/AuctionCard";
import "./Nft.css";
import { useState } from "react";
const discoverButton = ['All Categories' , 'Art' , 'Celebrities' , 'Gaming' , 'Sport' , 'Music' , 'Crypto']  
export const Nft = () => {
  const [activeBtn , setActiveBtn] = useState(0)
  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: "89px" }}>
        <div className="Nft-Parent-Container" style={{ background: "#000" }}>
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
          <div className="NftMarketPlace-Table-Container">
            <div>
              <div></div>
              <div></div>
            </div>
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
          <div>
            <div className="NftMarketPlaceCard-Grid">
              <NftMarketPlaceCard />
              <NftMarketPlaceCard />
              <NftMarketPlaceCard />
              <NftMarketPlaceCard />
            </div>
          </div>
          <div>
            <h1 className="Nft-Heading">Discover more NFTs</h1>
            <div className="NftMarketPlaceCard-Filter-Container">
              <div>
                {
                  discoverButton?.map((data , index) => <button key={index} className={`${index === activeBtn ? 'nft-btn nft-active-btn' : 'nft-btn'}`} onClick={() => setActiveBtn(index)}>{data}</button>)
               }
              </div>
              <div>
                <img src="" alt=""/>
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
          <div>
            <div className="NftMarketPlaceCard-Grid">
              <AuctionCard />
              <AuctionCard />
              <AuctionCard />
              <AuctionCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
