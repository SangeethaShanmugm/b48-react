import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  //JS starts
  // let name = "Jack";
  const [name, setName] = useState("Jack");
  const [nameList, setNameList] = useState(["Mick", "John", "Peter", "Paul"]);

  const users = [
    {
      name: "Jack",
      age: 20,
      email: "jack@gmail.com",
    },
    {
      name: "John",
      age: 21,
      email: "john@gmail.com",
    },
    {
      name: "Andrew",
      age: 21,
      email: "andrew@gmail.com",
    },
    {
      name: "Mickenzie",
      age: 21,
      email: "mick@gmail.com",
    },
  ];
  //JS ends
  //JSX starts
  return (
    <div className="App">
      <p>Hi {name}</p>

      {nameList.map((item, index) => (
        <Sample key={index} nm={item} />
      ))}

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setNameList([...nameList, name])}>Add Name</button>

      <table
        style={{ border: "1px solid black", width: "500px", height: "200px" }}
      >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>

        {users.map((usr, index) => {
          return (
            <tr key={index}>
              <td>{usr.name}</td>
              <td>{usr.email}</td>
              <td>{usr.age}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
  //JSX ends
}

function Sample({ nm }) {
  return <h1>Hello {nm}🥳🥳🥳 </h1>;
}

export default App;
