import React from "react";
import "./NavStyles.css"
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { useTheme } from '../../common/ThemeContext';


function Nav() {
    
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'dark' ? sun : moon;

  return (
    
    <>
      <header id="header">
        <a href="#home">
          <img
            className="logo"
            alt="logo"
            src="https://adithyagundlapalli.github.io/personalportfolio/img/logo.png"
          />
        </a>
        <nav>
          <ul id="sidemenu" className="menu">
            <li>
              <a href="#home">
                HOME
              </a>
            </li>
            <li>
              <a href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#portfolio">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#contact">
                CONTACT
              </a>
            </li>
            <i className="bx bxs-chevron-down" />
            <img
              id="theme-icon"
              src={themeIcon}
              onClick={toggleTheme}
            />
          </ul>
          <i id="menubtn" className="bx bx-menu" />
        </nav>
      </header>
    </>
  );
}

export default Nav;