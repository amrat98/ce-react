import "./Index.css";
export const AuctionCard = () => {
  return (
    <div className="Auction-Card-Container">
      <div
        className="Auction-Card-Image"
        style={{ backgroundImage: "url(/assets/images/image_1.webp)" }}
      >
        <div className="Cylndrical-Box">
            <img src="" alt=""/>
        </div>
      </div>
      <div className="Auction-Card-Content">
        <h3>Intergalatic Robi</h3>
        <h3>12132.08 BTC</h3>
        <p>
          <span>Ends in:</span>
          <span>1d 12:25:03</span>
        </p>
      </div>
    </div>
  );
};
