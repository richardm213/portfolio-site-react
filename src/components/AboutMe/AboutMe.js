import React from "react";
import "./style.css";

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-me-box">
        <h2>About Me</h2>
        <img
          className="profile-pic"
          src={require("../../assets/richard.jpeg")}
          alt="Richard Meng"
        />
        <div id="about-me-text">
          Hi, I'm Richard! I'm currently a 4th year Computer Science major at UC
          Irvine. Whether it's for a challenging course or in my free time, I
          love to solve problems in the form of code. In particular, I really
          enjoy building out complex and efficient algorithms that have
          practical use cases. I have a wide range of skills from general
          purpose languages such as C++, Python, and Java to front end
          development technologies such as HTML, CSS, Javascript, and Javascript
          frameworks (React, Angular, Ionic). Additionally, I'm always eager to
          try out new technologies and expand my knowledge in the coding world.
          When I'm not coding, some of my hobbies include tennis, chess, and
          photography.
        </div>
        <div className="links">
          <a className="link" href="https://github.com/richardm213">
            GitHub
          </a>
          <a className="link" href="mailto:rmeng3@uci.edu">
            rmeng3@uci.edu
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/richard-meng-92348b194"
          >
            Linkedin
          </a>
        </div>
        <a href="#projects">
          <button id="see-projects-button">
            <span>See my projects</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
