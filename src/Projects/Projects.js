import React from "react";
import "./style.css";

function Projects() {
  return (
    <div class="projects" id="projects">
      <div class="project-grid">
        <div class="project-header">
          <h2>Projects</h2>
        </div>

        <div class="project-item">
          <a
            href="https://github.com/richardm213/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="project-pic"
              src={require("../assets/othello.png")}
              alt="Othello game board"
            />
          </a>
          <p>
            I created an Othello AI which uses a custom evaluation function to
            play the game of Othello.
          </p>
        </div>

        <div class="project-item">
          <a
            href="https://github.com/richardm213/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="project-pic"
              src={require("../assets/sleep.jpg")}
              alt="Sleep tracker icon"
            />
          </a>
          <p>
            I created a sleep tracking app which tracks users' sleep and
            sleepiness in Ionic.
          </p>
        </div>

        <div class="project-item">
          <a
            href="https://github.com/richardm213/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="project-pic"
              id="maze-pic"
              src={require("../assets/maze.png")}
              alt="Maze"
            />
          </a>
          <p>
            I implemented a maze generator and maze solver using recursive
            backtracking.
          </p>
        </div>

        <div class="project-item">
          <a
            href="https://github.com/richardm213"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="project-pic"
              src={require("../assets/spotify.jpg")}
              alt="Spotify logo"
            />
          </a>
          <p>
            I completed the front end portion of a Spotify Browser. Users can
            connect their Spotify account and search for artists, albums, and
            tracks.
          </p>
        </div>

        <div class="project-item">
          <a
            href="https://github.com/richardm213"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="project-pic"
              src={require("../assets/twitter.webp")}
              alt="Twitter logo"
            />
          </a>
          <p>
            I created an app that categorizes tweets based on certain filters
            and displays data through graphs. Users can also search up tweets
            based on their content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
