import { Template } from "../../../components/template/Template";
import { Table } from "../../../components/table/CommonTable";
import { ProfileTitle } from "../ProfileTitile";
import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
const TableHead = ["User ID", "Coin Type", "Status", "Amount", "Create At"];
export const LoginHistory = () => {
  return (
    <>
      <Header />
      <div className="Transfer-History-Parent">
        <div className="container">
          <Template>
            <ProfileTitle>
              <span>Login history </span>
            </ProfileTitle>
            <Table head={TableHead} />
          </Template>
        </div>
      </div>
      <Footer />
    </>
  );
};
