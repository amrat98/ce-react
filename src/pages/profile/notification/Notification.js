import { Template } from "../../../components/template/Template";
import { ProfileTitle } from "../ProfileTitile";
import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
import { Button } from "../../../components/button/Button";
import { NoData } from "../../../components/nodata/NoData";

export const Notification = () => {
  return (
    <>
      <Header />
      <div className="Transfer-History-Parent">
        <div className="container">
          <Template>
            <ProfileTitle>
              <span>Login history </span>
              <Button ClASSS={"black"} style={{maxWidth: "184.286px"}}>Clear Notification</Button>
            </ProfileTitle>
            <NoData label={"No record Found!"} />
          </Template>
        </div>
      </div>
      <Footer />
    </>
  );
};
