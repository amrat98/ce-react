import { Button } from "../../components/button/Button";
import { DropDown } from "../../components/dropdown/DropDown";
import { Input } from "../../components/input/Input";
import { CopyInput } from "../../components/input/InputBoxWithIcons";
const CurrencyName = [
  { value: "Afghani", bool: true },
  { value: "Denar", bool: true },
  { value: "Rial", bool: true },
];
export const PostAdd = () => {
  return (
    <div className="PostAdd-Container">
      <h3 className="PostAdd-head">Create trade advertisement</h3>
      <h4 className="PostAdd-Sub-Head">Advertisement rules and requirements</h4>
      <p>I want to...</p>
      <div className="PostAdd-top-container">
        <div>
          <Button ClASSS={"black"}>Buy</Button>
          <Button ClASSS={"blue"}>Sell</Button>
        </div>
        <div>
          <DropDown option={CurrencyName} title={"Country"} />
        </div>
        <div className="PostAdd-radio-btn">
          <label>
            <input type="radio" name="gender" value="male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" /> Female
          </label>
        </div>
      </div>
      <div className="PostAdd-More-Info">
        <div className="PostAdd-More-Info-Drp-Dwn">
          <DropDown title={"Assets"} />
          <DropDown title={"With Cash"} option={CurrencyName} />
          <Input
            label={"Total Amount"}
            placeholder={"Enter Amount"}
            name={"Amount"}
          />
          <Input label={"Fixed"} placeholder={"0"} name={"Fixed"} />
          <Input
            label={"Min. order limit"}
            placeholder={"0"}
            name={"MinOrder"}
          />
        </div>
        <div className="PostAdd-More-Info-Drp-Dwn">
          <Input
            label={"Max. order limit"}
            placeholder={"0"}
            name={"maxOrder"}
          />
          <Input label={"Terms of trade"} placeholder={"0"} name={"Terms"} />
          <DropDown title={"Payment method"} />
          <DropDown title={"Set payment window"} />
          <Input
            label={"Price equation"}
            placeholder={"Price Equation"}
            name={"PriceEquation"}
          />
        </div>
        <div className="Security-Option-Container">
          <h4 className="PostAdd-Sub-Head">Security Options</h4>
          <div className="PostAdd-Security-Input">
            <input type="checkbox" id="Option1" name="Option1" />
            <label for="Option1">Identified people only</label>
          </div>
          <div className="PostAdd-Security-Input">
            <input type="checkbox" id="Option2" name="Option2" />
            <label for="vehicle1">SMS verification needed</label>
          </div>
        </div>
        <div className="Security-Option-Btn-Container">
          <Button ClASSS={"black"} style={{ maxWidth: "183.993px" }}>
            Back
          </Button>
          <Button ClASSS={"blue"} style={{ maxWidth: "183.993px" }}>
            Publish Ad
          </Button>
        </div>
      </div>
    </div>
  );
};
