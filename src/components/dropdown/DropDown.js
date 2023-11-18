import { useState } from "react";
import "./DropDown.css";
export const DropDown = ({ option, title }) => {
  const [label, setLabel] = useState({ value: "Select Coin", bool: false });
  const [isOpen, setIsopen] = useState(false);
  console.log(label, "Label");
  return (
    <div className="Cmn-Dropdown-Container">
      <h3>{title}</h3>
      <div className="Cmn-Dropdown">
        <div
          className="Cmn-Dropdown-Placeholder-Container"
          onClick={() => setIsopen(!isOpen)}
          style={{ borderBottom: isOpen ? "1px solid #393D4A" : "none" }}
        >
          <span
            className={
              label.bool ? "Drodown-Select-Item" : "Drodown-UnSelect-Item"
            }
          >
            {label.value}
          </span>
          <img src="/assets/icons/nabla.svg" alt="nabla-symbol" />
        </div>
        {isOpen && (
          <ul className="Cmn-Dropdown-Items-Container">
            {option?.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setLabel(item);
                  setIsopen(!isOpen);
                }}
              >
                {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
