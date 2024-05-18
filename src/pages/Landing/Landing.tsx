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
      {/*added pt-24 to fix scroll in view issue */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={skillRef}>
        <Skills />
      </div>
    </div>
  );
};

export default Landing;
