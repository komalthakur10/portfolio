import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/Landing";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<string | null>(null);

  // for setting active div
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    [homeRef, aboutRef, projectRef, skillRef].forEach((element: any) => {
      if (element.current) {
        observer.observe(element.current);
      }
    });
    return () => {
      [homeRef, aboutRef, projectRef, skillRef].forEach((element: any) => {
        if (element.current) {
          observer.unobserve(element?.current);
        }
      });
    };
  }, [homeRef]);

  return (
    <BrowserRouter>
      <Layout
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        skillRef={skillRef}
        active={active}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                homeRef={homeRef}
                aboutRef={aboutRef}
                projectRef={projectRef}
                skillRef={skillRef}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
