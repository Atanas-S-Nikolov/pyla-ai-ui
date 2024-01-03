import "../../styles/nav/Navbar.css";
import logo from "../../assets/react.svg";

export default function Navbar() {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src={logo} alt="Logo"/>
        PylaAI
      </a>
      <nav className="nav">
        <a href="/">Pricing</a>
        <a href="/">Showcase</a>
        <a href="/">Tutorial</a>
        <a href="/">Download</a>
        <a href="/">Forum</a>
        <a href="/">
          <span className="join_discord_btn">
            Join Discord
          </span>
        </a>
      </nav>
    </header>
  )
}
