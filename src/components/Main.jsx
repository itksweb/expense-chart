const Main = (props) => {
  return (
    <main className="content card">
      <p className="spending bold">Spending - Last 7 days</p>
      {props.children}
    </main>
  );
};

export default Main;
