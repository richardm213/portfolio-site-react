import Home from "../Home";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import Coursework from "../Coursework";
import "./style.css";

function App() {
  return (
    <div class="app">
      <Home name="Richard Meng" />
      <AboutMe />
      <Projects />
      <Coursework />
    </div>
  );
}

export default App;
