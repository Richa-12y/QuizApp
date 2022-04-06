import "./app.css";

function App() {
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
      amount: "$ 1500",
    },
    {
      id: 5,
      amount: "$ 2000",
    },
    {
      id: 6,
      amount: "$ 2500",
    },
    {
      id: 7,
      amount: "$ 3000",
    },
    {
      id: 8,
      amount: "$ 35000",
    },
    {
      id: 9,
      amount: "$ 450000",
    },
    {
      id: 10,
      amount: "$ 50000",
    },
    {
      id: 11,
      amount: "$ 80000",
    },
    {
      id: 12,
      amount: "$ 10000000",
    },
  ];
  return (
    <div className="app">
      <div className="main">Main</div>
      <div className="pyramid">
        <ul className="moneyList">
          <li className="moneyListItem active">
            <span className="moneyListItemNumber">4</span>
            <span className="moneyListItemAmount">$ 400</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
