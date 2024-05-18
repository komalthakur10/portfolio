import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing/Landing";
import "./App.css";
import { useRef } from "react";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter>
      <Layout
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        skillRef={skillRef}
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
