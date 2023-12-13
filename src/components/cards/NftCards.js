import "./NftCards.css";

export const NftMarketPlaceCard = () => {
  return (
    <div className="Nft-MarketPlace-Card">
      <div
        className="Nft-MarketPlace-Image-Container"
        style={{ background: "url(/assets/images/auctions.webp)" }}
      >
        <div className="timer-box"></div>
        <div className="heart-box"></div>
        <div className="Nft-MarketPlace-User-Detail">
          <div className="Nft-MarketPlace-User-Image">
            <img src="/assets/images/Profile.png" alt="" />
          </div>
          <h2>Robbies Earn</h2>
          <p>67168 Items</p>
          <h4>
            $12132.08 <span>+63%</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
