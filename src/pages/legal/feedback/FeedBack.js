import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
import { Button } from "../../../components/button/Button";
import StarRating from "./StarRating";
import { useState } from "react";
import "./FeedBack.css";
export const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <>
      <Header />
      <div className="feedback-Parent-container">
        <div className="feedback-container">
          <div className="feedbackform">
            <h3>Please Rate Your Experience</h3>
            <StarRating
              totalStars={5}
              initialRating={rating}
              onRatingChange={handleRatingChange}
            />
            <div className="Contact-Us-Message-container feed-textarea">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="8">
                Tell us your experience..
              </textarea>
            </div>
            <div className="Contact-Us-Btn-Container">
              <Button ClASSS={"blue"}>Submit</Button>
              <Button ClASSS={"black"}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
