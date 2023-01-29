import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";

const Body = ({ current, lastClick, setLastClick }) => {
  if (current == "About") {
    return (
      <div className="body">
        <About />
      </div>
    );
  } else if (current == "Contact") {
    return (
      <div className="body">
        <Contact lastClick={lastClick} setLastClick={setLastClick} />
      </div>
    );
  } else if (current == "Resume") {
    return (
      <div className="body">
        <Resume />
      </div>
    );
  } else if (current == "Projects") {
    return (
      <div className="body">
        <Projects />
      </div>
    );
  }
};
export default Body;
