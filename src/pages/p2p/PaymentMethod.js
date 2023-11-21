import { DropDown } from "../../components/dropdown/DropDown";
import { Button } from "../../components/button/Button";
import "./index.css";
const option = [
  { value: "Bank Transfer", bool: true },
  { value: "IMPS", bool: true },
];
export const PaymentMethod = () => {
  return (
    <div className="PaymentMethod-Container">
      <h3>P2P Payment Methods</h3>
      <p>
        P2P payment methods: when you sell cryptocurrencies, the payment method
        added will be displayed to buyer as options to accept payment, please
        ensure that the account owner's name is consistent with your verified
        name on Fierex. You can add up to 20 payment methods.
      </p>
      <div className="Payment-Method-DrpDwn-Container">
        <DropDown option={option} title={'Payment Method'}/>
        <Button ClASSS={"blue"} style={{marginTop: "35px"}}>+ Add payment method</Button>
      </div>
    </div>
  );
};
