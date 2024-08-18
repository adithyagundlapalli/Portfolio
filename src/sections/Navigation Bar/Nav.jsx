import React from "react";

export default function Nav() {
  return (
    <>
      <header
        id="header"
        style={{
          margin: "0px",
          fontFamily: "verdana",
          boxSizing: "border-box",
          padding: "20px 200px",
          background: "#161616",
          position: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
          letterSpacing: "5px",
        }}
      >
        <a
          href="#home"
          style={{
            margin: "0px",
            padding: "0px",
            fontFamily: "verdana",
            boxSizing: "border-box",
          }}
        >
          <img
            className="logo"
            alt="logo"
            src="https://adithyagundlapalli.github.io/personalportfolio/img/logo.png"
            style={{
              margin: "0px",
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              borderRadius: "50px",
              color: "#fff",
              width: "50%",
              marginLeft: "0px",
              cursor: "pointer",
            }}
          />
        </a>
        <nav
          style={{
            margin: "0px",
            padding: "0px",
            fontFamily: "verdana",
            boxSizing: "border-box",
          }}
        >
          <ul
            id="sidemenu"
            className="menu"
            style={{
              margin: "0px",
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              listStyle: "none",
            }}
          >
            <li
              style={{
                margin: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                padding: "0px 20px",
                display: "inline-block",
                fontSize: "18px",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              <a
                href="https://adithyagundlapalli.github.io/personalportfolio/#home"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  transition: "0.3s",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                HOME
              </a>
            </li>
            <li
              style={{
                margin: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                padding: "0px 20px",
                display: "inline-block",
                fontSize: "18px",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              <a
                href="https://adithyagundlapalli.github.io/personalportfolio/#about"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  transition: "0.3s",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                ABOUT
              </a>
            </li>
            <li
              style={{
                margin: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                padding: "0px 20px",
                display: "inline-block",
                fontSize: "18px",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              <a
                href="https://adithyagundlapalli.github.io/personalportfolio/#portfolio"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  transition: "0.3s",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                PORTFOLIO
              </a>
            </li>
            <li
              style={{
                margin: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                padding: "0px 20px",
                display: "inline-block",
                fontSize: "18px",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              <a
                href="https://adithyagundlapalli.github.io/personalportfolio/#contact"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  transition: "0.3s",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                CONTACT
              </a>
            </li>
            <i
              className="bx bxs-chevron-down"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                fontVariant: "normal",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: 1,
                textRendering: "auto",
                textTransform: "none",
                speak: "none",
                WebkitFontSmoothing: "antialiased",
                color: "rgb(255, 255, 255)",
                display: "none",
                fontFamily: "boxicons",
              }}
            />
            <img
              id="theme-icon"
              src="https://adithyagundlapalli.github.io/personalportfolio/img/sun.png"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                marginLeft: "280px",
                width: "30px",
                cursor: "pointer",
              }}
            />
          </ul>
          <i
            id="menubtn"
            className="bx bx-menu"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              fontVariant: "normal",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: 1,
              textRendering: "auto",
              textTransform: "none",
              speak: "none",
              WebkitFontSmoothing: "antialiased",
              display: "none",
              color: "#fff",
              fontFamily: "boxicons",
            }}
          />
        </nav>
      </header>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  margin: 0px;
  padding: 0px;
  font-family: verdana;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0px;
  padding: 0px;
  font-family: verdana;
  box-sizing: border-box;
  background-image: ;
  background-position-x: ;
  background-position-y: ;
  background-repeat: ;
  background-attachment: ;
  background-origin: ;
  background-clip: ;
  background-color: ;
  background-size: cover;
}
`,
        }}
      />
    </>
  );
}
