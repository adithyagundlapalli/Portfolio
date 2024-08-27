import React from "react";
import "./ContactStyles.css"; // Import the CSS file
import 'boxicons/css/boxicons.min.css'; // Import the Boxicons CSS



export default function Contact() {

  

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f9dd2142-3a2e-4a7b-a801-e738d8f38497");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());


  if (res.success) {
    document.getElementById("msg").textContent = "message sent and will get back to you soon!";
    event.target.reset();
    setTimeout(() => {
      document.getElementById("msg").textContent = "";
    }, 5000);
  }
};


  

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <h1 className="sub-title">Feel Free to Contact Me!</h1>
          <div className="contact-left">
            <div className="gmail">
              <p>
                <a
                  className="gmail-icon"
                  href="mailto:adithyagundlapalli1@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="bx bxs-paper-plane" />
                </a>
                {"adithyagundlapalli1@gmail.com"}
              </p>
            </div>
            <div className="social-icons">
              <a
                href="https://github.com/adithyagundlapalli"
                rel="noopener noreferrer"
                target="_blank"
                className="social-icon"
              >
                <i className="bx bxl-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/adithya01/"
                rel="noopener noreferrer"
                target="_blank"
                className="social-icon"
              >
                <i className="bx bxl-linkedin" />
              </a>
              <a
                href="https://www.instagram.com/adithya.gundlapalli/"
                rel="noopener noreferrer"
                target="_blank"
                className="social-icon"
              >
                <i className="bx bxl-instagram" />
              </a>
              <a
                href="https://twitter.com/adithyag01"
                rel="noopener noreferrer"
                target="_blank"
                className="social-icon"
              >
                <i className="bx bxl-twitter" />
              </a>
            </div>
            <a className="btn" href="https://adithyagundlapalli.github.io/personalportfolio/">
              Download Resume
            </a>
          </div>
          <div className="contact-right">
            <form onSubmit={onSubmit} name="submit-form">
              <input name="Name" type="text" required placeholder="your name" />
              <input name="Email" type="text" required placeholder="your email" />
              <textarea name="Message" required rows={6} placeholder="your message" />
              <button className="btn2" type="submit">
                Submit
              </button>
            </form>
            <span id="msg" />
          </div>
        </div>
      </div>
    </div>
  );
}
