import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="information"
        style={{
          margin: "0px",
          padding: "0px",
          fontFamily: "verdana",
          boxSizing: "border-box",
        }}
      >
        <div
          className="center-align"
          style={{
            margin: "0px",
            padding: "0px",
            fontFamily: "verdana",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <h1
            className="heading"
            style={{
              margin: "0px",
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              marginBottom: "50px",
              textAlign: "center",
              color: "#fff",
              fontSize: "40px",
            }}
          >
            About Me
          </h1>
          <p
            className="desc"
            style={{
              margin: "0px",
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              marginLeft: "350px",
              marginRight: "350px",
              textAlign: "center",
              color: "#fff",
              letterSpacing: "1.5px",
              lineHeight: 2,
              fontSize: "20px",
            }}
          >{`From my freshman year in high school, I have immersed myself in the
world of programming, cultivating a deep passion for problem-solving
through code. Proficient in an array of programming languages and
frameworks, including Python, HTML, CSS, JavaScript, and Angular, I
bring a versatile skill set to the table. Currently interning at
Intern Protege as a web developer, I am gaining valuable hands-on
experience and further honing my abilities in the ever-evolving
field of computer science.`}</p>
          <div
            className="tabs"
            style={{
              margin: "0px",
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
            }}
          >
            <p
              className="t active-link"
              style={{
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                margin: "50px",
                fontSize: "20px",
                fontWeight: 500,
                cursor: "pointer",
                position: "relative",
                display: "inline-block",
                alignItems: "center",
                color: "#fff",
              }}
            >
              Skills
            </p>
            <p
              className="t"
              style={{
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                margin: "50px",
                fontSize: "20px",
                fontWeight: 500,
                cursor: "pointer",
                position: "relative",
                display: "inline-block",
                alignItems: "center",
                color: "#fff",
              }}
            >
              Experience
            </p>
            <p
              className="t"
              style={{
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                margin: "50px",
                fontSize: "20px",
                fontWeight: 500,
                cursor: "pointer",
                position: "relative",
                display: "inline-block",
                alignItems: "center",
                color: "#fff",
              }}
            >
              Education
            </p>
          </div>
          <div
            id="skills"
            className="tab-contents active-tab"
            style={{
              margin: "0px",
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              textDecoration: "none",
              display: "block",
            }}
          >
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                color: "rgb(18, 73, 159)",
                fontSize: "20px",
              }}
            >
              Technologies/Tools:
            </p>
            <ul
              className="skills-content"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
              }}
            >
              <li
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  listStyle: "none",
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                Python
              </li>
              <li
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  listStyle: "none",
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                Java
              </li>
              <li
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  listStyle: "none",
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                HTML
              </li>
              <li
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  listStyle: "none",
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                CSS
              </li>
              <li
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  listStyle: "none",
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                Javascript
              </li>
              <li
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  listStyle: "none",
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                Figma
              </li>
            </ul>
          </div>
          <div
            id="experience"
            className="tab-contents"
            style={{
              margin: "0px",
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              textDecoration: "none",
              display: "none",
            }}
          >
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                color: "rgb(18, 73, 159)",
                fontSize: "20px",
              }}
            >
              Experience
            </p>
            <ul
              className="skills-content"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
              }}
            >
              <li
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  listStyle: "none",
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                Web Development Intern @ Intern Protege
              </li>
            </ul>
          </div>
          <div
            id="education"
            className="tab-contents"
            style={{
              margin: "0px",
              padding: "0px",
              fontFamily: "verdana",
              boxSizing: "border-box",
              textDecoration: "none",
              display: "none",
            }}
          >
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
                color: "rgb(18, 73, 159)",
                fontSize: "20px",
              }}
            >
              Education
            </p>
            <ul
              className="skills-content"
              style={{
                margin: "0px",
                padding: "0px",
                fontFamily: "verdana",
                boxSizing: "border-box",
              }}
            >
              <li
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  listStyle: "none",
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                Mountain House High School
              </li>
              <li
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "verdana",
                  boxSizing: "border-box",
                  listStyle: "none",
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                University of California: Santa Cruz
              </li>
            </ul>
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
