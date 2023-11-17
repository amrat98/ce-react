import { Button } from "../../../components/button/Button";
import { Input } from "../../../components/input/Input";
import "./Accounts.css";
export const Account = () => {
  return (
    <div className="Account-Container">
      <div className="Account-Left-Box">
        <Button
          ClASSS={"blue"}
          style={{ maxWidth: "143px", minHeight: "50px" , margin: "0 auto"}}
        >
          Add Bank
        </Button>
        <div className="Bank-Container">
          <img src="/assets/icons/Bank.svg" alt="Bank" />
          <p>No bank accounts added</p>
        </div>
      </div>
      <div className="Account-Right-Box">
        <h1>Add New Account</h1>
        <Input
          label={"Account Number :"}
          placeholder={"Enter Account number"}
          name={"AccountNumber"}
        />
        <Input
          label={"Re - Enter Account Number :"}
          placeholder={"Re-Enter Account number"}
          name={"AccountNumber"}
        />
        <Input
          label={"IFSC Code"}
          placeholder={"Enter IFSC code"}
          name={"IFSC"}
        />
        <Input
          label={"Account Nickname :"}
          placeholder={"Enter account nickname"}
          name={"AccountNickName"}
        />
        <p>
          Add a personal bank account. Third-party accounts will be rejected.
          For enabling netbanking add a supported bank account.
        </p>
        <Button ClASSS={"blue"} style={{ maxWidth: "146.571px" }}>
          Add Account
        </Button>
      </div>
    </div>
  );
};
