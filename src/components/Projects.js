import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import p4 from "../assets/project4.png";
import p5 from "../assets/project5.png";

const Projects = () => {
  return (
    <div id="projects">
      <a href="https://github.com/evanhu96/Week-3-Challenge">
        <img className="project" src={p1} alt="passwordgenerator" />
        <figcaption>Password Generator</figcaption>
      </a>
      <a href="https://github.com/evanhu96/week-5-challenge">
        <img className="project" src={p2} alt="planner" />
        <figcaption>WorkDay planner</figcaption>
      </a>
      <a href="https://github.com/evanhu96/Week-4-Challenge">
        <img className="project" src={p3} alt="quiz" />
        <figcaption>Javascript Quiz</figcaption>
      </a>
      <a href="https://github.com/evanhu96/Week-1-Challenge">
        <img className="project" src={p4} alt="html seo" />
        <figcaption>HTML seo</figcaption>
      </a>
      <a href="https://github.com/evanhu96/Week-6-Challenge">
        <img className="project" src={p5} alt="WeatherApp" />
        <figcaption>Weather App</figcaption>
      </a>
    </div>
  );
};
export default Projects;
