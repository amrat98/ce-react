import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const Phone = () => {
  const [state, setState] = useState({ phone: "" });
  return (
    <PhoneInput
      country={"in"}
      value={state.phone}
      onChange={(phone) => setState({ phone })}
      placeholder="Enter your number"
    />
  );
};
