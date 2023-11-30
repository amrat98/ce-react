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
import { LoginHistory } from "./login-history/LoginHistory";
import { InternalTransferHistory } from "./transfer-history/InternalTransferHistory";
import { Nominee } from "./nominee/Nominee";
import { Notification } from "./notification/Notification";
import { TransferHistory } from "./transfer-history/TransferHistory";
import { Button } from "../../components/button/Button";
import "./Profile.css";
const option = [
  { label: "Profile", bool: true },
  { label: "Security", bool: false },
  { label: "KYC", bool: false },
  { label: "KYC List", bool: false },
  { label: "Accounts", bool: false },
  { label: "Nominee", bool: false },
  { label: "Login History", bool: false },
  { label: "Message", bool: false },
  { label: "Notification", bool: false },
  { label: "Transfer History", bool: false },
  { label: "Internal Transfer History", bool: false },
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

  return (
    <>
      <div className="Profile-Main-Container" style={{ background: "#060203" }}>
        <Header />
        <div className="Profile-Padd-Container">
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
                  {title === "Notification" && (
                    <Button ClASSS={"black"} style={{ maxWidth: "184.286px" }}>
                      Clear Notification
                    </Button>
                  )}
                </ProfileTitle>
                <Template>
                  {title === "Profile" && <ProfileInfo />}
                  {title === "KYC" && <KYC2 />}
                  {title === "Security" && <Security />}
                  {title === "KYC List" && <Kyc />}
                  {title === "Accounts" && <Account />}
                  {title === "Nominee" && <Nominee />}
                  {title === "Login History" && <LoginHistory />}
                  {title === "Notification" && <Notification />}
                  {title === "Transfer History" && <TransferHistory />}
                </Template>
                {title === "Internal Transfer History" && (
                  <InternalTransferHistory />
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
