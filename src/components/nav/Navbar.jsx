import "@/styles/nav/Navbar.css";
import logo from "@/assets/react.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useMediaQuery, useUpdateEffect } from "@react-hookz/web";

export default function Navbar() {
  const [menuButtonIcon, setMenuButtonIcon] = useState(faBars);
  const navRef = useRef(null);
  const md = useMediaQuery('(max-width: 1140px)', { initializeWithValue: false });

  function closeNav() {
    navRef.current.classList.add('hidden_el');
    setMenuButtonIcon(faBars);
  }

  function openNav() {
    navRef.current.classList.remove('hidden_el');
    setMenuButtonIcon(faXmark);
  }

  function handleMenuBtnClick() {
    if (menuButtonIcon === faBars) {
      openNav()
      return;
    }
    closeNav();
  }

  useUpdateEffect(() => {
    if (md) {
      closeNav();
      return;
    }
    openNav();
  }, [md])

  return (
    <header className="header">
      <a href="/">
        <img className="logo" src={logo} alt="Logo"/>
        PylaAI
      </a>
      <nav className="nav" ref={navRef}>
        <a className="link" href="/">Pricing</a>
        <a className="link" href="/">Showcase</a>
        <a className="link" href="/">Tutorial</a>
        <a className="link" href="/">Download</a>
        <a className="link" href="/">Forum</a>
      </nav>
      <span className="menu_button" onClick={handleMenuBtnClick}>
        <FontAwesomeIcon className="menu_icon" icon={menuButtonIcon} />
      </span>
      <a href="/">
        <span className="join_discord_btn">
          <FontAwesomeIcon className="discord_logo" icon={faDiscord} />
          <span className="join_discord_text">Join Discord</span>
        </span>
      </a>
    </header>
  )
}
