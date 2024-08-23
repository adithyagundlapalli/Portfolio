import React from "react";
import "./HeroStyles.css";
import 'boxicons/css/boxicons.min.css'; // Import the Boxicons CSS


export default function Component() {
  return (
    <>
      <div id="home">
        <main>
          <section className="info">
            <img
              className="pfp"
              alt="profile picture"
              src="https://adithyagundlapalli.github.io/personalportfolio/img/profilepic.png"
            />
            <div className="intro">
              <div className="description">
                <p className="hi">Hi, my name is</p>
                <h1 className="name">Adithya Gundlapalli.</h1>
                <p className="about">
                  I am an aspiring student studying Computer Science at the
University of California, Santa Cruz. I have a focus in
front-end development. I love programming and solving problems!
                </p>
              </div>
              <div className="hero-icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/adithyagundlapalli"
                ><i class="bx bxl-github"></i
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/adithya01/"
                ><i class="bx bxl-linkedin"></i
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/adithya.gundlapalli/"
                ><i class="bx bxl-instagram"></i
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/adithyag01"
                ><i class="bx bxl-twitter"></i
              ></a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
