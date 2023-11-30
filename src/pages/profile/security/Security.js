import { Chip } from "./SecurityChip";
import { Button } from "../../../components/button/Button";
import { Input } from "../../../components/input/Input";
export const Security = () => {
  const style = {
    maxWidth: "197px",
    width: "100%"
  };
  return (
    <div className="Security-Container">
      <Chip icon={"Google-Auth"} title={"Google Authentication"}>
        <div>
          <p>
            Google Auth : <span>Disable</span>
          </p>
          <Button ClASSS={"green auth-btn"}>
            Enter Google Auth
          </Button>
        </div>
      </Chip>
      <Chip icon={"mob-auth-otp"} title={"SMS Authentication"}>
        <div>
          <p>
            SMS Auth : <span>Disable</span>
          </p>
          <Button ClASSS={"green auth-btn"} >
            Enter Google Auth
          </Button>
        </div>
      </Chip>
      <Chip icon={"mob-auth-otp"} title={"Email Authentication"}>
        <div>
          <p>
            Email Auth : <span>Disable</span>
          </p>
          <Button ClASSS={"green auth-btn"}>
            Enter Google Auth
          </Button>
        </div>
      </Chip>
      <div className="Chip-Container">
        <div className="Left-Box">
          <img src={`/assets/icons/Anti-Phising.svg`} alt={"Anti-Phising"} />
          <div>
            <h3 className="auth-head">Anti-Phishing Code</h3>
            <p>Used for withdraw & security modification</p>
            <div className="Anti-Phishing-Input-Container">
              <Input
                label={"Anti-Phishing Code :"}
                placeholder={"Fierex"}
                name={"Fierex"}
              />
            </div>
          </div>
        </div>
        <div className="Right-Box">
          <div>
            <p>Current Code :</p>
            <Button ClASSS={"black"} style={style}>
              Disable
            </Button>
          </div>
          <div>
            <p>
              Email Auth : <span>Disable</span>
            </p>
            <Button ClASSS={"green auth-btn"} >
              Enter Google Auth
            </Button>
          </div>
        </div>
      </div>
      <div className="Btm-Container">
        <h3 className="auth-head">Account Activity</h3>
        <Button ClASSS={"blue auth-btn"}>
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
