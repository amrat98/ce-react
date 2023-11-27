import { useState } from "react";
import { MarketCards } from "../../components/cards/MarketCards";
import { DynamicTable } from "../../components/table/DynamicTable";
import { SearchBar } from "../../components/searchbar/SearchBar";
import { MarketAll } from "./MarketAll";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { MarketSpot } from "./MarketSpot";
import { MarketZone } from "./MarketZone";
import "./Index.css";
const TableNavHead = [
  "Favorites",
  "All Crypto",
  "Spot",
  "Zones",
  "Increase",
  "Decrease",
  "New Listing",
];
export const Market = () => {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <>
      <Header />
      <div className="Market_Parent_Container">
        <div className="container">
          <div className="Market-Card-Top-Container">
            <MarketCards />
            <MarketCards />
            <MarketCards />
            <MarketCards />
          </div>
          <div className="Market-Nav-Container">
            <div className="Market-Nav">
              <ul>
                {TableNavHead?.map((data, Index) => (
                  <li
                    key={Index}
                    onClick={() => setActiveNav(Index)}
                    className={
                      Index === activeNav
                        ? "active-market-nav"
                        : "inactive-market-nav"
                    }
                  >
                    {data}
                  </li>
                ))}
              </ul>
              <SearchBar />
            </div>
          </div>
          <div>
            {activeNav === 0 && <DynamicTable />}
            {activeNav === 1 && <MarketAll />}
            {activeNav === 2 && <MarketSpot />}
            {activeNav === 3 && <MarketZone />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
