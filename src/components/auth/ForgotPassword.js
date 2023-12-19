import { useState } from "react";
import { Success } from "./Success";
import { Header } from "../header/Header2";
import {
  validatePhone,
  validateEmail,
  validatePassword,
} from "../../utlis/Validation";
import { useNavigate } from "react-router-dom";
import {
  sendOtpAsync,
  verifyOtpAsync,
  forgotPassAsync,
} from "../../redux/AuthSlice";
import { ErrorText } from "../error/Error";
import { useDispatch } from "react-redux";
import Timer from "../timer/Timer";
import "./index.css";
export const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [forgotOption, setForgotOption] = useState("email");
  const [lastResentAt, setLastResentAt] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordErrors, setPasswordErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [userDetail, setUserDetail] = useState({
    email: "",
    country_code: "",
    mobile: "",
  });

  const [userDetailErrors, setUserDetailErrors] = useState({
    email: "",
    mobile: "",
  });

  const { email, country_code, mobile } = userDetail;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { newPassword, confirmPassword } = passwords;

  const handleSendOtp = async () => {
    let formIsValid = true;
    if (forgotOption === "email") {
      if (!email.trim()) {
        formIsValid = false;
        setUserDetailErrors((prevState) => ({
          ...prevState,
          email: "Email is required",
        }));
      } else if (!validateEmail(email)) {
        formIsValid = false;
        setUserDetailErrors((prevState) => ({
          ...prevState,
          email: "Enter a valid email address",
        }));
      }
      if (formIsValid) {
        dispatch(
          sendOtpAsync({
            loginType: forgotOption.toUpperCase(),
            email: email,
            country_code: country_code,
            mobile: mobile,
          })
        )
          .then((data) => {
            if (data?.payload?.success) {
              setStep(2);
            }
          })
          .catch((error) => {
            console.log(error, "error");
          });
      }
    } else {
      if (!mobile.trim()) {
        formIsValid = false;
        setUserDetailErrors((prevState) => ({
          ...prevState,
          mobile: "Phone number is required",
        }));
      } else if (!validatePhone(mobile)) {
        formIsValid = false;
        setUserDetailErrors((prevState) => ({
          ...prevState,
          mobile: "Enter a valid 10-digit phone number",
        }));
      }
      if (formIsValid) {
        dispatch(
          sendOtpAsync({
            loginType: forgotOption.toUpperCase(),
          })
        )
          .then((data) => {
            if (data?.payload?.success) {
              setStep(2);
            }
          })
          .catch((error) => {
            console.log(error, "error");
          });
      }
    }
  };

  const forgotPassword = () => {
    let formIsValid = true;
    if (!newPassword.trim()) {
      formIsValid = false;
      setPasswordErrors((prevState) => ({
        ...prevState,
        newPassword: "Password is required",
      }));
    } else if (!validatePassword(newPassword)) {
      formIsValid = false;
      setPasswordErrors((prevState) => ({
        ...prevState,
        newPassword:
          "Password must be at least 8 characters long and contain at least one letter and one number",
      }));
    }
    if (!confirmPassword.trim()) {
      formIsValid = false;
      setPasswordErrors((prevState) => ({
        ...prevState,
        confirmPassword: "Confirm Password is required",
      }));
    } else if (newPassword !== confirmPassword) {
      formIsValid = false;
      setPasswordErrors((prevState) => ({
        ...prevState,
        confirmPassword: "Please enter same password",
      }));
    }
    if (formIsValid) {
      dispatch(forgotPassAsync(passwords));
    }
  };

  const handleTimeout = () => {
    setIsEnabled(false);
    setLastResentAt("");
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <>
      <Header />

      <div className="Parent-Element">
        <div className="container">
          <div className="Forgot-Container">
            {step === 1 && (
              <div className="forgot-pass-frm-style">
                <h1 className="title">Forgot Password</h1>
                <div className="form-container">
                  <div className="reset-mtd-box">
                    <button
                      onClick={() => setForgotOption("email")}
                      className={
                        forgotOption === "email" ? "active-btn" : "inactive-btn"
                      }
                    >
                      Email
                    </button>
                    <button
                      onClick={() => setForgotOption("mobile")}
                      className={
                        forgotOption === "mobile"
                          ? "active-btn"
                          : "inactive-btn"
                      }
                    >
                      Mobile Number
                    </button>
                  </div>
                  {forgotOption === "email" ? (
                    <>
                      <div className="input-continer">
                        <p>Email Address :</p>
                        <div className="input-box">
                          <input
                            type="text"
                            value={email}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter email address"
                            className="input"
                            name="email"
                          />
                        </div>
                        <ErrorText>{userDetailErrors?.email}</ErrorText>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="input-continer">
                        <p>Mobile Number :</p>
                        <div className="input-box">
                          <input
                            type="text"
                            value={mobile}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter mobile number"
                            className="input"
                            name="mobile"
                          />
                        </div>
                        <ErrorText>{userDetailErrors?.mobile}</ErrorText>
                      </div>
                    </>
                  )}
                  <button className="form-cmn-btn" onClick={handleSendOtp}>
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
                        onChange={(e) => handlePasswordChange(e)}
                        placeholder="Enter your OTP"
                        className="input"
                      />
                    </div>
                    <span className="resend-otp" onClick={handleSendOtp}>
                      Resend OTP
                    </span>
                    {lastResentAt !== "" && (
                      <Timer duration={30} onTimeout={handleTimeout} />
                    )}
                  </div>
                  <button className="form-cmn-btn" onClick={() => setStep(3)}>
                    Verify
                  </button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="forgot-pass-frm-style">
                <h1 className="title">Forgot Password</h1>
                <div className="form-container">
                  <div className="input-continer">
                    <p>New Password :</p>
                    <div className="input-box">
                      <input
                        type="text"
                        value={newPassword}
                        onChange={(e) => handlePasswordChange(e)}
                        placeholder="Enter your OTP"
                        className="input"
                        name="newPassword"
                      />
                    </div>
                    <ErrorText>{passwordErrors.newPassword}</ErrorText>
                  </div>
                  <div className="input-continer">
                    <p>Confirm Password :</p>
                    <div className="input-box">
                      <input
                        type="text"
                        value={confirmPassword}
                        onChange={(e) => handlePasswordChange(e)}
                        placeholder="Enter your OTP"
                        className="input"
                        name="confirmPassword"
                      />
                    </div>
                    <ErrorText>{passwordErrors.confirmPassword}</ErrorText>
                  </div>
                  <button className="form-cmn-btn" onClick={forgotPassword}>
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
                  Lorem ipsum dolor sit amet consectetur. Eget sagittis turpis
                  porta facilisi suspendisse a
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <>
          <Success />
        </> */}
    </>
  );
};
