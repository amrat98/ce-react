import { useState } from "react";
import { Success } from "./Success";
import { Header } from "../header/Header2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  validatePhone,
  validateEmail,
  validatePassword,
} from "../../utlis/Validation";
import { ErrorText } from "../error/Error";
import { loginPhoneAsync, loginEmailAsync } from "../../redux/AuthSlice";
import "./index.css";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loginOption, setLoginOption] = useState("email");
  const [loginByPhone, setLoginByPhone] = useState({
    phone: "",
    password: "",
  });
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    identifier: "",
    password: "",
  });

  const { email, password } = loginDetail;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetail((prevDate) => ({ ...prevDate, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    setLoginByPhone((prevDate) => ({ ...prevDate, [name]: value }));
  };

  // submit form handle

  const handleSubmit = () => {
    let formIsValid = true;
    const newErrors = { ...errors };
    if (loginOption === "email") {
      // Email validation
      if (!email.trim()) {
        formIsValid = false;
        newErrors.identifier = "Email is required";
      } else if (!validateEmail(email)) {
        formIsValid = false;
        newErrors.identifier = "Enter a valid email address";
      }

      // Password validation
      if (!password.trim()) {
        formIsValid = false;
        newErrors.password = "Password is required";
      } else if (!validatePassword(password)) {
        formIsValid = true;
        newErrors.password =
          "Password must be at least 8 characters long and contain at least one letter and one number";
      }

      if (formIsValid) {
        dispatch(
          loginEmailAsync({
            email: loginDetail.email,
            password: loginDetail.password,
            loginType: loginOption.toUpperCase(),
          })
        )
          .then((data) => {
            if (data?.payload?.success) {
              localStorage.setItem("token", data?.payload?.responseData?.token);
              navigate("/profile");
            }
          })
          .catch((error) => {
            console.log(error, "Error");
          });

      } else {
        setErrors(newErrors);
      }
    } else {
      // Phone number validation
      if (!loginByPhone.phone.trim()) {
        formIsValid = false;
        newErrors.identifier = "Phone number is required";
      } else if (!validatePhone(loginByPhone.phone)) {
        formIsValid = false;
        newErrors.identifier = "Enter a valid 10-digit phone number";
      }

      // Password validation
      if (!loginByPhone.password.trim()) {
        formIsValid = false;
        newErrors.password = "Password is required";
      } else if (!validatePassword(loginByPhone.password)) {
        formIsValid = false;
        newErrors.password =
          "Password must be at least 8 characters long and contain at least one letter and one number";
      }

      if (formIsValid) {
        dispatch(
          loginPhoneAsync({
            loginType: loginOption.toUpperCase(),
            mobile: loginByPhone.phone,
            password: loginByPhone.password,
            country_code: "+91",
          })
        )
          .then((data) => {
            if (data?.payload?.success) {
              localStorage.setItem("token", data?.payload?.responseData?.token);
              navigate("/profile");
            }
          })
          .catch((error) => {
            console.log(error, "Error");
          });
      } else {
        setErrors(newErrors);
      }
    }
  };
  return (
    <>
      <Header />

      <div className="Parent-Element">
        <div className="container">
          <div className="Forgot-Container">
            {step === 1 && (
              <div className="forgot-pass-frm-style">
                <h1 className="title">Login</h1>
                <div className="form-container">
                  <div className="reset-mtd-box">
                    <button
                      onClick={() => setLoginOption("email")}
                      className={
                        loginOption === "email" ? "active-btn" : "inactive-btn"
                      }
                    >
                      Email
                    </button>
                    <button
                      onClick={() => setLoginOption("mobile")}
                      className={
                        loginOption === "mobile" ? "active-btn" : "inactive-btn"
                      }
                    >
                      Mobile Number
                    </button>
                  </div>
                  {loginOption === "email" ? (
                    <>
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
                        <ErrorText>{errors.identifier}</ErrorText>
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
                        <div className="forgot-password">
                          <span>
                            <input
                              type="checkbox"
                              id="remember_me"
                              name="remember_me"
                            />
                            <label for="remember_me"> Remember me</label>
                          </span>
                          <Link to={"/forgot-password"}>Forgot Password</Link>
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
                            value={loginByPhone.phone}
                            onChange={(e) => handlePhoneChange(e)}
                            placeholder="Enter mobile number"
                            className="input"
                          />
                        </div>
                        <ErrorText>{errors.identifier}</ErrorText>
                      </div>
                      <div className="input-continer">
                        <p>Password :</p>
                        <div className="input-box">
                          <input
                            type="text"
                            value={loginByPhone.password}
                            onChange={(e) => handlePhoneChange(e)}
                            placeholder="Enter password"
                            className="input"
                          />
                        </div>
                        <ErrorText>{errors.password}</ErrorText>
                        <div className="forgot-password">
                          <span>
                            <input
                              type="checkbox"
                              id="remember_me"
                              name="remember_me"
                            />
                            <label for="remember_me"> Remember me</label>
                          </span>
                          <Link to={"/forgot-password"}>Forgot Password</Link>
                        </div>
                      </div>
                    </>
                  )}
                  <button className="form-cmn-btn" onClick={handleSubmit}>
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
    </>
  );
};
