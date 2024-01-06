import "@/styles/nav/Navbar.css";
import logo from "@/assets/react.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <header className="header">
      <a href="/">
        <img className="logo" src={logo} alt="Logo"/>
        PylaAI
      </a>
      <nav className="nav">
        <a className="link" href="/">Pricing</a>
        <a className="link" href="/">Showcase</a>
        <a className="link" href="/">Tutorial</a>
        <a className="link" href="/">Download</a>
        <a className="link" href="/">Forum</a>
        <a href="/">
          <span className="join_discord_btn">
            <FontAwesomeIcon className="discord_logo" icon={faDiscord} />
            Join Discord
          </span>
        </a>
      </nav>
    </header>
  )
}
