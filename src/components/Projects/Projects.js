import React from "react";
import "./style.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="project-grid">
        <div className="project-header">
          <h2>Projects</h2>
        </div>

        <div className="project-item">
          <a
            href="https://github.com/richardm213/othello-ai"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-pic"
              src={require("../../assets/othello.png")}
              alt="Othello game board"
            />
          </a>
          <p>
            I created an Othello AI which uses a custom evaluation function to
            play the game of Othello.
          </p>
        </div>

        <div className="project-item">
          <a
            href="https://github.com/richardm213/spotify-top-songs"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-pic"
              src={require("../../assets/spotify.jpg")}
              alt="Spotify logo"
            />
          </a>
          <p>
            I build the frontend and backend of an app that displays your top 50
            Spotify songs based on a chosen time range.
          </p>
        </div>

        <div className="project-item">
          <a
            href="https://github.com/richardm213/sleep-tracker"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-pic"
              src={require("../../assets/sleep.jpg")}
              alt="Sleep tracker icon"
            />
          </a>
          <p>
            I created a sleep tracking app which tracks users' sleep and
            sleepiness in Ionic.
          </p>
        </div>

        <div className="project-item">
          <a
            href="https://github.com/richardm213/maze-generator-solver"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-pic"
              id="maze-pic"
              src={require("../../assets/maze.png")}
              alt="Maze"
            />
          </a>
          <p>
            I implemented a maze generator and maze solver using recursive
            backtracking.
          </p>
        </div>

        <div className="project-item">
          <a
            href="https://github.com/richardm213/spotify-browser"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-pic"
              src={require("../../assets/spotify.jpg")}
              alt="Spotify logo"
            />
          </a>
          <p>
            I completed the front end portion of a Spotify Browser. Users can
            connect their Spotify account and search for artists, albums, and
            tracks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
