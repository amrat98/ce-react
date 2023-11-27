import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header-bg">
        <div className="container">
          <div>
            <div className="Header1-Main-Container">
              <div className="logo-container">
                <img src="/assets/icons/logo.svg" alt="logo" />
                <span>NORDEK</span>
              </div>
              <div className="Header-Nav-Container">
                <nav>
                  <ul>
                    <li>
                      <Link to={"/"}>Buy Crypto</Link>
                    </li>
                    <li>
                      <Link to={"/market"}>Market</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Trade</Link>
                    </li>
                    <li>
                      <Link to={"/"}>NFT</Link>
                    </li>
                    <li>
                      <Link to={"/p2p"}>P2P</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-btn">
                <button>
                  <Link to={"/login"} style={{ color: "#fff" }}>
                    Login
                  </Link>
                </button>
                <button>
                  <Link to={"/create-account"} style={{ color: "#fff" }}>
                    Sign Up
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
