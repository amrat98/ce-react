import { useState } from "react";
export const CopyInput = ({ label, placeholder, name }) => {
  const [copiedData, setCopiedData] = useState("");
  const handleChange = (value) => {
    setCopiedData(value);
  };
  const handleCopyClick = () => {
    if (copiedData.trim() === "") {
      return;
    }
    navigator.clipboard
      .writeText(copiedData)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
      });
  };
  return (
    <div className="Input-Box">
      <label>{label}</label>
      <div className="InputBoxWithIcons-Container">
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          value={copiedData}
          onChange={(e) => handleChange(e.target.value)}
        />
        <img
          src={"/assets/icons/copy.svg"}
          alt="copy"
          onClick={handleCopyClick}
        />
      </div>
    </div>
  );
};

export const PasswordInput = ({ label, placeholder, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(null);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (value) => {
    setPassword(value);
  };
  return (
    <div className="Input-Box">
      <label>{label}</label>
      <div className="InputBoxWithIcons-Container">
        <input
          placeholder={placeholder}
          name={name}
          value={password}
          onChange={(e) => handleChange(e.target.value)}
        />
        <img
          src={showPassword ? "" : "/assets/icons/password-hide.svg"}
          alt="icons"
          onClick={handleTogglePassword}
        />
      </div>
    </div>
  );
};




