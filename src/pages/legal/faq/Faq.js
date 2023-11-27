import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
import { Accordian } from "../../../components/accordian/Accordian.js";
import "../index.css";
import { useState } from "react";
export const FAQ = () => {
  const [faq, setFaq] = useState([
    {
      label: "What is P2P Trading?",
      value:
        "Lorem ipsum dolor sit amet consectetur. Nisl neque non neque fermentum lacus mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla. Senectus et lorem urna viverra aliquam faucibus purus erat rutrum. Lorem lorem tellus sed nibh non feugiat tempus auctor fusce.Lorem ipsum dolor sit amet consectetur.",
      bool: true,
    },
    {
      label: "What are public and private keys?",
      value:
        "Lorem ipsum dolor sit amet consectetur. Nisl neque non neque fermentum lacus mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla. Senectus et lorem urna viverra aliquam faucibus purus erat rutrum. Lorem lorem tellus sed nibh non feugiat tempus auctor fusce.Lorem ipsum dolor sit amet consectetur.",
      bool: false,
    },
    {
      label: "What is UTXO?",
      value:
        "Lorem ipsum dolor sit amet consectetur. Nisl neque non neque fermentum lacus mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla. Senectus et lorem urna viverra aliquam faucibus purus erat rutrum. Lorem lorem tellus sed nibh non feugiat tempus auctor fusce.Lorem ipsum dolor sit amet consectetur.",
      bool: false,
    },
    {
      label: "About Fierex",
      value:
        "Lorem ipsum dolor sit amet consectetur. Nisl neque non neque fermentum lacus mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla. Senectus et lorem urna viverra aliquam faucibus purus erat rutrum. Lorem lorem tellus sed nibh non feugiat tempus auctor fusce.Lorem ipsum dolor sit amet consectetur.",
      bool: false,
    },
    {
      label: "What is UTXO?",
      value:
        "Lorem ipsum dolor sit amet consectetur. Nisl neque non neque fermentum lacus mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla. Senectus et lorem urna viverra aliquam faucibus purus erat rutrum. Lorem lorem tellus sed nibh non feugiat tempus auctor fusce.Lorem ipsum dolor sit amet consectetur.",
      bool: false,
    },
    {
      label: "What is UTXO?",
      value:
        "Lorem ipsum dolor sit amet consectetur. Nisl neque non neque fermentum lacus mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla. Senectus et lorem urna viverra aliquam faucibus purus erat rutrum. Lorem lorem tellus sed nibh non feugiat tempus auctor fusce.Lorem ipsum dolor sit amet consectetur.",
      bool: false,
    },
  ]);
  const handleClick = (index) => {
    setFaq((prevState) => prevState.map((item , ind) => ind === index ? {...item , bool: true} : {...item , bool: false}))
  }
  return (
    <>
      <Header />
      <div className="Term-Condition-Container">
        <div className="container">
          <div className="Term-Condition-Main-Container">
            <h1 className="legal-head">FAQ</h1>
            <Accordian data={faq} handle={handleClick}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
