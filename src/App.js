import { useState } from "react";
import "./styles.css";

export default function App() {
  const [userVal, setUserVal] = useState("");
  const [output, setOutput] = useState([]);
  const [info, setInfo] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  function handleInput(e) {
    let num = e.target.value;
    console.log(num);
    if (num == "") {
      setUserVal("");
    } else if (num < 1) {
      num = 1;
    } else if (num > 30) {
      num = 30;
    }
    setUserVal(num);
  }
  function handleClick() {
    let num = userVal;
    let res = [];
    for (let i = 1; i <= num; i++) {
      res.push(i);
    }
    setOutput(res);
  }
  return (
    <div className="App">
      <input
        type="number"
        placeholder="Enter number"
        value={userVal}
        onChange={handleInput}
      />
      <button onClick={handleClick}>Click</button>
      <br />
      <br />

      {output.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => {
              setInfo(true);
              setSelectedItem(item);
            }}
          >
            {item}
          </button>
          {info && selectedItem === item && (
            <div>{item % 2 === 0 ? "Even" : "Odd"}</div>
          )}
        </div>
      ))}
    </div>
  );
}
