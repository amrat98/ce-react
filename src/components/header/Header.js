import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";
export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen)
  return (
    <>
      <header className="header-bg">
        <div>
          <div className="Header1-Main-Container">
            <div className="logo-container">
              <img src="/assets/icons/logo.svg" alt="logo" />
              <span>NORDEK</span>
            </div>
            <div className={isMenuOpen ?  "Header-Nav-Container display-Block" : "Header-Nav-Container display-None"}>
              <nav>
                <ul>
                  <li>
                    <Link to={"/exchange"}>Buy Crypto</Link>
                  </li>
                  <li>
                    <Link to={"/market"}>Market</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Trade</Link>
                  </li>
                  <li>
                    <Link to={"/nft"}>NFT</Link>
                  </li>
                  <li>
                    <Link to={"/p2p"}>P2P</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-btn">
              <button className="auth-btns">
                <Link to={"/login"} style={{ color: "#fff" }}>
                  Login
                </Link>
              </button>
              <button className="auth-btns">
                <Link to={"/create-account"} style={{ color: "#fff" }}>
                  Sign Up
                </Link>
              </button>
              <div className="Hamburger-Box">
                <div
                  className={`menu-button ${isMenuOpen ? "open" : ""}`}
                  onClick={handleToggleMenu}
                >
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
