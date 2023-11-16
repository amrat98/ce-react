import { Input } from "../../../components/input/Input";
import { Button } from "../../../components/button/Button";
export const KycForm = () => {
  return (
    <>
      <div className="Kyc-Form-Container">
        <div className="Kyc-Form-Left-Box">
          <Input
            label={"First Name :"}
            placeholder={"Enter first name"}
            name={"FirstName"}
          />
          <Input
            label={"Mobile Number :"}
            placeholder={"Enter mobile number"}
            name={"MobileNumber"}
          />
          <Input label={"Gender :"} placeholder={"Male"} name={"Gender"} />
          <Input
            label={"City :"}
            placeholder={"Male"}
            name={"Enter country name"}
          />
        </div>
        <div className="Kyc-Form-Right-Box">
          <Input
            label={"Last Name :"}
            placeholder={"Enter last name"}
            name={"LastName"}
          />
          <Input
            label={"Enter Email :"}
            placeholder={"Enter email address"}
            name={"Email Address"}
          />
          <Input
            label={"Address :"}
            placeholder={"Enter your address"}
            name={"Address"}
          />
        </div>
      </div>
      <Button
        ClASSS={"blue"}
        style={{ margin: "0 auto", maxWidth: "183.993px", height: "50px" }}
      >
        Next
      </Button>
    </>
  );
};
