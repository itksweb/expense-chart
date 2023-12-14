import logo from "./images/logo.svg";

const Header = () => {
  return (
    <header className="card flex">
      <p className="balance">
        <span className="balanceLabel smf">My balance</span>
        <br />
        <span className="balanceValue">$921.48</span>
      </p>
      <img className="logo" src={logo} alt="my-logo" width="45" height="30" />
    </header>
  );
};

export default Header;
