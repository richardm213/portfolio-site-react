import React from "react";
import "./style.css";

function AboutMe() {
  return (
    <div class="about-me" id="about-me">
      <div class="about-me-box">
        <h2>About Me</h2>
        <img
          class="profile-pic"
          src={require("../assets/richard.jpeg")}
          alt="Richard Meng"
        />
        <p>
          Hi, I'm Richard! I'm currently a 4th year Computer Science major at UC
          Irvine. <br />
          Some of my hobbies include tennis, chess, and photography.
        </p>
        <div class="links">
          <a class="link" href="https://github.com/richardm213">
            GitHub
          </a>
          <a class="link" href="mailto:rmeng3@uci.edu">
            rmeng3@uci.edu
          </a>
          <a
            class="link"
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
