import { useState } from "react";
import { Success } from "./Success";
import { Header } from "../header/Header2";
import "./index.css";
export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  const [resetMethod, setResetMethod] = useState("email");
  return (
    <>
    <Header/>
      {step !== 3 ? (
        <>
          <div className="Parent-Element">
            <div className="container">
              <div className="Forgot-Container">
                {step === 1 && (
                  <div className="forgot-pass-frm-style">
                    <h1 className="title">Forgot Password</h1>
                    <div className="form-container">
                      <div className="reset-mtd-box">
                        <button
                          onClick={() => setResetMethod("email")}
                          className={
                            resetMethod === "email"
                              ? "active-btn"
                              : "inactive-btn"
                          }
                        >
                          Email
                        </button>
                        <button
                          onClick={() => setResetMethod("mobile")}
                          className={
                            resetMethod === "mobile"
                              ? "active-btn"
                              : "inactive-btn"
                          }
                        >
                          Mobile Number
                        </button>
                      </div>
                      {resetMethod === "email" ? (
                        <>
                          <div className="input-continer">
                            <p>Email Address :</p>
                            <div className="input-box">
                              <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email address"
                                className="input"
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="input-continer">
                            <p>Mobile Number :</p>
                            <div className="input-box">
                              <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter mobile number"
                                className="input"
                              />
                            </div>
                          </div>
                        </>
                      )}
                      <button
                        className="form-cmn-btn"
                        onClick={() => setStep(2)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="forgot-pass-frm-style">
                    <h1 className="title">OTP Verification</h1>
                    <div className="form-container">
                      <div className="input-continer">
                        <p>Enter OTP</p>
                        <div className="input-box">
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your OTP"
                            className="input"
                          />
                        </div>
                        <span className="resend-otp">Resend OTP</span>
                      </div>
                      <button
                        className="form-cmn-btn"
                        onClick={() => setStep(3)}
                      >
                        Verify
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
            </div>
          </div>
        </>
      ) : (
        <>
          <Success />
        </>
      )}
    </>
  );
};
