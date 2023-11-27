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
              <div className="footer-logo-container">
                <img src="/assets/icons/logo.svg" alt="nordek" />
                <span>NORDEK</span>
              </div>
              <p className="footer-para">
                Lorem ipsum dolor sit amet consectetur. Eget sagittis turpis
                porta facilisi suspendisse a dolor. Sem interdum amet
                suspendisse hendrerit vitae.Lorem ipsum dolor sit amet
                consectetur.
              </p>
              <ul className="flex-row footer-icon-container">
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
              <ul className="flex-column footer-ul-gap">
                <h3>Features</h3>
                {FOOTER_NAVIGATION[0].feature.map((item, ind) => {
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
            <nav>
              <ul className="flex-column footer-ul-gap">
                <h3>About</h3>
                {FOOTER_NAVIGATION[1].about.map((item, ind) => {
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
