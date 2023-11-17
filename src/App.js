import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { ResetPassWord } from "./components/auth/ResetPassword";
import { CreateAccount } from "./components/auth/CreateAccount";
import { TermCondition } from "./pages/legal/term-condition/TermCondition";
import { AboutUs } from "./pages/legal/about/About";
import { Login } from "./components/auth/Login";
import { PrivacyPolicy } from "./pages/legal/privacy-policy/PrivacyPolicy";
import { FAQ } from "./pages/legal/faq/Faq";
import { Kyc } from "./pages/profile/kyc/Kyc";
import { Profile } from "./pages/profile/Profile";
import { TransferHistory } from "./pages/profile/transfer-history/TransferHistory";
import { LoginHistory } from "./pages/profile/login-history/LoginHistory";
import "./App.css";
import { Notification } from "./pages/profile/notification/Notification";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset-password" element={<ResetPassWord />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create-account" element={<CreateAccount />}></Route>
          <Route path="/term-condition" element={<TermCondition />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/private-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/kyc" element={<Kyc />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/transfer-history" element={<TransferHistory />}></Route>
          <Route path="/login-history" element={<LoginHistory />}></Route>
          <Route path="/notification" element={<Notification/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
