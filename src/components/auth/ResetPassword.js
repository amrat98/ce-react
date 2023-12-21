import { useState } from "react";
import { Success } from "./Success";
import { Header } from "../header/Header2";
import { validatePassword } from "../../utlis/Validation";
import { resetPassAsync } from "../../redux/AuthSlice";
import { useDispatch } from "react-redux";
import { ErrorText } from "../error/Error";
import "./index.css";

export const ResetPassWord = () => {
  const [resetPassword, setResetPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [step, setStep] = useState(1);
  const [passwordErrors, setPasswordErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { newPassword, confirmPassword, oldPassword } = resetPassword;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetPassword((prevState) => ({ ...prevState, [name]: value }));
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
      dispatch(resetPassAsync(resetPassword))
        .then((data) => {
          if (data?.payload?.success) {
            setStep(2);
          } else {
            setPasswordErrors((prevState) => ({
              ...prevState,
              oldPassword: data?.payload?.message,
            }));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="Parent-Element">
        <div className="container">
          {step !== 2 ? (
            <>
              <div className="Forgot-Container">
                {step === 1 && (
                  <div className="forgot-pass-frm-style">
                    <h1 className="title">Reset Password</h1>
                    <div className="form-container">
                      <div className="input-continer">
                        <p>Old Password :</p>
                        <div className="input-box">
                          <input
                            type="text"
                            value={oldPassword}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter old password"
                            className="input"
                            name="oldPassword"
                          />
                        </div>
                        <ErrorText>{passwordErrors.oldPassword}</ErrorText>
                      </div>
                      <div className="input-continer">
                        <p>New Password :</p>
                        <div className="input-box">
                          <input
                            type="text"
                            value={newPassword}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter new password"
                            className="input"
                            name="newPassword"
                          />
                        </div>
                      </div>
                      <ErrorText>{passwordErrors.newPassword}</ErrorText>
                      <div className="input-continer">
                        <p>Confirm Password :</p>
                        <div className="input-box">
                          <input
                            type="text"
                            value={confirmPassword}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter confirm password"
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
                  <img src="/assets/images/welcome.webp" alt="welcome" loading="lazy"/>
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
