const ChartItem = ({ day, amount, maxAmount, id }) => {
  let barInnerHeight = "0%";
  if (maxAmount > 0) {
    barInnerHeight = Math.round((amount / maxAmount) * 100) + "px";
  }
  const dayArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let date = new Date();
  let p = date.getDay();

  let myDayStyle = { height: barInnerHeight };
  if (day === dayArray[p]) {
    myDayStyle = {
      height: barInnerHeight,
      backgroundColor: "hsl(186, 34%, 60%)",
    };
  }

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
          className="inner"
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
