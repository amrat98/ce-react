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
import { Notification } from "./pages/profile/notification/Notification";
import { ContactUs } from "./pages/legal/contact-us/ContactUs";
import { Market } from "./pages/market/Market";
import { Exchange } from "./pages/exchange/Exchange";
import { P2P } from "./pages/p2p/P2P";
import { Wallet } from "./pages/wallet/Wallet";
import { Feedback } from "./pages/legal/feedback/FeedBack";

import "./App.css";
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
          <Route path="/private-policy" element={<PrivacyPolicy />}/>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/kyc" element={<Kyc />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/market" element={<Market />} />
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/p2p" element={<P2P />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/exchange" element={<Exchange/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
