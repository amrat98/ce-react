import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "../header/Header2";
import {
  signUpAsync,
  verifySignupOtpAsync,
  sendOtpAsync,
} from "../../redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { ErrorText } from "../error/Error";
import {
  validatePhone,
  validateEmail,
  validatePassword,
} from "../../utlis/Validation";
import Timer from "../timer/Timer";
import "./index.css";

export const CreateAccount = () => {
  const [userDetail, setUserDetail] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    country_code: "+91",
  });
  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    otp: false,
  });
  const [otp, setOtp] = useState({
    email_otp: "",
    mobile_otp: "",
  });
  const [lastResentAt , setLastResentAt] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isEnabled , setIsEnabled] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state);
  const { email, mobile, password, confirmPassword, country_code } = userDetail;
  const { email_otp, mobile_otp } = otp;
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

    if (!mobile.trim()) {
      formIsValid = false;
      newErrors.mobile = "Phone number is required";
    } else if (!validatePhone(mobile)) {
      formIsValid = false;
      newErrors.mobile = "Enter a valid 10-digit phone number";
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
      dispatch(signUpAsync(userDetail));
    } else {
      console.log(newErrors);
      setErrors(newErrors);
    }
  };

  const handleOtp = (e) => {
    const { value, name } = e.target;
    setOtp((prevState) => ({ ...prevState, [name]: value }));
    // setErrors((prevState) => ({ ...prevState, otp: otp?.email_otp?.length === 4 }));
  };

  const handleVerifyOtp = async () => {
    dispatch(
      verifySignupOtpAsync({
        email: email,
        email_otp: email_otp,
        country_code: country_code,
        mobile: mobile,
        mobile_otp: mobile_otp,
      })
    )
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const handleSendOtp = () => {
    setLastResentAt(Date.now())
    setIsEnabled(true);
    dispatch(
      sendOtpAsync({
        email: email,
        mobile: mobile,
        country_code: userDetail.country_code,
        loginType: "BOTH"
      })
    )
      .then((data) => {
        console.log(data , "Data")
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  };

  const handleTimeout = () => {
    setIsEnabled(false);
    setLastResentAt("")
  };
  return (
    <>
      <Header />

      <div className="Parent-Element">
        <div className="container">
          <div className="Forgot-Container">
            {authStatus?.auth?.signupStep === 1 && (
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
                          value={mobile}
                          onChange={(e) => handleInputChange(e)}
                          placeholder="Enter mobile number"
                          className="input"
                          name="mobile"
                        />
                      </div>
                      <ErrorText>{errors.mobile}</ErrorText>
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
            {authStatus?.auth?.signupStep === 2 && (
              <div className="forgot-pass-frm-style">
                <h1 className="title">OTP Verification</h1>
                <div className="form-container">
                  <div className="input-continer">
                    <p>Enter OTP</p>
                    <div className="input-box">
                      <input
                        type="text"
                        value={otp?.email_otp}
                        maxLength={6}
                        onChange={(e) => handleOtp(e)}
                        placeholder="Please enter the OTP sent to your registered email ID"
                        className="input"
                        name="email_otp"
                      />
                    </div>
                    <p>Enter OTP</p>
                    <div className="input-box">
                      <input
                        type="text"
                        value={otp?.mobile_otp}
                        maxLength={6}
                        onChange={(e) => handleOtp(e)}
                        placeholder="Please enter the OTP sent to your registered mobile number"
                        className="input"
                        name="mobile_otp"
                      />
                    </div>
                    <span className="resend-otp" onClick={handleSendOtp} style={{ cursor: !isEnabled ? 'pointer' : 'not-allowed' }}>Resend OTP</span>
                  </div>
                  {
                    lastResentAt !== "" && (
                      <Timer duration={30} onTimeout={handleTimeout}/>
                    )
                   }
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
