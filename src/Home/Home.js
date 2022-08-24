import React from "react";
import "./style.css";

function Home(props) {
  return (
    <div class="home">
      <div class="home-box">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Home;
