import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="copyright"
        style={{
          margin: "0px",
          fontFamily: "verdana",
          boxSizing: "border-box",
          padding: "25px 0px",
          background: "rgb(38, 38, 38)",
          color: "rgb(255, 255, 255)",
          width: "100%",
          textAlign: "center",
          fontWeight: 300,
        }}
      >
        <p
          style={{
            margin: "0px",
            padding: "0px",
            fontFamily: "verdana",
            boxSizing: "border-box",
          }}
        >
          Designed & Developed by Adithya Gundlapalli 🤟🏾 2024
        </p>
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
