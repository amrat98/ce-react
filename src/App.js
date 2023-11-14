import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage/HomePage";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { ResetPassWord } from "./components/auth/ResetPassword";
import { CreateAccount } from "./components/auth/CreateAccount";
import { TermCondition } from "./pages/legal/term-condition/TermCondition";
import { AboutUs } from "./pages/legal/about/About";
import { Login } from "./components/auth/Login";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset-password" element={<ResetPassWord/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/create-account" element={<CreateAccount/>}></Route>
          <Route path="/term-condition" element={<TermCondition/>}></Route>
          <Route path="/about-us" element={<AboutUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
