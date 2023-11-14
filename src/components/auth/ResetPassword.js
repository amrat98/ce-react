import { useState } from "react";
import { Success } from "./Success";
import { Header } from "../header/Header2";
import "./index.css";

export const ResetPassWord = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  const [resetMethod, setResetMethod] = useState("email");
  return (
    <>
      <div className="Parent-Element">
        <Header/>
        <div className="container">
          {step !== 2 ? (
            <>
              <div className="Forgot-Container">
                {step === 1 && (
                  <div className="forgot-pass-frm-style">
                    <h1 className="title">Reset Password</h1>
                    <div className="form-container">
                      <div className="input-continer">
                        <p>Password :</p>
                        <div className="input-box">
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter password"
                            className="input"
                          />
                        </div>
                      </div>

                      <div className="input-continer">
                        <p>Confirm Password :</p>
                        <div className="input-box">
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter password"
                            className="input"
                          />
                        </div>
                      </div>

                      <button
                        className="form-cmn-btn"
                        onClick={() => setStep(2)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
                <div className="welcome-container">
                  <img src="/assets/images/welcome.webp" alt="welcome" />
                  <div className="welcome-text-Container">
                    <h3>Welcome Back</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Eget sagittis
                      turpis porta facilisi suspendisse a
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Success />
            </>
          )}
        </div>
      </div>
    </>
  );
};
