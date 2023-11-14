import { Link } from "react-router-dom";
import { FOOTER_NAVIGATION } from "../../constants/footer";
import "./footer.css";
const SOCIAL_HANDLE = [
  {
    label: "/assets/icons/discord.svg",
    url: "",
  },
  {
    label: "/assets/icons/telegram.svg",
    url: "",
  },
  {
    label: "/assets/icons/facebook.svg",
    url: "",
  },
  {
    label: "/assets/icons/facebook.svg",
    url: "",
  },
  {
    label: "/assets/icons/Youtube.svg",
    url: "",
  },
  {
    label: "/assets/icons/instagram.svg",
    url: "",
  },
];
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-container">
            <div>
              <div>
                <img src="/assets/icons/logo.svg" alt="nordek" />
                <span>NORDEK</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget sagittis turpis
                porta facilisi suspendisse a dolor. Sem interdum amet
                suspendisse hendrerit vitae.Lorem ipsum dolor sit amet
                consectetur.
              </p>
              <ul className="flex-row">
                {SOCIAL_HANDLE.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link className="circle">
                        <img src={item.label} alt="" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <nav>
              <ul className="flex-column">
                <h3>About eternalus</h3>
                {FOOTER_NAVIGATION[0].about.map((item, ind) => {
                  return (
                    <li>
                      <Link to={item.url} key={ind}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                <h3>Product</h3>
                {FOOTER_NAVIGATION[1].product.map((item, ind) => {
                  return (
                    <li>
                      <Link to={item.url} key={ind}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                <li>Buy Crypto</li>
                {FOOTER_NAVIGATION[2].crypto.map((item, ind) => {
                  return (
                    <li>
                      <Link to={item.url} key={ind}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};
