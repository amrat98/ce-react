import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "../header/Header2";
import { signUpAsync, verifyOtpAsync } from "../../redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { ErrorText } from "../error/Error";
import {
  validatePhone,
  validateEmail,
  validatePassword,
} from "../../utlis/Validation";
import "./index.css";
export const CreateAccount = () => {
  const [step, setStep] = useState(1);
  const [userDetail, setUserDetail] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [otp, setOtp] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => console.log(state));
  const { email, phone, password, confirmPassword } = userDetail;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prevDate) => ({ ...prevDate, [name]: value }));
  };

  const handleConfirmPassword = (e) => {
    setPasswordMatch(e.target.value === password);
  };

  const handleSubmit = () => {
    let formIsValid = true;
    const newErrors = { ...errors };
    if (!email.trim()) {
      formIsValid = false;
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      formIsValid = false;
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!password.trim()) {
      formIsValid = false;
      newErrors.password = "Password is required";
    } else if (!validatePassword(password)) {
      formIsValid = false;
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one letter and one number";
    }

    if (!phone.trim()) {
      formIsValid = false;
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(phone)) {
      formIsValid = false;
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!confirmPassword.trim()) {
      formIsValid = false;
      newErrors.confirmPassword = "Confirm password is required";
    } else if (!passwordMatch) {
      formIsValid = false;
      newErrors.confirmPassword =
        "Password confirmation failed. Please try again.";
    }
    if (formIsValid) {
      dispatch(signUpAsync({ email: email, password: password, phone: phone }));
      // setStep(2);
    } else {
      console.log(newErrors);
      setErrors(newErrors);
    }
  };

  const handleOtp = (e) => {
    setOtp(e.target.value);
    setErrors((prevState) => ({ ...prevState, otp: otp.length === 4 }));
  };

  const handleVerifyOtp = () => {
    if (errors.otp) {
      dispatch(verifyOtpAsync({ email: email, phone: phone, otp: otp }));
      navigate("/login");
    }
  };
  return (
    <>
      <Header />

      <div className="Parent-Element">
        <div className="container">
          <div className="Forgot-Container">
            {step === 1 && (
              <>
                <div className="forgot-pass-frm-style">
                  <h1 className="title">Create Account</h1>
                  <div className="form-container">
                    <div className="input-continer">
                      <p>Email Address :</p>
                      <div className="input-box">
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => handleInputChange(e)}
                          placeholder="Enter email address"
                          className="input"
                          name="email"
                        />
                      </div>
                      <ErrorText>{errors.email}</ErrorText>
                    </div>
                    <div className="input-continer">
                      <p>Mobile Number :</p>
                      <div className="input-box">
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => handleInputChange(e)}
                          placeholder="Enter mobile number"
                          className="input"
                          name="phone"
                        />
                      </div>
                      <ErrorText>{errors.phone}</ErrorText>
                    </div>
                    <div className="input-continer">
                      <p>Password :</p>
                      <div className="input-box">
                        <input
                          type="text"
                          value={password}
                          onChange={(e) => handleInputChange(e)}
                          placeholder="Enter password"
                          className="input"
                          name="password"
                        />
                      </div>
                      <ErrorText>{errors.password}</ErrorText>
                    </div>
                    <div className="input-continer">
                      <p>Confirm Password :</p>
                      <div className="input-box">
                        <input
                          type="text"
                          value={confirmPassword}
                          onChange={(e) => {
                            handleInputChange(e);
                            handleConfirmPassword(e);
                          }}
                          placeholder="Enter confirm password"
                          className="input"
                          name="confirmPassword"
                        />
                      </div>
                      <ErrorText>{errors.confirmPassword}</ErrorText>
                    </div>
                    <div className="btn-box">
                      <button
                        className="form-cmn-btn"
                        // onClick={() => setStep(3)}
                        onClick={handleSubmit}
                      >
                        Sign Up
                      </button>
                      <div className="hr-box">
                        <hr className="custom-hr" />
                        <span>OR</span>
                      </div>
                      <button className="google-btn">
                        <img src="/assets/icons/google.svg" alt="google-auth" />
                        <span>Continue with Google</span>
                      </button>
                      <Link to={"/login"}>
                        <p className="login-para">
                          Login <span>NORDEK</span> Account
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
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
              </>
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
                        value={otp}
                        maxLength={4}
                        onChange={(e) => handleOtp(e.target.value)}
                        placeholder="Enter your OTP"
                        className="input"
                      />
                    </div>
                    <span className="resend-otp">Resend OTP</span>
                  </div>
                  <button className="form-cmn-btn" onClick={handleVerifyOtp}>
                    Verify
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
