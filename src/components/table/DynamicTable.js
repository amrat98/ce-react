import { useState } from "react";
import "./DynamicTable.css";
import { Button } from "../button/Button";
export const DynamicTable = ({ head }) => {
  const userData = [
    {
      id: 1,
      name: "John Doe",
      username: "john_doe",
      email: "john.doe@example.com",
      age: 28,
      city: "New York",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "jane_smith",
      email: "jane.smith@example.com",
      age: 25,
      city: "San Francisco",
    },
    {
      id: 3,
      name: "Bob Johnson",
      username: "bob_johnson",
      email: "bob.johnson@example.com",
      age: 32,
      city: "Los Angeles",
    },
    {
      id: 4,
      name: "Eva Davis",
      username: "eva_davis",
      email: "eva.davis@example.com",
      age: 29,
      city: "Chicago",
    },
    {
      id: 5,
      name: "Michael Miller",
      username: "michael_miller",
      email: "michael.miller@example.com",
      age: 34,
      city: "Houston",
    },
    {
      id: 6,
      name: "Sophia Wilson",
      username: "sophia_wilson",
      email: "sophia.wilson@example.com",
      age: 26,
      city: "Miami",
    },
    {
      id: 7,
      name: "Daniel Brown",
      username: "daniel_brown",
      email: "daniel.brown@example.com",
      age: 31,
      city: "Seattle",
    },
    {
      id: 8,
      name: "Olivia Taylor",
      username: "olivia_taylor",
      email: "olivia.taylor@example.com",
      age: 27,
      city: "Denver",
    },
    {
      id: 9,
      name: "William Smith",
      username: "william_smith",
      email: "william.smith@example.com",
      age: 30,
      city: "Atlanta",
    },
    {
      id: 10,
      name: "Emma Jones",
      username: "emma_jones",
      email: "emma.jones@example.com",
      age: 33,
      city: "Boston",
    },
    {
      id: 11,
      name: "Christopher Anderson",
      username: "chris_anderson",
      email: "chris.anderson@example.com",
      age: 28,
      city: "Dallas",
    },
    {
      id: 12,
      name: "Isabella Martinez",
      username: "isabella_martinez",
      email: "isabella.martinez@example.com",
      age: 26,
      city: "Phoenix",
    },
    {
      id: 13,
      name: "Joseph Taylor",
      username: "joseph_taylor",
      email: "joseph.taylor@example.com",
      age: 31,
      city: "Philadelphia",
    },
    {
      id: 14,
      name: "Ava Hernandez",
      username: "ava_hernandez",
      email: "ava.hernandez@example.com",
      age: 29,
      city: "San Diego",
    },
    {
      id: 15,
      name: "William Garcia",
      username: "william_garcia",
      email: "william.garcia@example.com",
      age: 33,
      city: "Charlotte",
    },
    {
      id: 16,
      name: "Sofia Martinez",
      username: "sofia_martinez",
      email: "sofia.martinez@example.com",
      age: 27,
      city: "San Antonio",
    },
    {
      id: 17,
      name: "Matthew Clark",
      username: "matthew_clark",
      email: "matthew.clark@example.com",
      age: 30,
      city: "Detroit",
    },
    {
      id: 18,
      name: "Olivia Moore",
      username: "olivia_moore",
      email: "olivia.moore@example.com",
      age: 32,
      city: "Minneapolis",
    },
    {
      id: 19,
      name: "James White",
      username: "james_white",
      email: "james.white@example.com",
      age: 28,
      city: "Tampa",
    },
    {
      id: 20,
      name: "Emma Rodriguez",
      username: "emma_rodriguez",
      email: "emma.rodriguez@example.com",
      age: 31,
      city: "Cleveland",
    },
  ];
  const [arrayLength, setArrayLength] = useState({ start: 0, end: 10 });
  let data = userData.slice(arrayLength.start, arrayLength.end);
  const handleClick = (state) => {
    if (state === 0) {
      if (arrayLength.start === 0) {
        setArrayLength((prevLength) => ({
          start: userData.length - 10,
          end: userData.length,
        }));
      } else {
        setArrayLength((prevLength) => ({
          start: prevLength.start - 10,
          end: prevLength.end - 10,
        }));
        data = userData.slice(arrayLength.start, arrayLength.end);
      }
    } else {
      if (arrayLength.end >= userData.length) {
        setArrayLength((prevLength) => ({
          start: 0,
          end: 10,
        }));
      } else {
        setArrayLength((prevLength) => ({
          start: prevLength.start + 10,
          end: prevLength.end + 10,
        }));
        data = userData.slice(arrayLength.start, arrayLength.end);
      }
    }
  };
  return (
    <div className="Dynamic-Table-Container">
      <table>
        <thead>
          <tr>
            <th>
              Name{" "}
              <span className="caret-icon-box">
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(1)}
                />
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(0)}
                />
              </span>
            </th>
            <th>
              Price{" "}
              <span className="caret-icon-box">
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(1)}
                />
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(0)}
                />
              </span>
            </th>
            <th>
              User Name{" "}
              <span className="caret-icon-box">
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(1)}
                />
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(0)}
                />
              </span>
            </th>
            <th>
              24th Change{" "}
              <span className="caret-icon-box">
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(1)}
                />
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(0)}
                />
              </span>
            </th>
            <th>
              24th Volume{" "}
              <span className="caret-icon-box">
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(1)}
                />
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(0)}
                />
              </span>
            </th>
            <th>
              Market Cap{" "}
              <span className="caret-icon-box">
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(1)}
                />
                <img
                  src="/assets/icons/caret.svg"
                  alt=""
                  onClick={() => handleClick(0)}
                />
              </span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td> <td>{item.name}</td> <td>{item.username}</td>{" "}
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>
                <div className="market-table-btn-td">
                  <button>Info</button>
                  <button>Trade</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
