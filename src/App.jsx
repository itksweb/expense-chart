import ExpenseChart from "./components/ExpenseChart";
import Header from "./components/Header";
import Main from "./components/Main";
import Performance from "./components/Perfomance";

function App() {
  const data = [
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <Main>
        <ExpenseChart data={data} />
        <hr className="newo" />
        <Performance />
      </Main>
    </div>
  );
}

export default App;
