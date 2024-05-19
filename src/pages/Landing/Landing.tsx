import { RefObject } from "react";
import About from "../../components/About/About";
import Home from "../../components/Home/Home";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

interface LandingProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
  skillRef: RefObject<HTMLDivElement>;
}

const Landing = ({ homeRef, aboutRef, projectRef, skillRef }: LandingProps) => {
  return (
    <div>
      <div ref={homeRef} id="Home">
        <Home />
      </div>
      <div ref={aboutRef} id="About">
        <About />
      </div>
      <div ref={projectRef} id="Project">
        <Projects />
      </div>
      <div ref={skillRef} id="Skill">
        <Skills />
      </div>
    </div>
  );
};

export default Landing;
