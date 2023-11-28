import { Footer } from "../../components/footer/Footer";
import { CryptoStatsTable } from "../../components/table/CryptoTable";
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./home.css";

export const HomePage = () => {
  const data = [
    {
      name: "BTC",
      price: "$56,623.54",
      change: "1.41%",
      marketStats: "/assets/icons/chart-state.svg",
      action: "trade",
    },
    {
      name: "BTC",
      price: "$56,623.54",
      change: "1.41%",
      marketStats: "/assets/icons/chart-state.svg",
      action: "trade",
    },
    {
      name: "BTC",
      price: "$56,623.54",
      change: "1.41%",
      marketStats: "/assets/icons/chart-state.svg",
      action: "trade",
    },
    {
      name: "BTC",
      price: "$56,623.54",
      change: "1.41%",
      marketStats: "/assets/icons/chart-state.svg",
      action: "trade",
    },
    {
      name: "BTC",
      price: "$56,623.54",
      change: "1.41%",
      marketStats: "/assets/icons/chart-state.svg",
      action: "trade",
    },
    {
      name: "BTC",
      price: "$56,623.54",
      change: "1.41%",
      marketStats: "/assets/icons/chart-state.svg",
      action: "trade",
    },
  ];
  return (
    <>
      <Header />
      <div className="home-bg-background">
        <section>
          <div className="hero-section">
            <div className="container">
              <div className="hero-sectoion-container">
                <div>
                  <h1 className="heading">
                    Trade Crypto Only On
                    <br /> <span className="linear-gradient">NORDEK</span>
                  </h1>
                  <p>
                    Sign up and trade to ear up to{" "}
                    <span className="linear-gradient">241 USDT</span>
                  </p>
                  <button>
                    <Link to={"/create-account"} style={{ color: "#fff" }}>
                      Sign Up
                    </Link>
                  </button>
                </div>
                <img src="/assets/images/Tordek.webp" alt="TORDEk" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <CryptoStatsTable data={data} />
        </section>
        <section>
          <div className="Count-Container">
            <div className="container">
              <div className="Count-Main-Container">
                <div>
                  <span className="linear-gradient">45+</span>
                  <p>
                    Millions of users top <br />
                    choice
                  </p>
                </div>
                <div>
                  <span className="linear-gradient">$6,56,74,939</span>
                  <p>24h trading valume</p>
                </div>
                <div>
                  <span className="linear-gradient">700+</span>
                  <p>Prim Virtual Assets</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Core-Product-Container cmn-padding">
            <div className="Core-Product-Head">
              <h1 className="heading">Our Core Products</h1>
              <p>A wide variety of trading tools to choose from</p>
            </div>
            <div className="container">
              <div className="Core-Product-Main-Container">
                <div className="Core-Product-Left-Box">
                  <div className="Core-Product-Key-Points">
                    <img src="/assets/icons/hand.svg" alt="" />
                    <div>
                      <h3>Spot</h3>
                      <p>Over 700 cryptos available for trading</p>
                    </div>
                  </div>
                  <div className="Core-Product-Key-Points">
                    <img src="/assets/icons/target.svg" alt="" />
                    <div>
                      <h3>Spot</h3>
                      <p>Over 700 cryptos available for trading</p>
                    </div>
                  </div>
                  <div className="Core-Product-Key-Points">
                    <img src="/assets/icons/wheel.svg" alt="" />
                    <div>
                      <h3>Spot</h3>
                      <p>Over 700 cryptos available for trading</p>
                    </div>
                  </div>
                </div>
                <div className="Core-Product-Right-Box">
                  <img src="/assets/images/Product-img.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Core-Product-Container cmn-padding">
            <div className="Core-Product-Head">
              <h1 className="heading">Our Diversified</h1>
              <p>Explore unlimited possibilities with our diverse services</p>
            </div>
            <div className="container">
              <div className="Core-Product-Main-Container">
                <div className="Core-Product-Left-Box">
                  <div className="Core-Product-Key-Points">
                    <img src="/assets/icons/hand.svg" alt="" />
                    <div>
                      <h3>Spot</h3>
                      <p>Over 700 cryptos available for trading</p>
                    </div>
                  </div>
                  <div className="Core-Product-Key-Points">
                    <img src="/assets/icons/target.svg" alt="" />
                    <div>
                      <h3>Spot</h3>
                      <p>Over 700 cryptos available for trading</p>
                    </div>
                  </div>
                  <div className="Core-Product-Key-Points">
                    <img src="/assets/icons/wheel.svg" alt="" />
                    <div>
                      <h3>Spot</h3>
                      <p>Over 700 cryptos available for trading</p>
                    </div>
                  </div>
                </div>
                <div className="Core-Product-Right-Box">
                  <img src="/assets/images/App-Mob-View.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="trade-anytime-anywhere-container">
            <div className="container">
              <div className="trade-anytime-anywhere-main-container">
                <div>
                  <h1 className="heading">Trade anytime, anywhere</h1>
                  <p>
                    Try <span className="linear-gradient">NORDEK</span> with
                    your IOS, Androids and API
                  </p>
                </div>
                <div className="application-btn-container">
                  <button>
                    <img src="/assets/icons/GooglePlay.svg" alt="Google Play" />{" "}
                    <span>Google Pay</span>
                  </button>
                  <button>
                    <img src="/assets/icons/apple.svg" alt="apple" />{" "}
                    <span>App Store</span>
                  </button>
                  <button>
                    <img src="/assets/icons/shot.svg" alt="shot" />
                  </button>
                  <button>API</button>
                </div>
                <img
                  src="/assets/images/responsive.webp"
                  alt="responsve-screen"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="homepage-cards-container cmn-padding">
            <div className="homepage-cards-main-container">
              <img src="/assets/images/cards.webp" alt="img" />
              <img src="/assets/images/cards.webp" alt="img" />
              <img src="/assets/images/cards.webp" alt="img" />
            </div>
          </div>
        </section>*/}
        <Footer />
      </div>
    </>
  );
};
