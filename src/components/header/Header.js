import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header-bg cmn-padding">
        <div className="Header1-Container">
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
                      <Link to={"/"}>
                        Buy Crypto
                        <img src="/assets/icons/menu-down.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        Market
                        <img src="/assets/icons/menu-down.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        Trade
                        <img src="/assets/icons/menu-down.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        Derivatives
                        <img src="/assets/icons/menu-down.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        Earn
                        <img src="/assets/icons/menu-down.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        Finance
                        <img src="/assets/icons/menu-down.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        Content
                        <img src="/assets/icons/menu-down.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        Activity
                        <img src="/assets/icons/menu-down.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        Web 3.0
                        <img src="/assets/icons/menu-down.svg" alt="" />
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="header-btn">
                  <button><Link to={'/login'} style={{color: "#fff"}}>Login</Link></button>
                  <button><Link to={'/create-account'} style={{color: "#fff"}}>Sign Up</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
