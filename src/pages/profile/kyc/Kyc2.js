import { useState } from "react";
import { KycForm } from "./KycForm";
import { UploadDocumet } from "./UploadDocument";
import "./Kyc.css";
const options = [
  {
    label: "User Information",
    bool: true,
    blueImg: "/assets/images/pantagon-blue.svg",
    transparentImg: "/assets/images/pentagon-transparent.svg",
  },
  {
    label: "Upload Document",
    bool: false,
    blueImg: "/assets/images/concave-blue.svg",
    transparentImg: "/assets/images/concave.svg",
  },
  {
    label: "Confirm Your Details",
    bool: false,
    blueImg: "/assets/images/concave-blue.svg",
    transparentImg: "/assets/images/concave.svg",
  },
];

export const KYC2 = () => {
  const [option, setOption] = useState(options);
  const [step, setStep] = useState(1);
  const handleClick = (ind) => {
    setOption((prevOption) =>
      prevOption.map((item, index) =>
        index === ind
          ? { ...item, bool: ind === index }
          : { ...item, bool: ind === index }
      )
    );
  };
  return (
    <div className="Kyc-Container">
      <nav>
        <ul className="Kyc-Nav-List">
          {option.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleClick(index);
                  setStep(index + 1);
                }}
              >
                <img
                  src={item.bool ? item.blueImg : item.transparentImg}
                  alt=""
                />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>
      {step === 1 && <KycForm />}
      {step === 2 && <UploadDocumet />}
      {step === 3 && (
        <>
          <KycForm />
          <UploadDocumet />
        </>
      )}
    </div>
  );
};
