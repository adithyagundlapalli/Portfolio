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
      <header className="header">

      <a className="title" href="#home">
          ADITHYA
        </a>
        
        <nav className="navbar">

          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
          <img id="theme-icon" src={themeIcon} onClick={toggleTheme}/>

    
        </nav>
      </header>
    </>
  );
}

export default Nav;