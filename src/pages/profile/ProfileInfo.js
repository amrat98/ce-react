import { useState } from "react";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import "./Profile.css";
export const ProfileInfo = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    document.getElementById("fileInput").click();
  };
  const style = {
    maxWidth: "183.993px",
  };
  return (
    <>
      <div className="Profile-Info-Container">
        <div>
          <div className="Profile-Pic-Box">
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <img
              src={profilePic ? profilePic : "/assets/images/Profile.png"}
              alt="Profile Preview"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
            <img
              src="/assets/icons/Camera.svg"
              alt="Camera"
              className="CameraImg"
              onClick={handleCameraClick}
            />
          </div>
        </div>
        <div className="Profile-Common-Form-Container">
          <h3 className="Profile-form-title">Basic details</h3>
          <div className="form-box">
            <div className="Profile-Left-Box">
              <Input
                label={"First Name :"}
                name={"FirstName"}
                placeholder={"Enter first name"}
              />
              <Input
                label={"Mobile Number :"}
                name={"MobileNumber"}
                placeholder={"Enter Mobile Number"}
              />
            </div>
            <div className="Profile-Right-Box">
              <Input
                label={"Last Name :"}
                name={"LastName"}
                placeholder={"Enter last name"}
              />
              <Input
                label={"Country :"}
                name={"CountryName"}
                placeholder={"Enter Country Name"}
              />
            </div>
          </div>
          <Input
            label={"Address :"}
            name={"FullAddress"}
            placeholder={"Full address"}
          />
          <div className="form-box">
            <div className="Profile-Left-Box">
              <Input
                label={"Unique ID :"}
                name={"UniqueId"}
                placeholder={"Unique id"}
              />
            </div>
            <div className="Profile-Right-Box">
              <Input label={"DOB :"} name={"DOB"} placeholder={"Select date"} />
            </div>
          </div>
          <div className="Profile-Button-Container">
            <Button ClASSS={"black"} style={style}>
              Verify your account
            </Button>
            <Button ClASSS={"blue"} style={style}>
              Save
            </Button>
            <Button ClASSS={"black"} style={style}>
              Skip
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
