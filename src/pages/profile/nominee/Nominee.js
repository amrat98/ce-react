import { useState } from "react";
import { Input, DateInput } from "../../../components/input/Input";
import { Button } from "../../../components/button/Button";
import { Table } from "../../../components/table/CommonTable";
import { Accordian } from "../../../components/accordian/Accordian";
import "./Nominee.css";
const TableHead = [
  "S No.",
  "First Name",
  "Last Name",
  "Email",
  "Mobile Number",
  "Relation",
  "Action",
];
export const Nominee = () => {
  const [faq, setFaq] = useState([
    {
      label: "Why add a nominee?",
      value:
        "Lorem ipsum dolor sit amet consectetur. Nisl neque non neque fermentum lacus mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla. Senectus et lorem urna viverra aliquam faucibus purus erat rutrum. Lorem lorem tellus sed nibh non feugiat tempus auctor fusce.Lorem ipsum dolor sit amet consectetur.",
      bool: false,
    },
    {
      label: "How do I add a nominee?",
      value:
        "Lorem ipsum dolor sit amet consectetur. Nisl neque non neque fermentum lacus mattis bibendum. Sed nibh dolor aliquet maecenas urna nulla. Senectus et lorem urna viverra aliquam faucibus purus erat rutrum. Lorem lorem tellus sed nibh non feugiat tempus auctor fusce.Lorem ipsum dolor sit amet consectetur.",
      bool: false,
    },
  ]);
  const handleClick = (index) => {
    setFaq((prevState) =>
      prevState.map((item, ind) =>
        ind === index ? { ...item, bool: true } : { ...item, bool: false }
      )
    );
  };
  return (
    <div className="Nominee-Container">
      <div className="Nominee-Input-Container">
        <div className="Nominee-Input-Left">
          <DateInput label={"From Date :"} placeholder={"dd/mm/yyyy"} />
          <Input label={"Search By Email :"} placeholder={"Enter email"} />
        </div>
        <div className="Nominee-Input-Right">
          <DateInput label={"To date :"} placeholder={"dd/mm/yyyy"} />
          <Input
            label={"Search By Mobile Number :"}
            placeholder={"Enter mobile"}
          />
        </div>
      </div>
      <div className="Nominee-Button-Container">
        <Button ClASSS={"blue"}>Search</Button>
        <Button ClASSS={"black"}>Reset</Button>
        <Button ClASSS={"black"}>Nominee List</Button>
        <Button ClASSS={"black"}>Add nominee</Button>
      </div>
      <div className="Nominee-Table-Container">
        <Table head={TableHead} />
      </div>
      <div className="Nominee-Accordian-Container">
        <h1>Instructions</h1>
        <Accordian data={faq} handle={handleClick}/>
      </div>
    </div>
  );
};
