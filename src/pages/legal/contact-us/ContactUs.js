import { Footer } from "../../../components/footer/Footer";
import { Input } from "../../../components/input/Input";
import { Button } from "../../../components/button/Button";
import { Header } from "../../../components/header/Header";
import "./ContactUs.css";
export const ContactUs = () => {
  return (
    <>
    <Header/>
      <div className="Contact-Us-Container">
        <div className="Contact-Us-Form-Container">
          <h1>Contact Us</h1>
          <Input
            label={"Name"}
            placeholder={"Enter full name.."}
            name={"name"}
          />
          <Input
            label={"Email"}
            placeholder={"Enter your email address..."}
            name={"email"}
          />
          <Input
            label={"Mobile Number"}
            placeholder={"Enter your number.."}
            name={"number"}
          />
          <div className="Contact-Us-Message-container">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="8">
              Tell us your experience..
            </textarea>
          </div>
          <div className="Contact-Us-Btn-Container">
            <Button ClASSS={'blue'}>Submit</Button>
            <Button ClASSS={'black'}>Cancel</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
