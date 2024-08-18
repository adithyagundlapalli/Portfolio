import React from "react";

export default function Component() {
  return (
    <>
    <div>   
        <main
          style={{
            margin: "0px",
            padding: "0px",
            fontFamily: "verdana",
            boxSizing: "border-box",
          }}
        >
          <section
            className="info"
            style={{
              margin: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              padding: "15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              letterSpacing: "1.5px",
            }}
          >
            <img
              className="pfp"
              alt="profile picture"
              src="https://adithyagundlapalli.github.io/personalportfolio/img/profilepic.png"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                borderRadius: "50%",
                border: "6px solid rgb(18, 73, 159)",
                width: "40%",
                objectFit: "cover",
                boxShadow: "rgb(18, 73, 159) 0px 0px 90px",
              }}
            />
            <div
              className="intro"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                color: "#fff",
                marginLeft: "200px",
                lineHeight: "35px",
                paddingBottom: "5%",
              }}
            >
              <div
                className="description"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="hi"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    fontFamily: "verdana",
                    boxSizing: "border-box",
                    fontSize: "25px",
                    paddingBottom: "5%",
                    paddingTop: "17%",
                  }}
                >
                  Hi, my name is
                </p>
                <h1
                  className="name"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    fontFamily: "verdana",
                    boxSizing: "border-box",
                    fontSize: "40px",
                    paddingBottom: "5%",
                    color: "rgb(0, 56, 147)",
                  }}
                >
                  Adithya Gundlapalli.
                </h1>
                <p
                  style={{
                    margin: "0px",
                    padding: "0px",
                    fontFamily: "verdana",
                    boxSizing: "border-box",
                  }}
                >{`I am an aspiring student studying Computer Science at the
University of California, Santa Cruz. I have a focus in
front-end development. I love programming and solving problems!`}</p>
              </div>
              <div
                className="icons"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  paddingTop: "4%",
                }}
              >
                <a
                  href="https://github.com/adithyagundlapalli"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    padding: "0px",
                    fontFamily: "verdana",
                    boxSizing: "border-box",
                    background: "transparent",
                    textDecoration: "none",
                    margin: "40px 15px 50px 0px",
                    transition: "0.5s",
                    paddingTop: "50px",
                    width: "50px",
                    height: "50px",
                    fontSize: "25px",
                    color: "#fff",
                  }}
                >
                  <i
                    className="bx bxl-github"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      fontWeight: 400,
                      fontStyle: "normal",
                      lineHeight: 1,
                      textRendering: "auto",
                      display: "inline-block",
                      textTransform: "none",
                      speak: "none",
                      WebkitFontSmoothing: "antialiased",
                      fontFamily: "boxicons",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/adithya01/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    padding: "0px",
                    fontFamily: "verdana",
                    boxSizing: "border-box",
                    background: "transparent",
                    textDecoration: "none",
                    margin: "40px 15px 50px 0px",
                    transition: "0.5s",
                    paddingTop: "50px",
                    width: "50px",
                    height: "50px",
                    fontSize: "25px",
                    color: "#fff",
                  }}
                >
                  <i
                    className="bx bxl-linkedin"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      fontWeight: 400,
                      fontStyle: "normal",
                      lineHeight: 1,
                      textRendering: "auto",
                      display: "inline-block",
                      textTransform: "none",
                      speak: "none",
                      WebkitFontSmoothing: "antialiased",
                      fontFamily: "boxicons",
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/adithya.gundlapalli/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    padding: "0px",
                    fontFamily: "verdana",
                    boxSizing: "border-box",
                    background: "transparent",
                    textDecoration: "none",
                    margin: "40px 15px 50px 0px",
                    transition: "0.5s",
                    paddingTop: "50px",
                    width: "50px",
                    height: "50px",
                    fontSize: "25px",
                    color: "#fff",
                  }}
                >
                  <i
                    className="bx bxl-instagram"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      fontWeight: 400,
                      fontStyle: "normal",
                      lineHeight: 1,
                      textRendering: "auto",
                      display: "inline-block",
                      textTransform: "none",
                      speak: "none",
                      WebkitFontSmoothing: "antialiased",
                      fontFamily: "boxicons",
                    }}
                  />
                </a>
                <a
                  href="https://twitter.com/adithyag01"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    padding: "0px",
                    fontFamily: "verdana",
                    boxSizing: "border-box",
                    background: "transparent",
                    textDecoration: "none",
                    margin: "40px 15px 50px 0px",
                    transition: "0.5s",
                    paddingTop: "50px",
                    width: "50px",
                    height: "50px",
                    fontSize: "25px",
                    color: "#fff",
                  }}
                >
                  <i
                    className="bx bxl-twitter"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      fontWeight: 400,
                      fontStyle: "normal",
                      lineHeight: 1,
                      textRendering: "auto",
                      display: "inline-block",
                      textTransform: "none",
                      speak: "none",
                      WebkitFontSmoothing: "antialiased",
                      fontFamily: "boxicons",
                    }}
                  />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
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
