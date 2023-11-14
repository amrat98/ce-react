import { useState } from "react";
import { Success } from "./Success";
import { Header } from "../header/Header2";
import "./index.css";
import { Link } from "react-router-dom";
export const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  const [resetMethod, setResetMethod] = useState("email");
  return (
    <>
      <Header />
      {step !== 3 ? (
        <>
          <div className="Parent-Element">
            <div className="container">
              <div className="Forgot-Container">
                {step === 1 && (
                  <div className="forgot-pass-frm-style">
                    <h1 className="title">Create Account</h1>
                    <div className="form-container">
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
                            placeholder="Enter confirm password"
                            className="input"
                          />
                        </div>
                      </div>
                      <div className="btn-box">
                        <button
                          className="form-cmn-btn"
                          onClick={() => setStep(3)}
                        >
                          Sign Up
                        </button>
                        <div className="hr-box">
                          <hr className="custom-hr" />
                          <span>OR</span>
                        </div>
                        <button className="google-btn">
                          <img
                            src="/assets/icons/google.svg"
                            alt="google-auth"
                          />
                          <span>Continue with Google</span>
                        </button>
                        <Link to={'/login'}>
                          <p className="login-para">
                            Login <span>NORDEK</span> Account
                          </p>
                        </Link>
                      </div>
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
