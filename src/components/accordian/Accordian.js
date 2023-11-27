import { useState } from "react";
import "./Accordian.css";
export const Accordian = ({ data, handle }) => {
  return (
    <>
      <div className="Accordian-Container">
        {data?.map((item, index) => {
          return (
            <>
              <div className="FAQ-Container">
                <div className="accord-quest">
                  <h3>{item.label}</h3>
                  <img
                    src="/assets/icons/nabla.svg"
                    alt="nabla-symbol"
                    onClick={() => handle(index)}
                    style={
                      item?.bool
                        ? { cursor: "pointer" }
                        : { transform: "rotate(180deg)" , cursor: "pointer" }
                    }
                  />
                </div>
                {item.bool && (
                  <div className="accord-answ">
                    <p>{item.value}</p>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
