import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import "./style.css";

const updateMode = (darkMode) => {
  const root = document.documentElement;
  if (!darkMode) {
    root.style.setProperty("--bg-primary", "#FFFFFF");
    root.style.setProperty("--text-primary", "#000000");
    root.style.setProperty("--invert", "0%");
  } else {
    root.style.setProperty("--bg-primary", "#000000");
    root.style.setProperty("--text-primary", "#FFFFFF");
    root.style.setProperty("--invert", "100%");
  }
};

function Home(props) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    updateMode(darkMode);
  }, [darkMode]);

  const handleNameClick = () => setDarkMode((prevMode) => !prevMode);

  const particlesInit = useCallback((engine) => {
    console.log(engine);
    loadFull(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <div className="home">
      <Particles
        id="tsparticles"
        options={particlesOptions}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className="home-box">
        <h1 id="name-header" onClick={() => handleNameClick()}>
          {props.name}
        </h1>
        <a href="#about-me">
          <img
            id="go-down"
            src={require("../../assets/down-arrow.png")}
            alt="Down arrow"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
