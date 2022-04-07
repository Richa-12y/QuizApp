import "./app.css";
import { useState } from "react";
import Trivia from "./components/Trivia";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);

  const moneyPyramid = [
    {
      id: 1,
      amount: "$ 100",
    },
    {
      id: 2,
      amount: "$ 500",
    },
    {
      id: 3,
      amount: "$ 1000",
    },
    {
      id: 4,
      amount: "$ 15000",
    },
    {
      id: 5,
      amount: "$ 20000",
    },
    {
      id: 6,
      amount: "$ 25000",
    },
    {
      id: 7,
      amount: "$ 30000",
    },
    {
      id: 8,
      amount: "$ 350000",
    },
    {
      id: 9,
      amount: "$ 450000",
    },
    {
      id: 10,
      amount: "$ 500000",
    },
    {
      id: 11,
      amount: "$ 800000",
    },
    {
      id: 12,
      amount: "$ 10000000",
    },
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia />
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
