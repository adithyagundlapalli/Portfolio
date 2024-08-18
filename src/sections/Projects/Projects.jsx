import React from "react";

export default function Projects() {
  return (
    <>
      <div
        className="container"
        style={{
          margin: "0px",
          padding: "0px",
          fontFamily: "verdana",
          boxSizing: "border-box",
        }}
      >
        <h1
          className="subtitle"
          style={{
            margin: "0px",
            padding: "0px",
            fontFamily: "verdana",
            boxSizing: "border-box",
            color: "#fff",
            textAlign: "center",
            marginTop: "150px",
            fontSize: "40px",
          }}
        >
          Portfolio
        </h1>
        <div
          className="project-list"
          style={{
            margin: "0px",
            padding: "0px",
            fontFamily: "verdana",
            boxSizing: "border-box",
          }}
        >
          <div
            className="project"
            style={{
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              margin: "100px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "75%",
            }}
          >
            <a
              href="https://github.com/adithyagundlapalli/simplecalculator.git"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
              }}
            >
              <img
                className="proj-img"
                alt="calculator project"
                src="https://adithyagundlapalli.github.io/personalportfolio/img/calculator.jpeg"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  borderRadius: "50%",
                  border: "2px solid rgb(18, 73, 159)",
                  width: "300px",
                  cssFloat: "left",
                  boxShadow: "rgb(18, 73, 159) 0px 0px 60px",
                }}
              />
            </a>
            <div
              className="proj"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                color: "#fff",
                marginLeft: "100px",
                letterSpacing: "1.5px",
                lineHeight: 2,
                textAlign: "left",
              }}
            >
              <h1
                className="proj-title"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                }}
              >
                Simple Calculator with GUI
              </h1>
              <p
                className="proj-description"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                }}
              >{`I recently created a beginner-friendly calculator with a
graphical user interface using Python's Tkinter. This project
marked my introduction to Tkinter, allowing me to explore the
basics of GUI development while crafting a simple and visually
appealing tool for basic arithmetic operations. The clean design
and intuitive interface make it a great starting point for my
journey into more complex Tkinter projects.`}</p>
            </div>
          </div>
          <div
            className="project"
            style={{
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              margin: "100px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "75%",
            }}
          >
            <a
              href="https://github.com/adithyagundlapalli/personalportfolio.git"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
              }}
            >
              <img
                className="proj-img"
                alt="personal portfolio website"
                src="https://adithyagundlapalli.github.io/personalportfolio/img/website.png"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  borderRadius: "50%",
                  border: "2px solid rgb(18, 73, 159)",
                  width: "300px",
                  cssFloat: "left",
                  boxShadow: "rgb(18, 73, 159) 0px 0px 60px",
                }}
              />
            </a>
            <div
              className="proj"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                color: "#fff",
                marginLeft: "100px",
                letterSpacing: "1.5px",
                lineHeight: 2,
                textAlign: "left",
              }}
            >
              <h1
                className="proj-title"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                }}
              >
                Personal Portfolio Website
              </h1>
              <p
                className="proj-description"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                }}
              >{`I delved into front-end and web development by creating a
personal portfolio website using HTML, CSS, and JavaScript. This
project not only demonstrates my proficiency in these
technologies but also serves as a dynamic self-marketing tool,
showcasing my projects and skills to potential opportunities.
The website is more than a resume; it's a visually engaging
representation of my journey and capabilities in the evolving
field of front-end development.`}</p>
            </div>
          </div>
        </div>
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
