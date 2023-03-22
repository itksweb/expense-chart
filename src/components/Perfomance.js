const Performance = () => {
  return (
    <div className="thisMonth flex">
      <p className="total">
        <span className="smf faint">Total this month</span>
        <br />
        <span className="bold">$478.33</span>
      </p>
      <p className="fromLastMonth">
        <span className="smf bold">+2.4%</span>
        <br />
        <span className="smf faint">from last month</span>
      </p>
    </div>
  );
};

export default Performance;
