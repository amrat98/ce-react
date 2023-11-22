import { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Template } from "../../components/template/Template";
import { ProfileTitle } from "./ProfileTitile";
import { KYC2 } from "./kyc/Kyc2";
import { ProfileInfo } from "./ProfileInfo";
import { Kyc } from "./kyc/Kyc";
import { Security } from "./security/Security";
import { Account } from "./accounts/Accounts";
import { Nominee } from "./nominee/Nominee";
import "./Profile.css";
const option = [
  { label: "Profile", bool: true },
  { label: "Security", bool: false },
  { label: "KYC", bool: false },
  { label: "KYC List", bool: false },
  { label: "Accounts", bool: false },
  { label: "Nominee", bool: false },
];
const style = {
  minWidth: "209px",
};
export const Profile = () => {
  const [selectedOption, setSelectedOption] = useState(option);
  const [title, setTitle] = useState("Profile");
  const handleClick = (index) => {
    setSelectedOption((prevOption) =>
      prevOption.map((item, ind) =>
        index === ind ? { ...item, bool: true } : { ...item, bool: false }
      )
    );
  };

  const handleTitle = (title) => {
    setTitle(title);
  };

  console.log(title);

  return (
    <>
      <div className="Profile-Main-Container" style={{ background: "#060203" }}>
        <Header />
        <div>
          <div className="container">
            <div className="Profile-Container">
              <Sidebar
                option={selectedOption}
                style={style}
                handle={handleClick}
                titleHandle={handleTitle}
              />
              <div style={{ width: "100%" }}>
                <ProfileTitle>
                  <span>{title}</span>
                </ProfileTitle>
                <Template>
                  {title === "Profile" && <ProfileInfo />}
                  {title === "KYC" && <KYC2 />}
                  {title === "Security" && <Security />}
                  {title === "KYC List" && <Kyc />}
                  {title === "Accounts" && <Account />}
                  {title === "Nominee" && <Nominee/>}
                </Template>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
