import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
export const BankTransfer = () => {
  return (
    <div className="BankTransfer-Container">
      <h1>Bank Transfer</h1>
      <div className="BankTransfer-Form-Container">
        <div className="BankTransfer-Form-Left">
          <Input
            name={"name"}
            label={"Account holder name :"}
            placeholder={"Enter account holder name"}
          />
          <Input
            name={"name"}
            label={"IFSC/BIC/SWIFT code :"}
            placeholder={"Enter your IFSC/BIC/SWIFT code"}
          />
          <Input
            name={"bankName"}
            label={"Bank name :"}
            placeholder={"Enter the name of your bank"}
          />
        </div>
        <div className="BankTransfer-Form-Left">
          <Input
            name={"accountNo"}
            label={"Account no./IBAN :"}
            placeholder={"Enter your bank account number/IBAN"}
          />
          <Input
            name={"accountType"}
            label={"Account Type :"}
            placeholder={"Please specify the account type (saving or current)"}
          />
          <Input
            name={"AccountBranch"}
            label={"Account opening branch :"}
            placeholder={"Enter bank branch information"}
          />
        </div>
      </div>
      <div className="BankTransfer-btn-Container">
       <Button ClASSS={'black'} style={{maxWidth: "214.659px" , maxheight: "48.425px"}}>Cancel</Button>
       <Button ClASSS={'blue'} style={{maxWidth: "214.659px" , maxheight: "48.425px"}}>Confirm</Button>  
      </div>
    </div>
  );
};
