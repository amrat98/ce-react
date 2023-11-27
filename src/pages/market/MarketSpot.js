import { useState } from "react";
import { DynamicTable } from "../../components/table/DynamicTable";

const TableNavHead = ["BUSD", "USDT", "BNB", "BTC", "INR"];
export const MarketSpot = () => {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <>
      <div>
        <div className="Market-Nav-Container">
          <div className="Market-Nav Market-Nav-2">
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
          </div>
        </div>
        <DynamicTable />
      </div>
    </>
  );
};
