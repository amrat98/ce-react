import { Link } from "react-router-dom";

export const Success = () => {
  return (
    <>
      <div className="pass-change-successfully">
        <img src="/assets/images/success.svg" alt="success" />
        <div className="pass-change-text-container">
          <h3 className="success-head">Password Change Succesfully</h3>
          <p>Please log in with the new password.</p>
        </div>
        <Link to={"/login"}>
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </>
  );
};
