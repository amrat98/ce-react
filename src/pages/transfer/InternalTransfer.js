import { Input } from "../../components/input/Input";
import { DropDown } from "../../components/dropdown/DropDown";
import { Button } from "../../components/button/Button";
import "./InternalTransfer.css";
const option = [
  { value: "option1", bool: true },
  { value: "option2", bool: true },
  { value: "option3", bool: true },
  { value: "option4", bool: true },
];
export const InternalTransfer = () => {
  return (
    <div className="Transfer-Main-Container">
      <div className="Internal-Transfer-Container">
        <h1>Internal Transfer</h1>
        <Input label={"UID"} placeholder={"Enter UID"} name={"UID"} />
        <DropDown option={option} title={"Coin Name"} />
        <Input label={"Amount"} placeholder={"Enter Amount"} name={"Amount"} />
        <div className="Internal-Transfer-Btn-Container">
          <Button ClASSS={'black'}>Cancel</Button>
          <Button ClASSS={'blue'}>Transfer Now</Button>
        </div>
      </div>
    </div>
  );
};
