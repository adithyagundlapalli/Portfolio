import React, { useState } from "react";
import "./NavStyles.css";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { useTheme } from '../../common/ThemeContext';

function Nav() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'dark' ? sun : moon;
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="header">
      <a className="title" href="#home">ADITHYA</a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
        <a onClick={handleMenuClick} href="#home">HOME</a>
        </li>
        <li>
        <a onClick={handleMenuClick} href="#about">ABOUT</a>
        </li>
        <li>
          <a onClick={handleMenuClick} href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a onClick={handleMenuClick} href="#contact">CONTACT</a>
        </li>
        <li>
        <img id="theme-icon" src={themeIcon} onClick={toggleTheme } alt="Theme icon"/>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;
