const ChartItem = ({ day, amount, maxAmount, id }) => {
  //gets the height of each chart bar
  const barInnerHeight =
    maxAmount > 0 ? Math.round((amount / maxAmount) * 100) + "px" : "0%";

  //sets the chart bar style inline
  const myDayStyle = { height: barInnerHeight };

  const dayArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let date = new Date();
  let p = date.getDay();

  //sets the current day color
  const innerCss = day === dayArray[p] ? "inner dDay" : "inner";

  const whenMouseOver = (e) => {
    e.target.previousElementSibling.style.visibility = "visible";
  };
  const whenMouseOut = (e) => {
    e.target.previousElementSibling.style.visibility = "hidden";
  };

  return (
    <div className="chartItem">
      <div className="chartValue">
        <div className="amount">${amount}</div>
        <div
          className={innerCss}
          id={id}
          style={myDayStyle}
          onMouseOver={whenMouseOver}
          onMouseOut={whenMouseOut}
        ></div>
      </div>
      <p className="chartDay smf faint">{day}</p>
    </div>
  );
};

export default ChartItem;
