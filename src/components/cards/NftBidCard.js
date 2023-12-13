import "./Index.css";
export const BidCard = () => {
  return (
    <>
      <div className="Bid-Card-Container">
        <div
          className="Bid-Card-Image-Box"
          style={{ backgroundImage: "url(/assets/images/image_1.webp)" }}
        >
            <div className="Bid-Circle-Image-Box">
                <img src="/assets/images/Profile.png" alt=""/>
            </div>
        </div>
        <div className="Bid-Card-Content">
          <h3>ArtCrypto</h3>
          <div className="Bid-Card-Text">
            <span>0.25 ETH</span>
            <span>1 of 321</span>
          </div>
          <hr/>
          <div className="Bid-Card-Text-2">
            <span>3h 50m 2s left</span>
            <span>Place a bid</span>
          </div>
        </div>
      </div>
    </>
  );
};
