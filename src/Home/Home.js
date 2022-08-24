import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import "./style.css";

function Home(props) {
  const particlesInit = useCallback((engine) => {
    console.log(engine);
    loadFull(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <div class="home">
      <Particles
        options={particlesOptions}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div class="home-box">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Home;
