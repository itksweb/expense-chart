import ChartItem from "./chartItem";

const ExpenseChart = ({ data }) => {
  const amountArray = data.map((item) => item.amount);
  const maxAmount = Math.max(...amountArray);

  return (
    <div className="chart">
      {data.map((item, i) => {
        return (
          <ChartItem
            day={item.day}
            amount={item.amount}
            maxAmount={maxAmount}
            key={`crt${i}`}
            id={`crt${i}`}
          />
        );
      })}
    </div>
  );
};

export default ExpenseChart;
