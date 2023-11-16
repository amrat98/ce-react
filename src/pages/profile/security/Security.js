import { Chip } from "./SecurityChip";
import { Button } from "../../../components/button/Button";
import { Input } from "../../../components/input/Input";
export const Security = () => {
  const style = {
    minWidth: "197px",
  };
  return (
    <div className="Security-Container">
      <Chip icon={"Google-Auth"}>
        <div>
          <p>
            SMS Auth : <span>Disable</span>
          </p>
          <Button ClASSS={"green"} style={style}>
            Enter Google Auth
          </Button>
        </div>
      </Chip>
      <Chip icon={"mob-auth-otp"}>
        <div>
          <p>
            SMS Auth : <span>Disable</span>
          </p>
          <Button ClASSS={"green"} style={style}>
            Enter Google Auth
          </Button>
        </div>
      </Chip>
      <Chip icon={"mob-auth-otp"}>
        <div>
          <p>
            SMS Auth : <span>Disable</span>
          </p>
          <Button ClASSS={"green"} style={style}>
            Enter Google Auth
          </Button>
        </div>
      </Chip>
      <Chip icon={"Anti-Phising"}>
        <div>
          <p>Current Code :</p>
          <Button ClASSS={"black"} style={style}>
            Disable
          </Button>
        </div>
        <div>
          <p>
            SMS Auth : <span>Disable</span>
          </p>
          <Button ClASSS={"green"} style={style}>
            Enter Google Auth
          </Button>
        </div>
      </Chip>
      <Input
        label={"Anti-Phishing Code :"}
        placeholder={"Fierex"}
        name={"Fierex"}
      />
      <div className="Btm-Container">
        <h3 className="auth-head">Account Activity</h3>
        <Button ClASSS={"blue"} style={{ maxWidth: "197px" }}>
          More
        </Button>
      </div>
      <div className="btn-container">
        <Button ClASSS={"blue"} style={{ maxWidth: "200.159px" }}>
          CHANGE PASSWORD
        </Button>
        <Button ClASSS={"black"} style={{ maxWidth: "200.159px" }}>
          Deactivate Account
        </Button>
      </div>
    </div>
  );
};
