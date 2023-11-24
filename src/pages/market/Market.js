import { MarketCards } from "../../components/cards/MarketCards";
import { DynamicTable } from "../../components/table/DynamicTable";
import { SearchBar } from "../../components/searchbar/SearchBar";
import "./Index.css";
import { useState } from "react";
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
    <div className="container" style={{background: "#060203"}}>
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
              <li key={Index} onClick={() => setActiveNav(Index)} className={Index === activeNav ? "active-market-nav" : "inactive-market-nav"}>
                {data}
              </li>
            ))}
          </ul>
          <SearchBar/>
        </div>
      </div>
      <div>
        <DynamicTable />
      </div>
    </div>
  );
};
